import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Toolbar } from '@mui/material';
 

const columns = [
	{ field: 'id', headerName: 'ID', width: 70 },

  {field: 'title', headerName: 'Title', width: 150,
 },
   
  {
    field: 'director',
    headerName: 'Director',
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
 {
 	field: 'producer',
 	headerName: 'producer',
 	width: 150,
    renderCell: (params) => {
        
        return (
          <>
            <Avatar  sx={{ width: 24, height: 24, marginRight: 2 }}
             src={params.value.avatar} />
            {params.value.producers}
          </>
        );
      }
   
 },
   { field: 'episode_id', headerName: 'Episode ID', width: 150 },
  { field: 'date_released', headerName: 'released Date', width: 130 },

 
  {
  	field: 'characters',
  	headerName: 'Characters',
  	width: 200,

  },
  
];

const rows = [
  {
    id: 1,
    title: 'The Phantom Menace',
    producer: {
    producers:"Gary Kurtz, Rick McCallum",
      avatar:
        'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'},
    date_released: "1980-05-17",
    characters: "https://swapi.dev/api/people/1/",
    director:{
     desp: "Irvin Kershner",
    avatar:
     'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'},
    episode_id: 4,
   
  },

  {
    id: 2,
    title: 'The Phantom Menace',
    producer: {
      producers: "Gary Kurtz, Rick McCallum",
      avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
    },
     avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc',
    date_released: "1980-05-17",
    characters: "https://swapi.dev/api/people/1/",
     director: {
       desp: "Irvin Kershner",
       avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
     },
    episode_id: 4
  
  },
  {
    id: 3,
    title: 'The Phantom Menace',
    producer: {
      producers: "Gary Kurtz, Rick McCallum",
      avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
    },
    date_released: "1980-05-17",
    characters: "https://swapi.dev/api/people/1/",
     director: {
       desp: "Irvin Kershner",
       avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
     },
    episode_id: 4
  },
  {
    id: 4,
    title: 'The Phantom Menace',
   producer: {
     producers: "Gary Kurtz, Rick McCallum",
     avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
   },
    date_released: "1980-05-17",
    characters: "https://swapi.dev/api/people/1/",
      director: {
        desp: "Irvin Kershner",
        avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
      },
    episode_id: 4
  },
  {
    id: 5,
    title: 'The Phantom Menace',
 producer: {
   producers: "Gary Kurtz, Rick McCallum",
   avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
 },
    date_released: "1980-05-17",
    characters: "https://swapi.dev/api/people/1/",
   director: {
     desp: "Irvin Kershner",
     avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
   },
    episode_id: 4
  },
  {
    id: 6,
    title: 'The Phantom Menace',
    producer: {
      producers: "Gary Kurtz, Rick McCallum",
      avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
    },
    date_released: "1980-05-17",
    characters: "https://swapi.dev/api/people/1/",
   director: {
     desp: "Irvin Kershner",
     avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'},
    episode_id: 4
  },
  {
    id: 7,
    title: 'The Phantom Menace',
   producer: {
     producers: "Gary Kurtz, Rick McCallum",
     avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'},
    date_released: "1980-05-17",
    characters: "https://swapi.dev/api/people/1/",
    director: {
      desp: "Irvin Kershner",
      avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
    },
    episode_id: 4
  },
  {
    id: 8,
    title: 'The Phantom Menace',
    producer: "Gary Kurtz, Rick McCallum",
    date_released: "1980-05-17",
    characters: "https://swapi.dev/api/people/1/",
     director: {
       desp: "Irvin Kershner",
       avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
     },
    episode_id: 4
  },
  {
    id: 9,
    title: 'The Phantom Menace',
    producer: "Gary Kurtz, Rick McCallum",
    date_released: "1980-05-17",
    characters: "https://swapi.dev/api/people/1/",
   director: {
     desp: "Irvin Kershner",
     avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGnFg_qRZM0sQ/profile-displayphoto-shrink_800_800/0/1654611262830?e=1669852800&v=beta&t=1XHmz4YIWRajSSXnTNkly9hukA7G_LpIk4CnG9WNwVc'
   },
    episode_id: 4
  },
];
 

export default function DataTable() {
   
  return (
    <div className='sec__one' style={{ height: 400, width: '100%' }}>
    <Toolbar>film</Toolbar>
      <DataGrid
        rows={rows}
        columns={columns}
       pageSize={5}
       rowsPerPageOptions={[10]}
        
      />
    </div>
  );
}
