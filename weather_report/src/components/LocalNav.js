import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import { Link ,useLocation} from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Local Cities
        </Typography>
        <Button color="info"  variant="contained"><Link to="/localcities/addcity" > Add City</Link></Button>
        <Button color="error" variant="contained"><Link to={`/weatherapp?name=${name}`} > Go Back</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
