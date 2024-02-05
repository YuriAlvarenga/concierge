import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { Typography, Box } from '@mui/material'

export default function ImageCard(props){
  return (
    <>
      <Typography sx={{mt:5, ml:1, mb: 1}}>
          {props.title}
      </Typography>
      <Card >
        <CardMedia
          component="img"
          alt="Imagem"
          height="240"
          image="512.png" 
        />
      </Card>
    </>
  )
}

