import React, { useState } from 'react'
import { Stack, TextField, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function Buscador({ BusquedaAPI }) {
  const [inputBusqueda, setInputBusqueda] = useState('')

  const realizarbusqueda = (e) => {
    e.preventDefault()
    BusquedaAPI(inputBusqueda)
    setInputBusqueda('')
  }

  return (

    <Stack
      direction='row'
      component="form"
      onSubmit={realizarbusqueda}
      sx={{
        width: '100%'
      }}>

      <TextField
        value={inputBusqueda}
        onChange={(e) => setInputBusqueda(e.target.value)}
        variant='outlined'
        label='Usuario de GitHub'
        placeholder='Octocad'
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton onClick={realizarbusqueda} >
              <SearchIcon />
            </IconButton>
          ),
        }}
        autoComplete='off'
        size="small"
      />

    </Stack>

  )
}
