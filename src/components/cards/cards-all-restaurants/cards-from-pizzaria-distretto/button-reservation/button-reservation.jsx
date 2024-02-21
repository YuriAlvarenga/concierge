import React from 'react'
import { Fab } from '@mui/material'

export default function FixedButton() {
  const buttonStyle = {
    position: 'fixed',
    bottom: '5rem',
    right: '1rem',
    backgroundColor: '#60efbc',
    color: '#fff',
    padding: '1rem 5rem',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    fontSize: "10px",
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap' 
  }

  return (
    <Fab style={buttonStyle}>
      Faça uma reserva
    </Fab>
  )
}
