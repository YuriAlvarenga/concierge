import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box } from '@mui/material'

export default function ImageCard(){
  const images = [
    "/restaurants/sushi-bc.jpg",
    "/strolls-bc/images-from-cards-bc/space-adventure-bc.jpg",
    "/strolls-bc/images-from-cards-bc/hollywood-bowl.jpg"
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
    <Box sx={{ m: 3, mt: 2 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Card key={index} sx={{borderRadius:4}}>
            <CardMedia
              component="img"
              alt={`Imagem ${index}`}
              image={image} 
              sx={{ height: 260, objectFit: 'fill' }}
            />
          </Card>
        ))}
      </Slider>
    </Box>
  )
}
