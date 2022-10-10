import React from 'react'
import HeaderDash from './HeaderDash'
import HeaderDashTwo from './HeaderDashTwo'
import TableDash from './TableDash'

function LayoutDash() {
  return (
	<div style = {
	  {
	    paddingTop: 10,
	    width: '100%',
	    backgroundColor: 'FAFAFA'
	  }
	} >
	  <HeaderDash />
	  <HeaderDashTwo />
	  <TableDash />
	</div>
  )
}

export default LayoutDash;
