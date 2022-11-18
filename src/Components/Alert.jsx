import React from 'react'
import { Alert, Snackbar } from '@mui/material'

export default function Alerta({ alertStatus, CloseAlert, Type, Message }) {

  return (
    <Snackbar
      open={alertStatus}
      autoHideDuration={1500}
      onClose={CloseAlert}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
    >
      <Alert variant="filled" severity={Boolean(Type) === false ? 'success' : Type}>
        {Message}
      </Alert>
    </Snackbar>
  )
}
