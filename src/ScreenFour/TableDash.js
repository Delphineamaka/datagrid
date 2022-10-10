import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';
 

const columns = [
    {
    field: 'name',
    headerName: 'Name',
    width: 200,
    renderCell: (params) => {
        
        return (
          <>
            <Avatar  sx={{ width: 24, height: 24, marginRight: 2 }}
             src={params.value.avatar} />
            {params.value.desp}
          </>
        );
      }
   
    
  },
	{ field: 'birth_year', headerName: 'Birth year', width: 70 },

  {field: 'gender', headerName: 'Gender', width: 70,
 },
   

 {
 	field: 'eye_color',
 	headerName: 'Eye color',
 	width: 70,
 },
   { field: 'hair_color', headerName: 'Hair color', width: 70 },
   {
  	field: 'height',
  	headerName: 'Height',
  	width: 70,

  },
  {
    field: 'mass',
    headerName: 'Mass',
    width: 70,

  },
   {
     field: 'skin_color',
     headerName: 'Skin color',
     width: 70,

   },
  { field: 'created', headerName: 'created', width: 100 },

 
  
  
];

const rows = [
  {
    id: 1,
    birth_year: '25 BBY',
    gender: 'male',
    eye_color: "Blue",
    skin_color: 'Fair',
    created: "1980-05-17",
   height: "172CM",
    name:{
     desp: "Irvin Kershner",
    avatar:
     'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'},
     mass: '77KG',
   hair_color: 'blonde',
   
  },

  {
    id: 2,
    birth_year: '25 BBY',
     gender: 'male',
     eye_color: "Blue",
       skin_color: 'Fair',
     created: "1980-05-17",
      height: "172CM",
     name: {
       desp: "Irvin Kershner",
       avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
     },
      mass: '77KG',
      hair_color: 'blonde',
  
  },
  {
    id: 3,
    birth_year: '25 BBY',
    gender: 'male',
    eye_color: "Blue",
      skin_color: 'Fair',
    created: "1980-05-17",
    height: "172CM",
    name: {
      desp: "Gary Kurtz, ",
      avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
    },
     mass: '77KG',
    hair_color: 'blonde',
  },
  {
    id: 4,
    birth_year: '25 BBY',
    gender: 'male',
    eye_color: "Blue",
      skin_color: 'Fair',
   created: "1980-05-17",
     height: "172CM",
     name: {
        desp: "Irvin Kershner",
        avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
      },
       mass: '77KG',
      hair_color: 'blonde',
  },
  {
    id: 5,
    birth_year: '25 BBY',
     gender: 'male',
       skin_color: 'Fair',
     eye_color: "Blue",
   created: "1980-05-17",
   height: "172CM",
  name: {
     desp: "Irvin Kershner",
     avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
   },
    mass: '77KG',
     hair_color: 'blonde',
  },
  {
    id: 6,
    birth_year: '25 BBY',
    gender: 'male',
     eye_color: "Blue",
       skin_color: 'Fair',
    created: "1980-05-17",
    height: "172CM",
    name: {
     desp: "Irvin Kershner",
     avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'},
   hair_color: 'blonde',
    mass: '77KG',
  },
  {
    id: 7,
    birth_year: '25 BBY',
    gender: 'male',
    eye_color: "Blue",
      skin_color: 'Fair',
   created: "1980-05-17",
    height: "172CM",
     name: {
      desp: "Irvin Kershner",
      avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
    },
     hair_color: 'blonde',
      mass: '77KG',
  },
  {
    id: 8,
    birth_year: '25 BBY',
     gender: 'male',
     eye_color: "Blue",
       skin_color: 'Fair',
    created: "1980-05-17",
     height: "172CM",
     name: {
       desp: "Irvin Kershner",
       avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
     },
     hair_color: 'blonde',
      mass: '77KG',
  },
  {
    id: 9,
    birth_year: '25 BBY',
    gender: 'male',
     eye_color: "Blue",
       skin_color: 'Fair',
    created: "1980-05-17",
      height: "172CM",
    name: {
     desp: "Irvin Kershner",
     avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
   },
   hair_color: 'blonde',
    mass: '77KG',
  },
];
 

 function TableDash4() {
   
  return (
    <div className='sec__one' style={{ height: 400, width: '100%', marginTop: 30 }}>

      <DataGrid
        rows={rows}
        columns={columns}
       pageSize={6}
       rowsPerPageOptions={[10]}
        
      />
    </div>
  );
}

export default TableDash4;