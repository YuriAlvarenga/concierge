import React from 'react'
import { Grid, Box } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


export default function BuyTicketsFromStrollsPage(){

  return (
    <Grid container spacing={2} style={{ padding: 10 }}>
        <Grid item xs={6}>
            <Card sx={{background:"#ff6888", m:0}} >
              <CardContent sx={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Typography sx={{fontSize:14, color:"#FFF"}} component="div">
                    Passaporte da Diversão
                </Typography>
              </CardContent>
            </Card>
        </Grid>
        <Grid item xs={6}>
            <Card sx={{background:"#FFA500", m:0}} >
              <CardContent sx={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Typography sx={{fontSize:14, color:"#FFF"}} component="div">
                    Ingressos
                </Typography>
              </CardContent>
            </Card>
        </Grid>
    </Grid>
    
  )
}