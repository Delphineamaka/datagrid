 import React from "react";
import { Toolbar,  MenuItem, Stack, Typography, IconButton } from "@mui/material";
 import Input from '@mui/material/InputLabel';
 import FormControl from '@mui/material/FormControl';
 import Select from '@mui/material/Select';
 import { Box } from '@mui/system'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
 import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
 import {Link} from 'react-router-dom';

 
 
 function HeaderDashTwo() {
	 const [year, setYear] = React.useState('current year');
	  const [week, setWeek] = React.useState('current week');
	  const handleChange = (event) => {
    setYear(event.target.value);
  };
  const weekChange = (event) =>{
	setWeek(event.target.value)
  }
	return(
   
       <Toolbar sx = {
       	{
       		backgroundColor: '#ffffff',
       		color: '#6b6b6b'

       	}
       } >
        
           <nav>
         <Link to='/'> <KeyboardArrowLeftIcon /></Link>
           
           </nav>
           <Typography>Back </Typography>
        <MenuItem>
          <Typography>200 total </Typography>
        </MenuItem>
     <Typography>showing 1-20 of 200 </Typography>
        <KeyboardArrowLeftIcon />
      <KeyboardArrowRightIcon />
   
	    <Box sx={{ flexGrow: 1}}  />
      <Stack direction='row' spacing={1.5}>
	 
      <Box>
		 <FormControl FormControl fullWidth size = "small"
		 sx = {{minWidth: 120} } >
         <Input id="demo-simple-select-label" />
        <Select
		placeholder="current year"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="current year"
          onChange={handleChange}
		  
        >
           
		  <MenuItem value='current year' >current year</MenuItem>
          <MenuItem value='last year'>last year</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
		  <MenuItem value={2019}>2019</MenuItem>
        </Select>
      </FormControl>

	</Box> 
	    <Box>
			<FormControl fullWidth sx={{  minWidth: 120 }} size="small" >
        <Input id="demo-simple-select-label" />
        <Select
		placeholder="current week"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={week}
          label="current week"
          onChange={weekChange}
		  
        >
           
		  <MenuItem value='current week' >current week</MenuItem>
          <MenuItem value='last week'>last week</MenuItem>
          <MenuItem value='week 20'>week 20</MenuItem>
		  <MenuItem value='week 19'>week 19</MenuItem>
        </Select>
      </FormControl>
		</Box>
     </Stack>
        </Toolbar>
  
      
 )
}


export default HeaderDashTwo;
