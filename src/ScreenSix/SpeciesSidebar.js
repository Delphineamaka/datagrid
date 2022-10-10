import React from 'react'
 import { ImageList, ImageListItem, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
 import { Stack } from '@mui/material';
import { Box } from '@mui/system'
import { List } from 'reactstrap'
import starwar from '../Asset/starwar.png'
import dashboard from '../Asset/dashboard.png'
import building from '../Asset/building.png'
import shopping from '../Asset/shopping.png'
import taxi from '../Asset/taxi.png'
import menu from '../Asset/menu.png'
import { Link } from 'react-router-dom';


function SpeciesSidebar() {
  return (
	   	   <Box>
     <Box position='fixed'>
     <List>
       
     <Stack direction='row'>
        <ImageListItem  
          sx={{marginTop: 10, padding: 3}}>
            <img src={starwar} />
      </ImageListItem>
     
      
    </Stack>
      <ListItemButton >
          <ListItem disablePadding >
         <ImageListItem>
         <img className='list__item' src={dashboard} />
       </ImageListItem>
       <nav>
        <Link to='/SideBar'> <ListItemText primary="Dashboard" /></Link>
       </nav>
       
       </ListItem>
      </ListItemButton>

        <ListItem disablePadding>
       <ListItemButton>
       <ImageListItem>
         <img className='list__item' src={building} />
       </ImageListItem>
       <nav>
        <Link Link to = '/Starwarship' >
          <ListItemText primary="Starships" />
        </Link>
       </nav>
        
       </ListItemButton>
       </ListItem>
        <ListItem disablePadding>
       <ListItemButton>
       <ImageListItem>
         <img className='list__item' src={shopping} />
       </ImageListItem>
       <nav>
       
        <Link to='/DashBoardThree'>
          <ListItemText primary="people" />
        </Link>
       </nav>
        
       </ListItemButton>
       </ListItem>
        <ListItem disablePadding>
       <ListItemButton>
        <ImageListItem>
         <img className='list__item' src={taxi} />
       </ImageListItem>
       <nav>
        <Link to='/VehicleDash'> <ListItemText primary="vehicles" /></Link>
       </nav>
       
       </ListItemButton>
       </ListItem>
        <ListItem disablePadding>
       <ListItemButton>
        <ImageListItem>
         <img className='list__item' src={menu} />
       </ImageListItem>
       <nav>
       <Link   to = '/SpeciesDash' >
          <ListItemText primary="species" />
       </Link>
      
        </nav>
     </ListItemButton>
       </ListItem>
    </List>
    </Box>
     </Box>
  )
}

export default SpeciesSidebar;
