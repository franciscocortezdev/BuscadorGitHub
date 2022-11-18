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
        <Grid item container justifyContent={'center'} alignItems={'flex-start'} xs={12} sm={6} md={3} >
          <CardMedia
            component='img'
            alt={name}
            image={avatar_url}
            sx={{ borderRadius: '50%', width: { xs: '50%', sm: '100%' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={9} container flexDirection={'column'}>
          <Stack
            direction='column'
            spacing={1}

          >

            <EncabezadoUsuario DatosUsuario={DatosUsuario} />
            <DescripcionUsuario DatosUsuario={DatosUsuario} />
          </Stack>
        </Grid>

      </Grid>

    </>
  )
}
