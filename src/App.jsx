import './App.css'
import React, { useState, useEffect } from 'react'
import { Container, CssBaseline, IconButton } from '@mui/material'
import Buscador from './Components/Buscador'
import CardUsuario from './Components/CardUsuario'
import Alerta from './Components/Alert'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Stack } from '@mui/system'


function App() {
  const [datosUsuario, setDatosUsuario] = useState({})
  const [alertStatus, setAlertStatus] = useState({
    Status: false,
    Message: '',
    Type: ''
  })

  const [modeTheme, setModeTheme] = useState(false)


  useEffect(() => {
    BusquedaAPI('octocat')
  }, [])

  const OpenAlert = () => {
    setAlertStatus({
      Status: true,
      Message: 'Usuario no encontrado',
      Type: 'warning'
    })
  }

  const CloseAlert = (event, reason) => {
    setAlertStatus({
      ...alertStatus,
      Status: false
    })
  }




  const BusquedaAPI = (query) => {
    fetch(`https://api.github.com/users/${query}`)
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Not Found') {
          BusquedaAPI('octocat')
          OpenAlert()
        } else {
          return setDatosUsuario(data)
        }
      })
  }



  const theme = createTheme({
    palette: {
      mode: modeTheme ? 'dark' : 'light'
    },
  })

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container
        sx={{

          width: '80vw',
          height: '100%',
          minHeight: '500px',
          borderRadius: '16px',
          marginTop: '40px',
          marginBottom: '40px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px'
        }}
      >
        <Stack direction='row'>
          <IconButton variant="contained" onClick={() => { setModeTheme(!modeTheme) }}>
            {
              modeTheme
                ? <LightModeOutlinedIcon />
                : <LightModeIcon />
            }
          </IconButton>



          <Buscador BusquedaAPI={BusquedaAPI} />

        </Stack>



        <CardUsuario DatosUsuario={datosUsuario} />

        <Alerta
          alertStatus={alertStatus.Status}
          CloseAlert={CloseAlert}
          Message={alertStatus.Message}
          Type={alertStatus.Type}
        />

      </Container>
    </ThemeProvider>
  )
}

export default App
