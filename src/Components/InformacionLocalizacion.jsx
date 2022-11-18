import { Grid, Stack, Typography, Link } from '@mui/material'
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
      spacing={3}
    >
      <Grid item xs={12} md={6}>
        <Stack direction={'row'} spacing={2}>
          <LocationOnIcon />
          <Typography>{location ? location : 'No disponible'}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack direction={'row'} spacing={2}>
          <TwitterIcon />
          <Typography>{twitter_username ? '@' + twitter_username : 'No disponible'}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack direction={'row'} spacing={2}>
          <LanguageIcon />
          {
            blog
              ? <Link href={blog} target='_blank' underline="hover">
                <Typography>{blog}</Typography>
              </Link>
              : <Typography>{'No disponible'}</Typography>
          }

        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack direction={'row'} spacing={2}>
          <BusinessIcon />
          <Typography>{company ? company : 'No disponible'}</Typography>
        </Stack>
      </Grid>

    </Grid>
  )
}
