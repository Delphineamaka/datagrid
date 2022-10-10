import React from 'react'
import VehicleHeadOne from './VehicleHeadOne'
import VehicleHeadTwo from './VehicleHeadTwo'
import VehicleTable from './VehicleTable'

function VehicleLayout() {
  return (
	<div style = {
	  {
	    paddingTop: 10,
	    width: '100%',
	    backgroundColor: 'FAFAFA'
	  }
	} >
      <VehicleHeadOne />
	  <VehicleHeadTwo />
	  <VehicleTable />
	</div>
  )
}

export default VehicleLayout
