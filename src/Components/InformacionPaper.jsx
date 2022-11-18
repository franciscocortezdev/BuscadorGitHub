import React from 'react'
import { Paper, Stack, Typography } from "@mui/material";

export default function InformacionPaper({ DatosUsuario }) {
  const { public_repos, followers, following } = DatosUsuario

  return (
    <Paper elevation={2} >
      <Stack
        direction={{ sx: 'column', md: 'row' }}
        spacing={3}
        justifyContent='space-evenly'
        margin={3}
      >
        <Stack alignItems={'center'}>
          <Typography variant='h6'>Repositorios</Typography>
          <Typography variant='h5'>{public_repos}</Typography>

        </Stack>

        <Stack alignItems={'center'}>
          <Typography variant='h6'>Seguidores</Typography>
          <Typography variant='h5'>{followers}</Typography>

        </Stack>

        <Stack alignItems={'center'}>
          <Typography variant='h6'>Siguiendo</Typography>
          <Typography variant='h5'>{following}</Typography>

        </Stack>

      </Stack>
    </Paper >
  )
}
