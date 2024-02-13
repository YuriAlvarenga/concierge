import React from 'react'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import dataOfLoundries from '../../../../list-of-datas/list-of-data-page-home/list-of-data-pharmacies/list-of-data-laundries'


export default function LaundryCard(){


  return (
    <Grid container spacing={2} style={{ padding: 10 }}>
      {dataOfLoundries.map(({id,title, icon, gradient})=>(
        <Grid item xs={12} key={id}>
            <Card sx={{background: gradient, display:'flex', flexDirection:'column', alignItems:'start', justifyContent:'flex-start' }}>
              <CardContent>
                <Typography sx={{fontSize:16, color:'#FFF'}} component="div">
                  {title}
                </Typography>
              </CardContent>
                <Typography sx={{fontSize:12}} component="div">
                  {icon}
                </Typography>
            </Card>
        </Grid>
        ))}
    </Grid>
    
  )
}