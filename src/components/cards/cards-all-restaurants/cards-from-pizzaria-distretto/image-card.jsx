import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box, Typography } from '@mui/material'

export default function ImageCardFromPizzariaDistretto(){

  const images = [
    { title: "Pizza", image: "/restaurants/distretto-tratoria/pizza-no-forno.jpg" },
    { title: "Pizza", image: "/restaurants/distretto-tratoria/vinhos-e-pizza.jpg" },
    { title: "Pizza", image: "/restaurants/distretto-tratoria/pizza-no-forno.jpg" },
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  }

  return (
    <Box sx={{ mt:1, pt: 4, overflow: 'hidden' }}>
      <Slider {...settings}>
        {images.map((item, index) => (
          <Box key={item.title} sx={{padding: 0 }}>
            <Typography sx={{ m: 2, color:'#FFF' }}>{item.title}</Typography>
            <Card sx={{ maxWidth: '100vw', mr: 2, ml: 2, padding: 0, borderRadius: 4 }}>
              <CardMedia
                component="img"
                alt={`Imagem ${index}`}
                image={item.image}
                sx={{ height: 240, objectFit: 'fill', margin: 0, padding: 0 }}
              />
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
