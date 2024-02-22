import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import 'slick-carousel/slick/slick-theme.css'
import { Box } from '@mui/material'

export default function ImageCardFromPizzariaDistretto(){


  return (
    <Box sx={{pt:5, overflow: 'hidden' }}>
            <Card sx={{ maxWidth: '100vw', padding: 0}}>
              <CardMedia
                component="img"
                alt='Imagem'
                image="/restaurants/distretto-tratoria/pizza-no-forno.jpg" 
                sx={{ height: 280, objectFit: 'fill', margin: 0, padding: 0 }}
              />
            </Card>
  </Box>

  )
}
