import React from 'react'
import { Paper, Stack, Typography } from "@mui/material";

export default function InformacionPaper({ DatosUsuario }) {
  const { public_repos, followers, following } = DatosUsuario

  return (
    <Paper elevation={3}>
      <Stack>
        <Typography>Repositorios: {public_repos}</Typography>
        <Typography>Seguidores: {followers}</Typography>
        <Typography>Siguiendo: {following}</Typography>

      </Stack>
    </Paper>
  )
}
