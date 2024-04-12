import React from 'react'
import { Button, Grid, Card } from '@mui/material'



export default function ReservationButton() {
  //whatspp function
  const handleWhatsAppClick = (phoneNumber, message) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <Grid container>
      <Grid item xs={12} sx={{ m: 1 }}>
        <Button onClick={handleWhatsAppClick} sx={{ background: '#28afb0', color: '#FFF', width: '100%', p: 1 }} variant="outlined" >
          Faça uma reserva
        </Button>
      </Grid>
    </Grid>
  )
}
