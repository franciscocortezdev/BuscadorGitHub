import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function DescripcionUsuario({ DatosUsuario }) {
  const { bio } = DatosUsuario



  return (
    <>
      <Stack>
        <Typography>
          {
            bio !== null
              ? bio
              : 'El usuario no tiene descripcion'
          }
        </Typography>

      </Stack>
      {/* <InformacionPaper/>
    <InformacionLocalizacion/> */}
    </>
  )
}
