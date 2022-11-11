import React from 'react'
import { Stack, Typography } from '@mui/material'

export default function EncabezadoUsuario({ DatosUsuario }) {
  const { name, login, created_at } = DatosUsuario


  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant='h4' >{name}</Typography>
        <Typography variant='subtitle2'>{created_at}</Typography>

      </Stack>
      <Typography variant='h6'>@{login}</Typography>

    </Stack>
  )
}
