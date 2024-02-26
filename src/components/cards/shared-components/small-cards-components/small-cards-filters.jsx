import React, {useState} from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'




export default function SmallCardFilters({ handleClick, data, clearFilter, filteredData }) {

  const [clickedCard, setClickedCard] = useState(null)

  const handleCardClick = (id, title) => {
    setClickedCard(id)
    handleClick(title)
  }

  return (
    <>
      <Swiper
        slidesPerView={2.5}
        style={{ marginBottom: 15, marginTop: 1 }}
        >
        {data.map(({ id, title, gradient }) => (
          <SwiperSlide key={id}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around',  background: clickedCard === id ? '#1d404c' : '#FFF', ml: 1, color: clickedCard === id ? '#FFF' : '#000', borderRadius: 2, p: 2 }}  onClick={() => handleCardClick(id, title)}>
              <Typography sx={{ fontSize: 14 }} component="div">
                {title}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box sx={{display:'flex', justifyContent:'flex-end', mb:0, mr:1}}>
        {filteredData.length > 0 && <Button variant='outlined' onClick={clearFilter}>Limpar Filtro</Button>}
      </Box>
    </>
  )
}
