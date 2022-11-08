import React from 'react'
import { Stack, TextField, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function Buscador({inputBusqueda, setInputBusqueda, BuscarUsuario}) {
  
  return (
    <Stack direction='row' sx={{
      marginTop: '30px',
      width: '80%'
      }}>

      <TextField 
      value={inputBusqueda}
      onChange={(e)=>setInputBusqueda(e.target.value)}
      variant='outlined' 
      label='Usuario de GitHub' 
      placeholder='Octocad' 
      fullWidth 
      InputProps={{
        endAdornment: (
          <IconButton onClick={BuscarUsuario} >
            <SearchIcon/>
          </IconButton>
        ),
      }}
      autoComplete='off'
      size="small"
      />  
    </Stack>
  )
}
