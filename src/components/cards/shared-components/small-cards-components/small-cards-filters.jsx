import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'




export default function SmallCardFilters({ handleClick, data, clearFilter, filteredData }) {

   // Verifica se há dados filtrados
  


  return (
    <>
      <Swiper
        slidesPerView={2.5}
        style={{ marginBottom: 15, marginTop: 1 }}
        >
        {data.map(({ id, title, gradient }) => (
          <SwiperSlide key={id}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', background: '#1d404c', ml: 1, color: '#FFF', borderRadius: 2, p: 2 }} onClick={() => handleClick(title)}>
              <Typography sx={{ fontSize: 14 }} component="div">
                {title}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box sx={{display:'flex', justifyContent:'flex-end', mb:0, mr:1}}>
        {filteredData.length > 0 && <Button onClick={clearFilter}>Limpar Filtro</Button>}
      </Box>
    </>
  )
}
