import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box, Card, CardMedia, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ButtonTranslate from '../../menu/top-bar/button-translate'


export default function ImageCardFromHotel({hotelName}) {

  const { t } = useTranslation()

  
  const images = [
    { title: "Conheça nossas salas de reuniões", image: "/hotels/sala-de-reuniao.jpg" },
    { title: "Lazer", image: "/hotels/hotel.jpg" },
    { title: "Café na cama", image: "/hotels/cafe-na-cama.jpg" }
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

  const handleTypographyClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Box sx={{mb: 1, overflow: 'hidden' }}>
      <Typography variant="h6" sx={{ position: 'fixed', width: '86%',top:'3%', zIndex:9998, margin:2, color: '#19647e', backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '12px 16px', borderRadius: '4px'}}  onClick={handleTypographyClick}><ButtonTranslate color="#19647e" />{hotelName}</Typography>
      <Slider {...settings}>
        {images.map((item, index) => (
          <Box key={item.title} sx={{ position: 'relative', textAlign: 'center', margin: 0, padding: 0 }}>
            <Card sx={{ maxWidth: '100vw', margin: 0, padding: 0 }}>
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
