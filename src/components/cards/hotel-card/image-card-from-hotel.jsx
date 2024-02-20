import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box, Typography } from '@mui/material'

export default function ImageCardFromHotel(){

  const images = [
    { title: "Lazer", image: "/hotels/hotel.jpg" },
    { title: "Café na cama", image: "/hotels/cafe-na-cama.jpg" },
    { title: "Estenda sua reserva", image: "/hotels/promocao-fique-mais-um-dia.jpg" },
    { title: "Conheça nossas salas de reuniões", image: "/hotels/sala-de-reuniao.jpg" },
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
        {images.map((item, index) => (
          <Box key={item.title}>
            <Typography gutterBottom>{item.title}</Typography>
            <Card sx={{borderRadius:4}}>
              <CardMedia
                component="img"
                alt={`Imagem ${index}`}
                image={item.image} 
                sx={{ height: 240, objectFit: 'fill' }}
              />
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
