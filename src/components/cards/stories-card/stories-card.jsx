import React from 'react'
import { Card, CardMedia, Typography } from '@mui/material'

const storyImages = [
    { image: "/strolls-bc/page-aquario-bc/image-from-page-aquario-bc.jpg" },
    { image: "/strolls-bc/page-aquario-bc/image-from-page-aquario-bc.jpg" },
    { image: "/strolls-bc/page-aquario-bc/image-from-page-aquario-bc.jpg" },
    { image: "/strolls-bc/page-aquario-bc/image-from-page-aquario-bc.jpg" },
    { image: "/strolls-bc/page-aquario-bc/image-from-page-aquario-bc.jpg" },

]


export default function Story({stories}){
  return (
    <>
        <Typography sx={{m:1}}>
            {stories}
        </Typography>
        <Card sx={{ display:'flex', alignItems:'center', justifyContent:'space-around', mb:2, boxShadow:'none'}}>
        {storyImages.map((imageObj, index) => (
            <CardMedia
            key={index}
            component="img"
            image={imageObj.image}
            alt={`Story image ${index + 1}`}
            sx={{ borderRadius: "50%", width: 80, height: 80 }}
            />
        ))}
        </Card>
    </>
  )
}

