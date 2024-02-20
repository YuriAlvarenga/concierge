import React from 'react'
import { Grid, Box } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


export default function BuyTicketsFromStrollsPage(){

  const handleWhatsAppClick = () =>{
    const encodedMessage = encodeURIComponent("Olá, tudo bem?")
    const phoneNumber = "+5547997815538"
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  const handleBuyTickets = () => {
    window.open('https://ingresso.oceanicaquarium.com.br/?gad_source=1', '_blank')
  }

  return (
    <Grid container spacing={2} style={{ padding: 10 }}>
        <Grid item xs={6}>
            <Card sx={{background:"#ff6888", m:0}} onClick={handleWhatsAppClick}>
              <CardContent sx={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Typography sx={{fontSize:14, color:"#FFF"}} component="div">
                    Fale com nosso agente
                </Typography>
              </CardContent>
            </Card>
        </Grid>
        <Grid item xs={6}>
            <Card sx={{background:"#FFA500", m:0}} onClick={handleBuyTickets}>
              <CardContent sx={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Typography sx={{fontSize:14, color:"#FFF"}} component="div">
                    Compre no site
                </Typography>
              </CardContent>
            </Card>
        </Grid>
    </Grid>
    
  )
}