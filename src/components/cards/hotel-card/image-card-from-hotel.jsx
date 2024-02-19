import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box, Typography } from '@mui/material'

export default function ImageCardFromHotel(){

  const titles = [
    "Lazer",
    "Café na cama",
    "Estenda sua reserva"
  ]

  const images = [
    "/hotels/hotel.jpg",
    "/hotels/cafe-na-cama.jpg",
    "/hotels/promocao-fique-mais-um-dia.jpg"
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
    <Box sx={{ m: 3, mt: 0 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <>
            <Typography  gutterBottom>{titles[index]}</Typography>
            <Card key={index} sx={{borderRadius:4}}>
              <CardMedia
                component="img"
                alt={`Imagem ${index}`}
                image={image} 
                sx={{ height: 240, objectFit: 'fill' }}
              />
            </Card>
          </>
        ))}
      </Slider>
    </Box>
  )
}
