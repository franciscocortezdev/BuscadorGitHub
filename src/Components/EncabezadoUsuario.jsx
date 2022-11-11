import React from 'react'
import { Stack, Typography } from '@mui/material'

export default function EncabezadoUsuario({ DatosUsuario }) {
  const { name, login, created_at } = DatosUsuario


  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
      >
        <Typography>{name}</Typography>
        <Typography>{created_at}</Typography>

      </Stack>
      <Typography>@{login}</Typography>

    </>
  )
}
