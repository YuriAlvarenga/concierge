import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box } from '@mui/material'

export default function ImageCard(props){
  const settings ={
    dots: true,
    infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }
  

  return (
    <Box sx={{m:4, mt:0}}>
      <Slider {...settings} sx={{display:'flex', m:4}}>
        <Card sx={{ml:2, mr:2}}>
          <CardMedia
            component="img"
            alt="Imagem"
            image="hotel.jpg" 
          />
        </Card>
  
        <Card sx={{ml:2, mr:2}}>
          <CardMedia
            component="img"
            alt="Imagem"
            image="hotel-piscina.jpg" 
          />
        </Card>
      </Slider>
    </Box>
  )
}

