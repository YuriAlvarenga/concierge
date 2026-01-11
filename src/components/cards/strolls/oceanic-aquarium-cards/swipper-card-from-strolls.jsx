import React from "react"
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material"
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
          <span key={index} style={{ color: "#FFA500", fontWeight: 'bold' }}>{word} </span>
        )
      }
      return (
        <span key={index}>{word} </span>
      )
    })
  }

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Swiper
        spaceBetween={15}
        slidesPerView={1.2} // Mostra 1 slide e um pedaço do próximo (visual de App)
        centeredSlides={false}
        style={{ padding: "15px 10px" }} // Padding lateral para não colar na borda
      >
        {aboutUsStrolls.map(({ id, content, gradient, image }) => (
          <SwiperSlide key={id}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}>
              
              {content && (
                <Card sx={{ 
                  background: gradient, 
                  color: "#FFF", 
                  minHeight: "90px",
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 16, lineHeight: 1.4 }} component="div">
                      {highlightWords(content)}
                    </Typography>
                  </CardContent>
                </Card>
              )}

              {image && (
                <Card sx={{ 
                  borderRadius: 2, 
                  overflow: 'hidden',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={image}
                    alt="Imagem do passeio"
                    sx={{ objectFit: 'cover' }}
                  />
                </Card>
              )}
              
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}