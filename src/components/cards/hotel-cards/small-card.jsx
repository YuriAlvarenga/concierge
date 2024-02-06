import React from 'react'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService'
import CarRentalIcon from '@mui/icons-material/CarRental'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'

export default function SmallCard(){


  return (
    <Grid container spacing={2} style={{ padding: 10 }}>
      <Grid item xs={3}>
        <Card sx={{background: 'linear-gradient(to bottom, #ff6888 60%, transparent 50%)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
          <CardContent>
            <Typography sx={{fontSize:16}} component="div">
              <MedicationLiquidIcon sx={{color:'#FFF'}}/>
            </Typography>
          </CardContent>
            <Typography sx={{fontSize:12}} component="div">
              Farmácia
            </Typography>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{background: 'linear-gradient(to bottom, #1fe4f5 60%, transparent 50%)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
          <CardContent>
            <Typography sx={{fontSize:16}} component="div">
              <LocalLaundryServiceIcon sx={{color:'#FFF'}}/>
            </Typography>
          </CardContent>
            <Typography sx={{fontSize:12}} component="div">
              Lavanderia
            </Typography>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{background: 'linear-gradient(to bottom, #60efbc 60%, transparent 50%)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
          <CardContent>
            <Typography sx={{fontSize:16}} component="div">
              <CarRentalIcon sx={{color:'#FFF'}}/>
            </Typography>
          </CardContent>
            <Typography sx={{fontSize:12}} component="div">
              Locadora
            </Typography>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{background: 'linear-gradient(to bottom, #b07eb9 60%, transparent 50%)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
          <CardContent>
            <Typography sx={{fontSize:16}} component="div">
              <AirportShuttleIcon sx={{color:'#FFF'}}/>
            </Typography>
          </CardContent>
            <Typography sx={{fontSize:12}} component="div">
              Translado
            </Typography>
        </Card>
      </Grid>
    </Grid>
    
  )
}