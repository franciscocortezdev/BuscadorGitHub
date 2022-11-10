import './App.css'
import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import Buscador from './Components/Buscador'
import CardUsuario from './Components/CardUsuario'

function App() {

  const [datosUsuario, setDatosUsuario] = useState({})

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
      <Buscador BusquedaAPI={BusquedaAPI} />
      <CardUsuario DatosUsuario={datosUsuario} />

    </Container>
  )
}

export default App
