 import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import HomePg from './Component/HomePg';
import NavHeader from './Component/NavHeader';
import VehicleDash from './ScreenFive/VehicleDash';
import DashBoardThree from './ScreenFour/DashBoardThree';
import SpeciesDash from './ScreenSix/SpeciesDash';
import Starwarship from './ScreenThree/Starwarship';
 
 
import SideBar from './ScreenTwo/SideBar';
 
 
 

function App() {
  return (
     < >
       <NavHeader />
    <Routes>
     
     <Route  path='/' element={<HomePg />}/>
      <Route path='/SideBar' element={<SideBar />} /> 
       <Route path='/Starwarship' element={<Starwarship />} /> 
       <Route path='/DashBoardThree' element={<DashBoardThree />} /> 
       <Route path='/VehicleDash' element={<VehicleDash />} /> 
       <Route path='/SpeciesDash' element={<SpeciesDash />} />  
     
  
 </Routes>
  <Footer />
 </>
  );
}

export default App;
