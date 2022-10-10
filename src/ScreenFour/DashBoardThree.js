import React from 'react'
import { Box } from '@mui/material';
import LayoutDash from './LayoutDash'
import SidebarDash from './SidebarDash'
 

function DashBoardThree() {
  return (
	<Box className = 'dash__board'
	sx = {
	  {
	    paddingTop: 10,
	    width: '100%',
	    backgroundColor: 'FAFAFA'
	  }
	} >
	 <SidebarDash />
	 <LayoutDash />
	</Box>
  )
}

export default DashBoardThree;
