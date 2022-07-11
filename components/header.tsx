import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "./textfield";
import { useForm } from "react-hook-form";
import { auth, authentication } from "../services/api";
import { useAppState } from "../provider";
import Form from "./video-form";

const Header = () => {
  const { control, handleSubmit } = useForm();
  const { setAlert, auth: authState } = useAppState()
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  
  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      setLoading(true)
      await authentication(data)
    } catch (error) {
      setAlert({ status: true, message: "Login / Register is failed", type: "error" })
    } finally {
      setLoading(false)
    }
  };

  return (
    <Container maxWidth="xl">
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" pt={2} borderBottom={1} pb={3} mb={3}>
        <Box display="flex" flexDirection="row" alignItems="center">
          <HomeIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Funny Movies
          </Typography>
        </Box>
        {authState?.email ? (
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography>Welcome {authState.email}</Typography>
            <Box ml={1}>
              <Button variant="outlined" onClick={() => setIsOpen(true)}>Share a movie</Button>
            </Box>
            <Box ml={1}>
              <Button variant="outlined" onClick={() => auth.signOut()}>Logout</Button>
            </Box>
          </Box>
        ) : (<form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="row">
            <Box mr={1}>
              <TextField name="email" control={control} size="small" label="Email" variant="outlined" required />
            </Box>
            <Box mr={1}>
              <TextField type="password" name="password" control={control} size="small" label="Password" variant="outlined" required />
            </Box>
            <Button disabled={loading} variant="outlined" type="submit">Login / Register</Button>
          </Box>
        </form>)}

        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Form setIsOpen={setIsOpen} />
        </Modal>
      </Box>
    </Container>
  );
};
export default Header;
