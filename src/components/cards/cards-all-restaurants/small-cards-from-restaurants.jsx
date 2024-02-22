import React from 'react'
import { Grid, Card, CardContent, Typography, Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import dataOfAllBars from '../../../list-of-datas/list-of-data-all-bars/list-of-data-all-bars'
import dataOfSmallCardsFromRestaurants from '../../../list-of-datas/list-of-data-all-restaurants/list-of-data-small-card-restaurants'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'


export default function SmallCardFromRestaurants() {

  const handleClick = (title) => {
    const filteredData = dataOfAllBars.filter(bar => bar.tags && bar.tags.includes(title.toLowerCase()))
    console.log(filteredData)
    // Aqui você pode fazer algo com os dados filtrados, como armazená-los em um estado para renderização posterior
  }
  
  return (

    <Swiper
      slidesPerView={3.5}
      style={{ marginBottom: 15, marginTop: 10 }}
    >
        {dataOfSmallCardsFromRestaurants.map(({ id, title, gradient }) => (
          <SwiperSlide key={id}>
 
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', background: gradient, ml: 1, color:'#FFF', borderRadius: 2 }}>
                  <Typography sx={{ fontSize: 11}}  component="div">
                      {title}
                  </Typography>
                  <Typography  component="div">
                    <ArrowForwardIcon sx={{ fontSize: 12 }}/>
                  </Typography>
                </Box>
              
          </SwiperSlide>
        ))}
    </Swiper>
  
  )
}
