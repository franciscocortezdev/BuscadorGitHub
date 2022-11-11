import { Stack, Typography } from '@mui/material'
import React from 'react'
import InformacionPaper from './InformacionPaper'

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
      <InformacionPaper DatosUsuario={DatosUsuario} />
      {/*<InformacionLocalizacion DatosUsuario={DatosUsuario} /> */}
    </>
  )
}
