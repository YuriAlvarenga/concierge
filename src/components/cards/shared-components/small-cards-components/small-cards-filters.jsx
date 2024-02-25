import React from 'react'
import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import dataOfSmallCardsFromBars from '../../../../list-of-datas/list-of-data-all-bars/list-of-data-small-cards-bars'



export default function SmallCardFilters({ handleClick }) {


  return (
    <Swiper
      slidesPerView={2.5}
      style={{ marginBottom: 15, marginTop: 10 }}
    >
      {dataOfSmallCardsFromBars.map(({ id, title, gradient }) => (
        <SwiperSlide key={id}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', background: '#031926', ml: 1, color: '#FFF', borderRadius: 2, p: 2 }} onClick={() => handleClick(title)}>
            <Typography sx={{ fontSize: 14 }} component="div">
              {title}
            </Typography>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
