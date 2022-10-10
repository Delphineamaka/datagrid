

import { Box} from '@mui/system'
import React from 'react'
import GridLayout from './GridLayout';
import HeaderScreen from './HeaderScreen';
import HeaderScreen2 from './HeaderScreen2';
import TableGrid from './TableGrid';

function Cards() {
  return (
<Box sx={{paddingTop: 10, width: '100%',backgroundColor: 'FAFAFA'}}>

<HeaderScreen />
<HeaderScreen2 />
<GridLayout />
<TableGrid />
</Box>
  )
}

export default Cards
