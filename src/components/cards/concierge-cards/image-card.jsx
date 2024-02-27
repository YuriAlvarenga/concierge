import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'




export default function ImageCard(){

  const { t } = useTranslation()

  const images = [
    { title: "Space Adventure", image: "/strolls-bc/images-from-cards-bc/space-adventure-bc.jpg"},
    { title: "Brava Sushi", image: "/restaurants/sushi-bc.jpg" },
    { title: "Hollywood Bowl", image: "/strolls-bc/images-from-cards-bc/hollywood-bowl.jpg" },
  ]

  const settings ={
    
    infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  }
  

  return (
    <Box sx={{ mb: 1, overflow: 'hidden' }}>
      <Slider {...settings}>
        {images.map((item, index) => (
          <Box key={item.title} sx={{ position: 'relative', textAlign: 'center', margin: 0, padding: 0 }}>
            <Card sx={{ maxWidth: '100vw', margin: 0, padding: 0 }}>
              <CardMedia
                component="img"
                alt={`Imagem ${index}`}
                image={item.image}
                sx={{ height: 300, objectFit: 'cover', margin: 0, padding: 0 }}
              />
             <Typography variant="h6" sx={{ position: 'absolute', width:'100%', bottom: 0, fontSize:16,  backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '8px 16px', borderRadius: '4px' }}>{t([item.title])}</Typography>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
