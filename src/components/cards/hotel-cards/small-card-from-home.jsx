import React from 'react'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import dataOfSmallCards from '../../../list-of-datas/list-of-data-page-home/list-of-data-small-cards'

export default function SmallCard(){


  return (
    <Grid container spacing={2} style={{ padding: 10 }}>
      {dataOfSmallCards.map(({title, icon, gradient})=>(
        <Grid item xs={3}>
            <Card sx={{background: gradient, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
              <CardContent>
                <Typography sx={{fontSize:16}} component="div">
                  {icon}
                </Typography>
              </CardContent>
                <Typography sx={{fontSize:12}} component="div">
                  {title}
                </Typography>
            </Card>
        </Grid>
        ))}
    </Grid>
    
  )
}