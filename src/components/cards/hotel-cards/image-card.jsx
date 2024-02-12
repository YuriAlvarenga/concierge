import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box } from '@mui/material'

export default function ImageCard(){
  const settings ={
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }
  

  return (
    <Box sx={{ m: 0, mt: 0, overflow: 'hidden',}}>
      <Slider {...settings} sx={{ display: 'flex', m: 0, height: '100%' }}>
        <Card sx={{ ml: 2, mr: 2, width: '100%', height: '100%' }}>
          <CardMedia
            component="img"
            alt="Imagem"
            image="hotel.jpg" 
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Card>
  
        <Card sx={{ ml: 2, mr: 2, width: '100%', height: '100%' }}>
          <CardMedia
            component="img"
            alt="Imagem"
            image="hotel-piscina.jpg" 
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Card>
      </Slider>
    </Box>
  )
}
