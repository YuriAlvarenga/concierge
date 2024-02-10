import React from 'react'
import {Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import EastIcon from '@mui/icons-material/East'
import dataOfAllBars from '../../../list-of-datas/list-of-data-all-bars/list-of-data-all-bars'


export default function CardAllBarsAndNightclubs() {
  return (
      <>
      {dataOfAllBars.map(({name, children})=>(
      <Grid container spacing={2} style={{ padding: 10, paddingBottom: 0 }} key={name}>
        <Typography sx={{fontSize:16, mt:2, mb:0, ml:2}}>{name}</Typography>
        <Grid item xs={12}>
          {children.map(({ id, title:childName, horario, status, gradient, image }) => (
            <Card key={id} sx={{ background: `radial-gradient(${gradient})`, color: '#FFF', marginBottom: '10px' }}>
              {image && (
                <CardMedia
                  component="img"
                  image={image}
                  alt={childName}
                  style={{ width: '100%', maxHeight: '220px', objectFit: 'cover' }}
                />
              )}
              <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography>{childName}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <RadioButtonUncheckedIcon sx={{ background: status === 'Aberto' ? 'green' : 'red', color: status === "Aberto" ? 'green' : 'red', borderRadius: '100%', mr: 1, fontSize: 13 }} />
                  <Typography>{status}</Typography>
                </Box>
              </CardContent>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography>{horario}</Typography>
                  <EastIcon />
                </Box>
              </CardContent>
            </Card>
          ))}
        </Grid>
        </Grid>
      ))}
    </>
  )
}