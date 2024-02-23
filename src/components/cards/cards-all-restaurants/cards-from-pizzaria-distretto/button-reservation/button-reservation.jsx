import React from 'react'
import { Button } from '@mui/material'

export default function FixedButton() {
  const buttonStyle = {
    position: 'fixed',
    bottom: '9.5rem',
    right: '1rem',
    padding: '15px 20px',
    cursor: 'pointer',
    fontSize: "10px",
    background:'#000'
  }

  return (
    <Button variant="contained" style={buttonStyle}>
      Faça uma reserva
    </Button>
  )
}
