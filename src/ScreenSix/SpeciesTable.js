 
  import  React, { useState } from 'react';
  import { DataGrid } from '@mui/x-data-grid';
  import Pagination from '@mui/material/Pagination';
 
  const columns = [
    { field: 'name', headerName: ' name', width: 70 },

  {
    field: 'classification',
    headerName: 'Classification',
    width: 150,
  },
    
    {
      field: 'designation',
      headerName: 'Designation',
      width: 150,
      
    },

    { field: 'average_height', headerName: 'Average Height', width: 70 },
    {
      field: 'average_lifespan',
      headerName: 'Average Lifespan',
      width: 70,

    },

  { field: 'eye_color', headerName: 'Eye Color', width: 150 },
  {
    field: 'hair_color',
    headerName: 'Hair color',
    width: 150
  },

    {
      field: 'language',
      headerName: 'Language',
      width: 150
    },

  
    
    
  ];

  const rows = [
    {
    id: '1',
    name: 'Wookie',
      vehicle_model: 'All Terrain Attack Transport',
    classification: 'Mammal',
    average_height: '2.1CM',
      average_lifespan: 400,
      designation: "Sentient",
    eye_color: 'blue, green, yellow',
    hair_color: 'black, brown',
    language: 'shyriiwook',
    
    },

    {
      id: 2,
    name: 'Wookie',
      vehicle_model: 'All Terrain Attack Transport',
      classification: 'Mammal', 
        average_height: '2.1CM',
      designation: "Sentient",
        average_lifespan: 400,
      eye_color: 'blue, green, yellow',
        hair_color: 'black, brown',
      language: 'shyriiwook',
    },
    {
      id: 3,
      name: 'Wookie',
      vehicle_model: 'All Terrain Attack Transport',
        classification: 'Mammal',
        average_height: '2.1CM',
      designation: "Sentient",
        average_lifespan: 400, 
      eye_color: 'blue, green, yellow',
        hair_color: 'black, brown',
      language: 'shyriiwook',
    },
    {
      id: 4,
      name: 'Wookie',
      vehicle_model: 'All Terrain Attack Transport',
      classification: 'Mammal',
      average_height: '2.1CM',
        average_lifespan: 400,
      designation: "Sentient",
    eye_color: 'blue, green, yellow',
      hair_color: 'black, brown',
      language: 'shyriiwook', 
    },
    {
      id: 5,
    name: 'Wookie',
      vehicle_model: 'All Terrain Attack Transport',
      classification: 'Mammal',
      average_height: '2.1CM',
          average_lifespan: 400, crew: 200,
      designation: "Sentient",
      eye_color: 'blue, green, yellow',
        hair_color: 'black, brown',
      language: 'shyriiwook',
    },
    {
      id: 6,
      name: 'Wookie',
      vehicle_model: 'All Terrain Attack Transport',
      classification: 'Mammal',
        average_height: '2.1CM',
      average_lifespan: 400,
        designation: "Sentient",
    eye_color: 'blue, green, yellow',
      hair_color: 'black, brown',
    language: 'shyriiwook',
    },
    {
      id: 7,
      name: 'Wookie',
      vehicle_model: 'All Terrain Attack Transport',
        classification: 'Mammal',
        average_height: '2.1CM',
        average_lifespan: 400,
      designation: "Sentient",
      eye_color: 'blue, green, yellow',
        hair_color: 'black, brown',
    language: 'shyriiwook',
    },

    {
      id: 8,
      name: 'Wookie',
      vehicle_model: 'All Terrain Attack Transport',
      classification: 'Mammal',
        average_height: '2.1CM',
        average_lifespan: 400,
      designation: "Sentient",
      eye_color: 'blue, green, yellow',
        hair_color: 'black, brown',
      language: 'shyriiwook',
    },
    {
      id: 9,
      name: 'Wookie',
      vehicle_model: 'All Terrain Attack Transport',
      classification: 'Mammal',
        average_height: '2.1CM',
      average_lifespan: 400,
        designation: "Sentient",
      eye_color: 'blue, green, yellow',
      hair_color: 'black, brown',
      language: 'shyriiwook',
    },
     {
       id: 10,
       name: 'Wookie',
       vehicle_model: 'All Terrain Attack Transport',
       classification: 'Mammal',
       average_height: '2.1CM',
       average_lifespan: 400,
       designation: "Sentient",
       eye_color: 'blue, green, yellow',
       hair_color: 'black, brown',
       language: 'shyriiwook',
     },
      {
        id: 11,
        name: 'Wookie',
        vehicle_model: 'All Terrain Attack Transport',
        classification: 'Mammal',
        average_height: '2.1CM',
        average_lifespan: 400,
        designation: "Sentient",
        eye_color: 'blue, green, yellow',
        hair_color: 'black, brown',
        language: 'shyriiwook',
      },
       {
         id: 12,
         name: 'Wookie',
         vehicle_model: 'All Terrain Attack Transport',
         classification: 'Mammal',
         average_height: '2.1CM',
         average_lifespan: 400,
         designation: "Sentient",
         eye_color: 'blue, green, yellow',
         hair_color: 'black, brown',
         language: 'shyriiwook',
       },
        {
          id: 13,
          name: 'Wookie',
          vehicle_model: 'All Terrain Attack Transport',
          classification: 'Mammal',
          average_height: '2.1CM',
          average_lifespan: 400,
          designation: "Sentient",
          eye_color: 'blue, green, yellow',
          hair_color: 'black, brown',
          language: 'shyriiwook',
        },
         {
           id: 14,
           name: 'Wookie',
           vehicle_model: 'All Terrain Attack Transport',
           classification: 'Mammal',
           average_height: '2.1CM',
           average_lifespan: 400,
           designation: "Sentient",
           eye_color: 'blue, green, yellow',
           hair_color: 'black, brown',
           language: 'shyriiwook',
         },
          {
            id: 15,
            name: 'Wookie',
            vehicle_model: 'All Terrain Attack Transport',
            classification: 'Mammal',
            average_height: '2.1CM',
            average_lifespan: 400,
            designation: "Sentient",
            eye_color: 'blue, green, yellow',
            hair_color: 'black, brown',
            language: 'shyriiwook',
          },
           {
             id: 16,
             name: 'Wookie',
             vehicle_model: 'All Terrain Attack Transport',
             classification: 'Mammal',
             average_height: '2.1CM',
             average_lifespan: 400,
             designation: "Sentient",
             eye_color: 'blue, green, yellow',
             hair_color: 'black, brown',
             language: 'shyriiwook',
           },
            {
              id: 17,
              name: 'Wookie',
              vehicle_model: 'All Terrain Attack Transport',
              classification: 'Mammal',
              average_height: '2.1CM',
              average_lifespan: 400,
              designation: "Sentient",
              eye_color: 'blue, green, yellow',
              hair_color: 'black, brown',
              language: 'shyriiwook',
            },
             {
               id: 18,
               name: 'Wookie',
               vehicle_model: 'All Terrain Attack Transport',
               classification: 'Mammal',
               average_height: '2.1CM',
               average_lifespan: 400,
               designation: "Sentient",
               eye_color: 'blue, green, yellow',
               hair_color: 'black, brown',
               language: 'shyriiwook',
             },
              {
               id: 19,
               name: 'Wookie',
               vehicle_model: 'All Terrain Attack Transport',
               classification: 'Mammal',
               average_height: '2.1CM',
               average_lifespan: 400,
               designation: "Sentient",
               eye_color: 'blue, green, yellow',
               hair_color: 'black, brown',
               language: 'shyriiwook',
             },
  ];
  

  export default function SpeciesTable() {

    

    return (
      <div div className = 'sec__one'
      style = {
        {
          height: 400,
          width: '100%',
          marginTop: 30,
          scroll: 'x'
        }
      } >
      
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
           
        
         checkboxSelection
         
        />
           <Pagination  sx={{marginLeft: 100, marginBottom: 30}}/> 
      
      </div>
    );
  }





















