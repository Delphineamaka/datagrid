



import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';
 
 

const columns = [
	{ field: 'vehicle_name', headerName: 'Vehicle name', width: 130 },

  {field: 'vehicle_model', headerName: 'Vehicle Model', width: 200,
 },
   
  {
    field: 'vehicle_class',
    headerName: 'Vehicle Class',
    width: 70,
    
  },
 {
 	field: 'vehicle_manufacturer',
 	headerName: 'Vehicle Manufacturer',
 	width: 200,
 },
  { field: 'vehicle_length', headerName: 'Vehicle Length', width: 130 },
  {
  	field: 'crew',
  	headerName: 'Crew',
  	width: 70,

  },

 { field: 'passengers', headerName: 'Passengers', width: 150 },
  {
    field: 'cargo_capacity',
    headerName: 'Cargo capacity',
    width: 150
  },

 
  
  
];

const rows = [
  {
   id: '1',
   vehicle_name: 'Sand Crawler',
    vehicle_model: 'All Terrain Attack Transport',
     vehicle_manufacturer: 'Corellia Mining corporation',
    vehicle_length: 36.8,
    crew: 40,
    vehicle_class: "Wheeled",
    passengers: 30,
	cargo_capacity: 5000,
   
  },

  {
    id: 2,
	vehicle_name: 'Sand Crawler',
     vehicle_model: 'All Terrain Attack Transport',
  vehicle_manufacturer: 'Corellia Mining corporation',
    vehicle_length: 36.8,
  vehicle_class: "Wheeled",
    crew: 40,
     passengers: 30,
	 cargo_capacity: 5000,
  },
  {
    id: 3,
	vehicle_name: 'Sand Crawler',
    vehicle_model: 'All Terrain Attack Transport',
    vehicle_manufacturer: 'Corellia Mining corporation', 
     vehicle_length: 36.8,
     vehicle_class: "Wheeled",
      crew: 40,
     passengers: 30,
	  cargo_capacity: 5000,
  },
  {
    id: 4,
   vehicle_name: 'Sand Crawler',
    vehicle_model: 'All Terrain Attack Transport',
    vehicle_manufacturer: 'Corellia Mining corporation',
    vehicle_length: 36.8, 
      crew: 40,
    vehicle_class: "Wheeled",
    passengers: 30,
	cargo_capacity: 5000,
  },
  {
    id: 5,
	vehicle_name: 'Sand Crawler',
    vehicle_model: 'All Terrain Attack Transport',
    vehicle_manufacturer: 'Corellia Mining corporation',
    vehicle_length: 36.8,
   crew: 200,
    vehicle_class: "Wheeled",
    passengers: 200,
	cargo_capacity: 5000,
  },
  {
    id: 6,
	vehicle_name: 'Sand Crawler',
    vehicle_model: 'All Terrain Attack Transport',
    vehicle_manufacturer: 'Corellia Mining corporation',
     vehicle_length: 36.8,
      crew: 40,
     vehicle_class: "Wheeled",
      passengers: 30,
	  cargo_capacity: 5000,
  },
  {
    id: 7,
	vehicle_name: 'Sand Crawler',
    vehicle_model: 'All Terrain Attack Transport',
    vehicle_manufacturer: 'Corellia Mining corporation',
    vehicle_length: 36.8,
      crew: 40,
     vehicle_class: "Wheeled",
     passengers: 30,
	 cargo_capacity: 5000,
  },

  {
     id: 8,
	 vehicle_name: 'Sand Crawler',
     vehicle_model: 'All Terrain Attack Transport',
     vehicle_manufacturer: 'Corellia Mining corporation', 
     vehicle_length: 36.8,
       crew: 40,
     vehicle_class: "Wheeled",
     passengers: 30,
	 cargo_capacity: 5000,
  },
  {
     id: 9,
	 vehicle_name: 'Sand Crawler',
     vehicle_model: 'All Terrain Attack Transport',
      vehicle_manufacturer: 'Corellia Mining corporation',
      vehicle_length: 36.8,
       crew: 40,
     vehicle_class: "Wheeled",
     passengers: 30,
	 cargo_capacity: 5000,
  },
];
 

export default function VehicleTable() {
   
  return (
    <div className = 'sec__one'
    style = {
      {
        height: 400,
        width: '100%',
        marginTop: 30
      }
    } >
     
      <DataGrid
        rows={rows}
        columns={columns}
       pageSize={6}
       rowsPerPageOptions={[10]}
	   checkboxSelection
        
      />
    </div>
  );
}

















