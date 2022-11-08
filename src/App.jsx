import './App.css'
import { Container } from '@mui/material'
import Buscador from './Components/Buscador'

function App() {

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
      <Buscador/>
    </Container>
  )
}

export default App
