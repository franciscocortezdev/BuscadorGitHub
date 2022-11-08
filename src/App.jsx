import './App.css'
import React, {useState} from 'react'
import { Container } from '@mui/material'
import Buscador from './Components/Buscador'

function App() {
  const [inputBusqueda, setInputBusqueda] = useState('')
  const [datosUsuario, setDatosUsuario] = useState({})

  
  const BuscarUsuario = ()=>{
    
  }


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
      <Buscador inputBusqueda={inputBusqueda} setInputBusqueda={setInputBusqueda} BuscarUsuario={BuscarUsuario}/>

      {datosUsuario}
    </Container>
  )
}

export default App
