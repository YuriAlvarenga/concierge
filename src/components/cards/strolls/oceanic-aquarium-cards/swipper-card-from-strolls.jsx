import React from "react"
import { Typography, Grid, Card, CardContent, CardMedia } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import aboutUsStrolls from "../../../../list-of-datas/list-of-data-strolls/oceanic-aquarium-bc/list-of-data-about-us-strolls"

export default function SwiperCardFromStrolls() {

  const highlightWords = (content) => {
    const words = content.split(" ")
    return words.map((word, index) => {
      const lowerCaseWord = word.toLowerCase()
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
      spaceBetween={20}
      slidesPerView={2}
      style={{ padding: "15px 0" }}
    >
      {aboutUsStrolls.map(({ id, content, gradient, image }) => (
        <SwiperSlide key={id}>
          <Grid container spacing={2} sx={{ml:0.1}}>
            <Grid item xs={12} sm={6}>
              {content && (
                <Card sx={{ background: gradient, color: "#FFF", height: "100%" }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 18 }} component="div">
                      {highlightWords(content)}
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              {image && (
                <Card sx={{ background: gradient, color: "#FFF", height: "100%" }}>
                  <CardMedia
                    component="img"
                    height='100%'
                    image={image}
                    alt="Imagem"
                  />
                </Card>
              )}
            </Grid>
          </Grid>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
