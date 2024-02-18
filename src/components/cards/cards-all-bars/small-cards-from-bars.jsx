import React from 'react'
import { Grid, Card, CardContent, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import dataOfSmallCardsFromBars from '../../../list-of-datas/list-of-data-all-bars/list-of-data-small-cards-bars'
import dataOfAllBars from '../../../list-of-datas/list-of-data-all-bars/list-of-data-all-bars'

export default function SmallCardFromBars() {

  const handleClick = (title) => {
    const filteredData = dataOfAllBars.filter(bar => bar.tags && bar.tags.includes(title.toLowerCase()))
    console.log(filteredData)
    // Aqui você pode fazer algo com os dados filtrados, como armazená-los em um estado para renderização posterior
  }
  
  return (
    <Swiper
      spaceBetween={-50}
      slidesPerView={3}
      style={{ marginBottom: 15 }}
    >
      <Grid container>
        {dataOfSmallCardsFromBars.map(({ id, title, gradient }) => (
          <SwiperSlide key={id}>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ml:-4 }}>
              <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: gradient, minWidth:110 }} onClick={() => handleClick(title)}>
                <CardContent>
                <Typography sx={{ fontSize: 12, mt: 1, color:"#000" }} component="div">
                  {title}
                </Typography>
                </CardContent>
              </Card>
            </Grid>
          </SwiperSlide>
        ))}
      </Grid>
    </Swiper>
  )
}
