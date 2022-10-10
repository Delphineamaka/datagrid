import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';

 

const columns = [
	{ field: 'name', headerName: 'name', width: 130 },

  {field: 'model', headerName: 'Model', width: 150,
 },
   
  {
    field: 'class',
    headerName: 'Class',
    width: 200,
    
  },
 {
 	field: 'cost',
 	headerName: 'Cost(in GC)',
 	width: 150,
 },
   { field: 'passengers', headerName: 'Passengers', width: 150 },
  { field: 'length', headerName: 'Length', width: 130 },

 
  {
  	field: 'crew',
  	headerName: 'Crew',
  	width: 200,

  },
  
];

const rows = [
  {
   id: '',
   name: 'Death star',
    model: 'T -65 xwing',
     cost: '500(GC)',
    length: "500 meters",
    crew: 200,
    class: "Starfighter",
    passengers: 200,
   
  },

  {
    id: 2,
	 name: 'Death star',
     model: 'T -65 xwing',
     cost: '500(GC)',
    length: "500 meters",
    class: "Starfighter",
    crew: 200,
     passengers: 200,
  },
  {
    id: 3,
	 name: 'Death star',
    model: 'T -65 xwing',
    cost: '500(GC)',
     length: "500 meters",
     class: "Starfighter",
     crew: 200,
     passengers: 200,
  },
  {
    id: 4,
	 name: 'Death star',
   model: 'T -65 xwing',
    cost: '500(GC)',
    length: "500 meters",
 crew: 200,
    class: "Starfighter",
    passengers: 200,
  },
  {
    id: 5,
	 name: 'Death star',
    model: 'T -65 xwing',
    cost: '500(GC)',
     length: "500 meters",
   crew: 200,
    class: "Starfighter",
    passengers: 200,
  },
  {
    id: 6,
	 name: 'Death star',
    model: 'T -65 xwing',
    cost: '500(GC)',
  length: "500 meters",
   crew: 200,
   class: "Starfighter",
      passengers: 200,
  },
  {
    id: 7,
	 name: 'Death star',
    model: 'T -65 xwing',
    cost: '500(GC)',
     length: "500 meters",
    crew: 200,
     class: "Starfighter",
     passengers: 200,
  },

  {
    id: 8,
	 name: 'Death star',
     model: 'T -65 xwing',
    cost: '500(GC)',
   length: "500 meters",
   crew: 200,
    class: "Starfighter",
     passengers: 200,
  },
  {
    id: 9,
	 name: 'Death star',
     model: 'T -65 xwing',
     cost: '500(GC)',
     length: "500 meters",
     crew: 200,
    class: "Starfighter",
     passengers: 200,
  },
];
 

export default function StarTable() {
   
  return (
    <div className='sec__one' style={{ height: 400, width: '100%', marginTop: 30}}>
     
      <DataGrid
        rows={rows}
        columns={columns}
       pageSize={9}
       rowsPerPageOptions={[10]}
	   checkboxSelection
        
      />
    </div>
  );
}
