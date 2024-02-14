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
    infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  }
  

  return (
    <Box sx={{ m: 4, mt: 1 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Card key={index} sx={{borderRadius:4}}>
            <CardMedia
              component="img"
              alt={`Imagem ${index}`}
              image={image} 
              sx={{ height: 240, objectFit: 'fill' }}
            />
          </Card>
        ))}
      </Slider>
    </Box>
  )
}
