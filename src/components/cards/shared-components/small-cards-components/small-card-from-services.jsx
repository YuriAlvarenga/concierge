import React from 'react'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function SmallCardServices({hotelSmallServices}){
  const navigate = useNavigate()
  const { t } = useTranslation()


  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {hotelSmallServices.map((service, index) => (
        <Grid item xs={3} key={index} onClick={() => navigate(service.route)}>
          <Card sx={{ background: 'linear-gradient(to bottom, #28afb0 60%, #FFF 50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 80 }}>
            <CardContent>
              <Typography sx={{ fontSize: 16 }} component="div">
                {service.icon}
              </Typography>
            </CardContent>
            <Typography sx={{ fontSize: 12 }} component="div">
              {t(service.title)}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}