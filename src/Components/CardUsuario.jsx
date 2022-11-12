import { CardMedia, Container, Grid, Stack } from '@mui/material'
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
            sx={{ borderRadius: '50%', width: '100%' }}
          />
        </Grid>
        <Grid item xs={9} >
          <Stack
            direction='column'
            spacing={1}
            sx={{ marginLeft: '30px', marginRight: '30px' }}
          >

            <EncabezadoUsuario DatosUsuario={DatosUsuario} />
            <DescripcionUsuario DatosUsuario={DatosUsuario} />
          </Stack>
        </Grid>

      </Grid>

    </>
  )
}
