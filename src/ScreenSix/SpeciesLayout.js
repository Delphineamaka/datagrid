import React from 'react'
import SpeciesHeadOne from './SpeciesHeadOne';
import SpeciesHeadTwo from './SpeciesHeadTwo';
import SpeciesTable from './SpeciesTable';
 

function SpeciesLayout() {
  return (
	<div style = {
	  {
	    paddingTop: 10,
	    width: '100%',
	    backgroundColor: 'FAFAFA'
	  }
	} >
      <SpeciesHeadOne />
	  <SpeciesHeadTwo />
	  <SpeciesTable />
	</div>
  )
}

export default SpeciesLayout;







