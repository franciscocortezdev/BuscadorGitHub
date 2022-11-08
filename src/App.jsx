import './App.css'
import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import Buscador from './Components/Buscador'

function App() {

  const [datosUsuario, setDatosUsuario] = useState({})

  useEffect(() => {
    BusquedaAPI('octocatrrr')
  }, [])


  const BusquedaAPI = (query) => {
    fetch(`https://api.github.com/users/${query}`)
      .then(response => response.json())
      .then(data => {
        if (data.message === 'NotFound') {
          BusquedaAPI('octocat')
        }
        return setDatosUsuario(data)
      })

  }
  console.log('estado datos', datosUsuario)
  return (
    <Container sx={{
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Buscador BusquedaAPI={BusquedaAPI} />

    </Container>
  )
}

export default App
