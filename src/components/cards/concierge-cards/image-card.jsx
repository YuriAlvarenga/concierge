import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box } from '@mui/material'

export default function ImageCard(){
  const images = [
    "/bars/shed-bar.jpg",
    "/strolls-bc/aventura-jurassica.jpg",
    "/restaurants/herois-da-pizza-bc.jpg"
    
  ]

  const settings ={
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    height: 240
  }
  

  return (
    <Box sx={{ m: 0, mt: 3, overflow: 'hidden'}}>
      <Slider {...settings} sx={{ display: 'flex', m: 0, height: '100%' }}>
        {images.map((image, index) => (
          <Card key={index} sx={{ ml: 2, mr: 2, width: '100%'}}>
            <CardMedia
              component="img"
              alt={`Imagem ${index}`}
              image={image} 
              sx={{ width: '100%', height:200, objectFit: 'fill'}}
            />
          </Card>
        ))}
      </Slider>
    </Box>
  )
}
