import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function CardComponent(){ //props vindo de hotel italia
  return (
      <Card>
        <CardContent>
          <Typography component="div">
            Refeições
          </Typography>
        </CardContent>
      </Card>
    
  )
}