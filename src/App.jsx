import './App.css'
import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import Buscador from './Components/Buscador'
import CardUsuario from './Components/CardUsuario'
import Snackbar from '@mui/material/Snackbar';

import Alert from '@mui/material/Alert';


function App() {
  const [datosUsuario, setDatosUsuario] = useState({})
  const [open, setOpen] = useState(false)


  useEffect(() => {
    BusquedaAPI('octocat')
  }, [])


  const BusquedaAPI = (query) => {
    fetch(`https://api.github.com/users/${query}`)
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Not Found') {

          BusquedaAPI('octocat')
        } else {

          return setDatosUsuario(data)
        }
      })
  }


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <Container
      sx={{
        background: 'whitesmoke',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
      <button onClick={handleClick}>Abrir modal</button>

      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert variant="filled" severity="warning">
          This is a success alert — check it out!
        </Alert>
      </Snackbar>

      <Buscador BusquedaAPI={BusquedaAPI} />
      <CardUsuario DatosUsuario={datosUsuario} />

    </Container>
  )
}

export default App
