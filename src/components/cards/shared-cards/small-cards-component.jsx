import React from 'react'
import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function SmallCardComponent({ data }) {

  const handleClick = (title) => {
    const filteredData = data.filter(item => item.tag && item.tag.includes(title.toLowerCase()))
    console.log(filteredData)
    // Aqui você pode fazer algo com os dados filtrados, como armazená-los em um estado para renderização posterior
  }
  
  return (
    <Swiper
      slidesPerView={2.5}
      style={{ marginBottom: 15, marginTop: 10 }}
    >
      {data.map(({ id, title, gradient }) => (
        <SwiperSlide key={id}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', background: gradient, ml: 1, color: '#f4e9cd', borderRadius: 2, p: 2 }} onClick={() => handleClick(title)}>
            <Typography sx={{ fontSize: 14 }} component="div">
              {title}
            </Typography>
            <Typography component="div"></Typography>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
