import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 ,
      position: 'fixed',
      width: '100%', 
      top: 0,
      zIndex: 9999
    }}>
      <AppBar position="static"
      sx={{background: "linear-gradient(170deg, #2dce89, #2dcecc)"}}
      >
        <Toolbar>

         
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color='inherit' size='big'>
              <Link to='/' style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
            D.Q. DIGITALS
            </Link>
            </Button>
          </Typography>
          

          <Stack spacing={2} direction="row" justifyContent="center">
          <Button
          // variant="contained"
          color="success"
          size="big"
          > <Link to='/login' style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
            LOGIN
            </Link></Button>
          <Button
          // variant="contained"
          color="error"
          size="big"
          >
            <Link to='/register' style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
            REGISTER </Link> </Button>
          {/* <Button href='/login' color="inherit">Login</Button>
          <Button href='/users' color="inherit">Users</Button> */}
          </Stack>
            
            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon /> */}
          {/* </IconButton> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}