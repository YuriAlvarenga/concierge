import React from "react"
import { Typography, Grid, Card, CardContent, CardMedia } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import aboutUsStrolls from "../../../../list-of-datas/list-of-data-strolls/list-of-data-about-us-strolls"

export default function SwiperCardFromStrolls() {

  const highlightWords = (content) => {
    const words = content.split(" ")
    return words.map((word, index) => {
      const lowerCaseWord = word.toLowerCase();
      if (lowerCaseWord === "aquário" || lowerCaseWord === "brasil") {
        return (
          <span key={index} style={{ color: "#FFA500" }}>{word} </span>
        )
      }
      return (
        <span key={index}>{word} </span>
      )
    })
  }


  return (
    <Swiper
      spaceBetween={4}
      slidesPerView={2}
      style={{padding: 15 }}
    >
      <Grid container >
        {aboutUsStrolls.map(({ id, content, gradient, image }) => (
          <SwiperSlide key={id} >
            <Grid item >
            {content && (
                <Card sx={{ background: gradient, color: "#FFF", display: "flex", height: 170, width: 'auto', maxWidth: 180 }}>
                  <CardContent>
                  <Typography sx={{ fontSize: 22 }} component="div">
                      {highlightWords(content)}
                    </Typography>
                  </CardContent>
                </Card>
              )}
              {image && (
                <Card sx={{ background: gradient, color: "#FFF", height:170 }}>
                  <CardMedia
                    component="img"
                    height='170'
                    image={image}
                    alt="Imagem"
                  />
                </Card>
              )}
            </Grid>
          </SwiperSlide>
        ))}
        <Grid />
      </Grid>
    </Swiper>
  )
}
