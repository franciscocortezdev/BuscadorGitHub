import { CardMedia, Grid } from '@mui/material'
import React from 'react'
import DescripcionUsuario from './DescripcionUsuario'
import EncabezadoUsuario from './EncabezadoUsuario'

export default function CardUsuario({ DatosUsuario }) {
  const { name, avatar_url } = DatosUsuario


  return (
    <>
      <Grid
        container
        spacing={2}
      >
        <Grid item xs={3}>
          <CardMedia
            component='img'
            alt={name}
            image={avatar_url}
            sx={{ borderRadius: '50%' }}
          />
        </Grid>
        <Grid item xs={9} >
          <EncabezadoUsuario DatosUsuario={DatosUsuario} />
          <DescripcionUsuario DatosUsuario={DatosUsuario} />
        </Grid>

      </Grid>

    </>
  )
}
