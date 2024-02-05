import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function CardComponent(){ //props vindo de hotel italia
  return (
      <Card sx={{}} >
        <CardContent>
          <Typography component="div">
            Refeições
          </Typography>
          <Typography color="text.secondary">
            Café da manhã: 07h às 11h
          </Typography>
          <Typography component="div">
            Informativos
          </Typography>
          <Typography color="text.secondary">
            Check-in: A partir das 14h
          </Typography>
          <Typography color="text.secondary">
            Check-out: Até às 12h
          </Typography>
          <Typography color="text.secondary">
            Check-out: Até às 12h
          </Typography>
          <Typography color="text.secondary">
            Check-out: Até às 12h
          </Typography>
          <Typography color="text.secondary">
            Check-out: Até às 12h
          </Typography>
          <Typography color="text.secondary">
            Check-out: Até às 12h
          </Typography>
          <Typography color="text.secondary">
            Check-out: Até às 12h
          </Typography>
        </CardContent>
      </Card>
    
  )
}