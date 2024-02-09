import React from 'react'
import { Grid, Card, CardContent, Typography } from '@mui/material'
import dataOfSmallCardsFromBars from '../../../list-of-datas/list-of-data-all-bars/list-of-data-small-cards-bars'

export default function SmallCardFromBars() {
  return (
    <Grid container spacing={2} style={{ padding: 10 }}>
      {dataOfSmallCardsFromBars.map(({ id,title, icon, gradient }) => (
        <Grid item xs={3} key={id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Card sx={{display: 'flex', alignItems: 'center', justifyContent: 'center' , background: gradient, borderRadius: '50%', width: 80, height: 80 }}>
            <CardContent>
              <Typography sx={{ fontSize: 16, mt:1 }} component="div">
                {icon}
              </Typography>
            </CardContent>
          </Card>
          <Typography sx={{ fontSize: 12, mt:1 }} component="div">
            {title}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
