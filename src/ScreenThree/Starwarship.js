import { Box } from '@mui/material'
import React from 'react'
import Layout from './Layout'

import StarwarSidebar from './StarwarSidebar'

export default function Starwarship() {
  return (
	<Box className = 'starwar__ship'
	sx = {
	  {
	    paddingTop: 10,
	    width: '100%',
	    backgroundColor: 'FAFAFA'
	  }
	} >
    <StarwarSidebar />
	<Layout />


	</Box>
  )
}
