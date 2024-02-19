import React from 'react'
import { Grid, Box } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import EastIcon from '@mui/icons-material/East'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'


export default function ServicesFromHotelCard(){

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent("Olá, tudo bem?")
    const phoneNumber = "+5547997815538"
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <Grid container spacing={2} style={{ padding: 10 }}>
        <Grid item xs={6}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Typography sx={{fontSize:14, mr:1}} component="div">
                <RadioButtonUncheckedIcon sx={{ background:"red", color:"red", borderRadius: '100%', mr: 1, fontSize: 13 }} />
                    fechado agora
                </Typography>
            </Box>
            <Card sx={{background:"#000", m:0}} onClick={handleWhatsAppClick} >
              <CardContent sx={{ display:'flex', alignItems:'center', justifyContent:'space-between', m: 0 }}>
                <Typography sx={{fontSize:14, color:"#FFF"}} component="div">
                    Reservas
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <EastIcon sx={{fontSize:16, color:"#FFF"}} />
                </Box>
              </CardContent>
            </Card>
        </Grid>
        <Grid item xs={6}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Typography sx={{fontSize:14, mr:1}} component="div">
                <RadioButtonUncheckedIcon sx={{ background:"green", color:"green", borderRadius: '100%', mr: 1, fontSize: 13 }} />
                    aberto 24h
                </Typography>
            </Box>
            <Card sx={{background:"#000", m:0}} onClick={handleWhatsAppClick}>
              <CardContent sx={{ display:'flex', alignItems:'center', justifyContent:'space-between', m: 0 }}>
                <Typography sx={{fontSize:14, color:"#FFF"}} component="div">
                    Recepção
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <EastIcon sx={{fontSize:16, color:"#FFF"}} />
                </Box>
              </CardContent>
            </Card>
        </Grid>
    </Grid>
    
  )
}