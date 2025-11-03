import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Drop from '../Tools/Drop.jsx'
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background: 'linear-gradient(140deg, #1db5f1ff, #ca7900ff)'}}>
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
            <Drop/>
          </Stack>
            
        </Toolbar>
      </AppBar>
    </Box>
  );
}