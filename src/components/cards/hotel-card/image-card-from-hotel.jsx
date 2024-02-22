import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box, Card, CardMedia, Typography } from '@mui/material'

export default function ImageCardFromHotel() {
  const images = [
    { title: "Lazer", image: "/hotels/hotel.jpg" },
    { title: "Café na cama", image: "/hotels/cafe-na-cama.jpg" },
    { title: "Estenda sua reserva", image: "/hotels/promocao-fique-mais-um-dia.jpg" },
    { title: "Conheça nossas salas de reuniões", image: "/hotels/sala-de-reuniao.jpg" },
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
    <Box sx={{ mt: 2, mb: 1, overflow: 'hidden' }}>
      <Slider {...settings}>
        {images.map((item, index) => (
          <Box key={item.title} sx={{ textAlign: 'center', margin: 0, padding: 0 }}>
            <Card sx={{ maxWidth: '100vw', margin: 0, padding: 0 }}>
              <CardMedia
                component="img"
                alt={`Imagem ${index}`}
                image={item.image}
                sx={{ height: 300, objectFit: 'fill', margin: 0, padding: 0 }}
              />
            </Card>
            <Typography variant="h6" sx={{ mt: 1 }}>{item.title}</Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
