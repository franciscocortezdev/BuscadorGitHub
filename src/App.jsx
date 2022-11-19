import './App.css'
import React, { useState, useEffect } from 'react'
import { Container, CssBaseline, Paper } from '@mui/material'
import Buscador from './Components/Buscador'
import CardUsuario from './Components/CardUsuario'
import Alerta from './Components/Alert'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function App() {
  const [datosUsuario, setDatosUsuario] = useState({})
  const [alertStatus, setAlertStatus] = useState({
    Status: false,
    Message: '',
    Type: ''
  })
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');


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
      mode: prefersDarkMode ? 'dark' : 'light',
      ...(
        !prefersDarkMode
        && {
          background: {
            paper: '#eee'
          }
        }
      )
    }

  })

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container

      >
        <Paper
          sx={{
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
          <Buscador BusquedaAPI={BusquedaAPI} />
          <CardUsuario DatosUsuario={datosUsuario} />
          <Alerta
            alertStatus={alertStatus.Status}
            CloseAlert={CloseAlert}
            Message={alertStatus.Message}
            Type={alertStatus.Type}
          />

        </Paper>


      </Container>
    </ThemeProvider>
  )
}

export default App
