import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';

export default function InformacionLocalizacion({ DatosUsuario }) {
  const { location, twitter_username, blog, company } = DatosUsuario



  return (
    <Grid
      container
    >
      <Grid item xs={6}>
        <Stack>
          <LocationOnIcon />
          <Typography>{location ? location : 'No disponible'}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <TwitterIcon />
          <Typography>{twitter_username ? '@' + twitter_username : 'No disponible'}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <LanguageIcon />
          <Typography>{blog ? blog : 'No disponible'}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <BusinessIcon />
          <Typography>{company ? company : 'No disponible'}</Typography>
        </Stack>
      </Grid>

    </Grid>
  )
}
