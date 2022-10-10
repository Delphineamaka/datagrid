import React from 'react'
 import {  ImageListItem, ListItem, ListItemButton,   ListItemText } from '@mui/material'
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


function SidebarDash() {
  return (
	   	   <Box>
     <Box position='fixed'>
     <List>
       
     <Stack direction='row'>
        <ImageListItem  
          sx={{marginTop: 10, padding: 3}}>
            <img src={starwar} alt='' />
      </ImageListItem>
     
      
    </Stack>
      <ListItemButton >
          <ListItem disablePadding >
         <ImageListItem>
         <img className='list__item' src={dashboard} alt=''/>
       </ImageListItem>
       <nav>
        <Link to='/SideBar'> <ListItemText primary="Dashboard" /></Link>
       </nav>
       
       </ListItem>
      </ListItemButton>

        <ListItem disablePadding>
       <ListItemButton>
       <ImageListItem>
         <img className='list__item' src={building} alt='' />
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
         <img className='list__item' src={shopping} alt=''/>
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
         <img className='list__item' src={taxi} alt=''/>
       </ImageListItem>
       <nav>
        <Link to='/VehicleDash'> <ListItemText primary="vehicles" /></Link>
       </nav>
       
       </ListItemButton>
       </ListItem>
        <ListItem disablePadding>
       <ListItemButton>
        <ImageListItem>
         <img className='list__item' src={menu} alt='' />
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

export default SidebarDash;
