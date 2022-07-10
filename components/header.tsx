import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import Button from "@mui/material/Button";
import TextField from "./textfield";
import { useForm } from "react-hook-form";
import { auth, authentication } from "../services/api";
import { useAppState } from "../provider";

const Header = () => {
  const { control, handleSubmit } = useForm();
  const { setAlert } = useAppState()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      setLoading(true)
      await authentication(data)
    } catch (error) {
      console.log(error)
      setAlert({ status: true, message: "Login / Register is failed", type: "error" })
    } finally {
      setLoading(false)
    }
  };

  console.log(3, auth?.currentUser)

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
        {auth?.email ? (
          <Box>
            <Typography>Welcome {auth?.email}</Typography>
            <Button variant="outlined">Share a movie</Button>
            <Button variant="outlined" onClick={() => setAuth}>Logout</Button>
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
      </Box>
    </Container>
  );
};
export default Header;
