import React from 'react'
import {Box, Grid, Card, CardContent, Typography } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import EastIcon from '@mui/icons-material/East'

export default function CardComponent({gradientColors}){ //props vindo de hotel italia
  return (
    <Grid container spacing={2} style={{ padding: 10, paddingBottom:0}}>
       <Grid item xs={12}>
        <Card sx={{background: `radial-gradient(${gradientColors})`, color:'#FFF'}}>
          <CardContent sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography >
              Aquário
            </Typography>
            <EastIcon/>
          </CardContent>

          <CardContent>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <Typography>
                08:00h às 21:00h
              </Typography>
              <Box sx={{display:'flex', alignItems:'center'}}>
                <RadioButtonUncheckedIcon sx={{ background: 'green', color:'green', borderRadius:'100%', mr:1, fontSize:13 }}/>
                <Typography>
                  Aberto
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
       </Grid>
    </Grid>
    
  )
}