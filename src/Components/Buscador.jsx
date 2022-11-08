import React from 'react'
import { Stack, TextField, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function Buscador() {
  return (
    <Stack direction='row' sx={{
      marginTop: '30px',
      width: '80%'
      }}>

      <TextField 
      variant='outlined' 
      label='Usuario de GitHub' 
      placeholder='Octocad' 
      fullWidth 
      InputProps={{
        endAdornment: (
          <IconButton>
            <SearchIcon/>
          </IconButton>
        ),
      }}
      autoComplete='off'
      />

      
    </Stack>
  )
}
