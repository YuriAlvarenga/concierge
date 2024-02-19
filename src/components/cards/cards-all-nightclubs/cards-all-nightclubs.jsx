import React from 'react'
import { Box, Grid, Card, CardMedia, Typography, IconButton } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import dataOfAllNightClubs from '../../../list-of-datas/list-of-data-all-nightclubs/list-of-data-all-nightclubs-bc'

export default function CardAllNightclubs() {
  return (
    <Grid container spacing={2} style={{ padding: 10, paddingBottom: 0 }}>
        {dataOfAllNightClubs.map(({ id, title: childName, status, image, video }) => (
      <Grid item xs={12} key={childName}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>{childName}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mr:1 }}>
                <RadioButtonUncheckedIcon sx={{ background: status === 'Aberto' ? 'green' : 'red', color: status === "Aberto" ? 'green' : 'red', borderRadius: '100%', mr: 1, fontSize: 13 }} />
                <Typography>{status}</Typography>
              </Box>
          </Box>
          
          <Card key={id} sx={{ color: '#FFF', marginBottom: '10px', position: 'relative' }}>
            {video ? (
              <>
                <video width="100%" autoPlay loop>
                  <source src={video} type="video/mp4" />
                  Seu navegador não suporta a reprodução de vídeos.
                </video>
                <IconButton style={{ position: 'absolute', bottom: 0, right: 0, color: '#fff' }}>
                  <ArrowForwardIcon />
                </IconButton>
              </>
            ) : (
              <>
                {image && (
                  <CardMedia
                    component="img"
                    image={image}
                    alt={childName}
                    style={{ width: '100%', objectFit: 'cover' }}
                  />
                )}
                {!image && (
                  <Typography>Imagem indisponível</Typography>
                )}
              </>
            )}       
          </Card>
      </Grid>
        ))}
    </Grid>
  )
}
