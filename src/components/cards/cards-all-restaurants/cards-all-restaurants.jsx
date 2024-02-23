import React from 'react'
import { Grid, Card, CardMedia, Typography, IconButton, Box, Stack } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import dataOfAllRestaurants from '../../../list-of-datas/list-of-data-all-restaurants/list-of-data-all-restaurants'
import { useNavigate } from 'react-router-dom'

export default function CardAllRestaurants() {
  const navigate = useNavigate()

  return (
    <Grid container spacing={2} style={{ padding: 10, paddingBottom: 15 }}>
      {dataOfAllRestaurants.map(({ id, title: childName, status, image, routePage }) => (
        <Grid item xs={12} sm={6} md={4} key={id}>
          {status === "Aberto" && (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography>{childName}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', m:1 }}>
              {status === 'Aberto' ? (
                    <CheckCircleIcon sx={{ color: 'green', fontSize: 17, mr: 1 }} />
                  ) : (
                    <RadioButtonUncheckedIcon sx={{ background:'red', color: 'red', borderRadius: '50%', fontSize: 14, mr: 1 }} />
                  )}
                  <Typography>{status}</Typography>
              </Box>
            </Box>
          )}
          <Card
            sx={{
              position: 'relative',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                transform: 'scale(1.03)',
              },
            }}
            onClick={() => navigate(routePage)}
          >
            <CardMedia
              component="img"
              image={image}
              alt={childName}
              sx={{ height: 220, objectFit: 'cover' }}
            />
            {status === "Fechado" && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 2,
                  background: 'rgba(0,0,0,0.5)',
                  color: '#fff',
                }}
              >
                <Typography variant="h6" sx={{ mb: 1 }}>{childName}</Typography>
                <Stack direction="row" alignItems="center">
                  <RadioButtonUncheckedIcon
                    sx={{ fontSize: 14, background: status === 'Aberto' ? 'green' : 'red', color: status === 'Aberto' ? 'green' : 'red', borderRadius:'50%', mr: 1 }}
                  />
                  <Typography variant="body2">{status}</Typography>
                </Stack>
              </Box>
            )}
            <IconButton
              sx={{
                position: 'absolute',
                bottom: 10,
                right: 10,
                color: '#FFF',
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
