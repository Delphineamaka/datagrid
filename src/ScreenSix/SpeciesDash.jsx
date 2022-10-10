import { Box } from '@mui/material';
import React from 'react'
import SpeciesLayout from './SpeciesLayout';
import SpeciesSidebar from './SpeciesSidebar';
 
 
 

function SpeciesDash() {
  return (
	<Box className = 'dash__board'
	sx = {
	  {
	    paddingTop: 10,
	    width: '100%',
	    backgroundColor: 'FAFAFA'
	  }
	} >
	 <SpeciesSidebar />
	 <SpeciesLayout />
	</Box>
  )
}

export default SpeciesDash;
