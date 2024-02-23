import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { Box, Stack, Typography } from '@mui/material'
import dataOfAllRestaurants from '../../../../list-of-datas/list-of-data-all-restaurants/list-of-data-all-restaurants'

export default function ImageCardFromPizzariaDistretto(){

  const restaurantStatus = dataOfAllRestaurants.find(restaurant => restaurant.id === 2).status
  const color = restaurantStatus === 'Aberto' ? 'green' : 'red'

  return (
    <Box sx={{ pt: 2, overflow: 'hidden', position: 'relative' }}>
      <Card sx={{ maxWidth: '100%', padding: 0 }}>
        <CardMedia
          component="img"
          alt='Imagem'
          image="/restaurants/distretto-tratoria/pizza-no-forno.jpg" 
          sx={{ height: 280, objectFit: 'fill', margin: 0, padding: 0 }}
        />
      </Card>
      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ position: 'fixed', top: 20, width:'100%', right:0, color:color,  background: 'rgba(0,0,0,0.5)', p:1 }}>
        <Typography >
          {restaurantStatus}
        </Typography>
      </Stack>
    </Box>
  )
}
