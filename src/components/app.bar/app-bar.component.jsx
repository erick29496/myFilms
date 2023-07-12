import * as React from 'react';

import { AuthContext, useAuth } from '../../utils/hooks/useAuth.utils';

import AccountCircle from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const MenuAppBar = () => {
  const { user, setUser } = React.useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logGoogleUser } = useAuth();
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHome = () => {
    navigate('/');
  }

  const handleProfile = () => {
    handleClose();
    navigate('/profile');
  }

  const handleAccount = () => {
    handleClose();
    navigate('/profile');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <MenuItem onClick={handleHome} style={{ width: 'fit-content' }}>
              <Typography variant="h6" component="div">
                My Films
              </Typography>
            </MenuItem>
          </div>
          {!user && (
            <MenuItem onClick={logGoogleUser}>Sign In</MenuItem>
          )}
          {user && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleAccount}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MenuAppBar;