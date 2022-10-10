import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { MenuItem } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
 

 function NavHeader() {
  return (
    <Box>
      <AppBar position="fixed" >
        <Toolbar position='fixed' sx={{display: 'flex', backgroundColor: '#ffff'}}>
         
         <MenuItem sx={{display: 'flex', alignItems: 'center'}}> 
		<IconButton> <GridViewIcon   /></IconButton>
		 <Typography variant='h5' color='black'>untitled</Typography>
     <Typography variant='h6' color='black' marginLeft='8px'>sign-in</Typography>
     </MenuItem>
     <Box sx={{flexGrow: 1}}/>
		 <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
 
     <IconButton
           size='large'
             
          >
		       <HelpIcon />
           
          </IconButton> 
      <IconButton size='large' ><CloseFullscreenIcon /></IconButton>
		 <MenuItem  >
			<Typography color='black'>sign in</Typography>
		 </MenuItem>
     </Box> 
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavHeader;