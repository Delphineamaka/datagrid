import { Box } from '@mui/material';
import React from 'react'
import VehicleLayout from './VehicleLayout';
import VehicleSidebar from './VehicleSidebar';
 
 

function VehicleDash() {
  return (
	<Box className = 'dash__board'
	sx = {
	  {
	    paddingTop: 10,
	    width: '100%',
	    backgroundColor: 'FAFAFA'
	  }
	} >
	  <VehicleSidebar />
      <VehicleLayout />
	</Box>
  )
}

export default VehicleDash;
