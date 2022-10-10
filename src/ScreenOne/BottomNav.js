import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom'
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
 
 
 function BottomNav() {
 
  const [page, setPage] = useState(1)
   
  function nextPage(){
    setPage(prevValue =>prevValue + 1)
  }
    function prevPage() {
      setPage(prevValue => prevValue - 1)
    }


  return (
    <Box sx={{width: '100%' }}>
        <BottomNavigation className='navigation'>
        <nav>
	    <Link to='/'>{<HomeIcon />} </Link>
      </nav>

      <BottomNavigation onClick={prevPage}>
      
          {<NavigateBeforeIcon  />}
      </BottomNavigation>
        
         
       
          <h3 className='header__icon'> {page} of 6 </h3>
          <BottomNavigation onClick={nextPage}>
        {<NavigateNextIcon   />}
        </BottomNavigation>
        </BottomNavigation>
    </Box>
  );
}

export default BottomNav;