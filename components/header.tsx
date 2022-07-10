import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import Button from "@mui/material/Button";
import TextField from "./textfield";

const Header = () => {
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
        <Box display="flex" flexDirection="row">
          <Box mr={1}>
            <TextField size="small" label="Email" variant="outlined" />
          </Box>
          <Box mr={1}>
            <TextField size="small" label="Password" variant="outlined" />
          </Box>
          <Button variant="outlined">Login / Register</Button>
        </Box>
      </Box>
    </Container>
  );
};
export default Header;
