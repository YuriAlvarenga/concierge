import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import dataOfSmallCardsFromRestaurants from '../../../list-of-datas/list-of-data-all-restaurants/list-of-data-small-card-restaurants';

export default function SmallCardFromRestaurants() {
  return (
    <Grid container spacing={2} style={{ padding: 10 }}>
      {dataOfSmallCardsFromRestaurants.map(({ title, icon, gradient }) => (
        <Grid item xs={3} key={title} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Card sx={{display: 'flex', alignItems: 'center', justifyContent: 'center' , background: gradient, borderRadius: '50%', width: 80, height: 80 }}>
            <CardContent>
              <Typography sx={{ fontSize: 16 }} component="div">
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
