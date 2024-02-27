import React, {useState} from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'




export default function SmallCardFilters({ handleClick, data, clearFilter }) {

  const [clickedCard, setClickedCard] = useState(null)

  const handleCardClick = (id, title) => {
    if (clickedCard === id) {
      // Se o mesmo card for clicado novamente, limpe o filtro
      setClickedCard(null)
      clearFilter() // Limpa o filtro
    } else {
      // Caso contrário, aplique o filtro normalmente
      setClickedCard(id)
      handleClick(title)
    }
  }

  return (
    <>
      <Swiper
        slidesPerView={2.5}
        style={{ marginBottom: 15, marginTop: 1 }}
        >
        {data.map(({ id, title, gradient }) => (
          <SwiperSlide key={id}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around',  background: clickedCard === id ? '#28afb0' : '#FFF', ml: 1, color: clickedCard === id ? '#FFF' : '#000', borderRadius: 2, p: 2 }}  onClick={() => handleCardClick(id, title)}>
              <Typography sx={{ fontSize: 14 }} component="div">
                {title}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
