import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function CardComponent(){ //props vindo de hotel italia
  return (
      <Card sx={{color:'#FFF'}}>
        <CardContent  sx={{background:'radial-gradient(#f588d8, #c0a3e5)'}}>
          <Typography component="div">
            Farmácia
          </Typography>
        </CardContent>
        <CardContent  sx={{background:'radial-gradient(#60efbc,#58d5c9)', mt: 1}}>
          <Typography component="div">
            Refeições
          </Typography>
        </CardContent>
        <CardContent  sx={{background:'radial-gradient(#76b2fe, #b69efe)', mt: 1}}>
          <Typography component="div">
            Refeições
          </Typography>
        </CardContent>
        <CardContent  sx={{background:'radial-gradient(#fbc1cc, #fa99b2)', mt: 1}}>
          <Typography component="div">
            Refeições
          </Typography>
        </CardContent>
        <CardContent  sx={{background:'radial-gradient(#1fe4f5, #3fbafe)', mt: 1}}>
          <Typography component="div">
            Refeições
          </Typography>
        </CardContent>
      </Card>
    
  )
}