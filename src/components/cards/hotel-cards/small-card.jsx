import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function SmallCard( {gradientColors }){ //props vindo de hotel italia
  return (
      <Card sx={{background:`radial-gradient(${gradientColors})`, color:"#FFF",  width:'40%', m:1 }}>
        <CardContent  sx={{display:'flex',  justifyContent:'space-around'}}>
          <Typography component="div">
            Farmácia
          </Typography>
          <Typography component="div">
            icon 
          </Typography>
        </CardContent>
      </Card>
    
  )
}