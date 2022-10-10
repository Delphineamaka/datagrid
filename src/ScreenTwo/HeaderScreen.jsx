import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';
import images from '../Asset/images.png';

 

 
 

 function HeaderScreen() {
  
   const mobileMenuId = 'primary-search-account-menu-mobile';
   const renderMobileMenu = (
    <Menu>
      <MenuItem sx={{display: {xs: 'none', sm: 'none'}}}>
        <IconButton size="large" aria-label="show 4 new mails"      color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
  
        <Toolbar sx = {
        	{
        		backgroundColor: '#ffffff',
				color: '#6b6b6b'
				 
        	}
        } >
            
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
           Dashboard
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              
                <MailIcon />
              
            </IconButton>
            <IconButton
              size="large"
               
              color="inherit"
            >
              <Badge variant='dot' color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Avatar  alt='N' src={images} />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
     
      
    </Box>
  );
}


export default HeaderScreen
