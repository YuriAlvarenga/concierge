import React from 'react'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import dataOfSmallCards from '../../../../list-of-datas/list-of-data-page-home/list-of-data-small-cards'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function SmallCardServices({hotelSmallServices}){
  console.log(hotelSmallServices)
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {dataOfSmallCards.map(({id,title, icon, gradient, route})=>(
        <Grid item xs={3} key={id} onClick={()=>navigate(route)}>
            <Card sx={{background: gradient, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:80 }}>
              <CardContent>
                <Typography sx={{fontSize:16}} component="div">
                  {icon}
                </Typography>
              </CardContent>
                <Typography sx={{fontSize:12}} component="div">
                {t([title])}
                </Typography>
            </Card>
        </Grid>
        ))}
    </Grid>
    
  )
}