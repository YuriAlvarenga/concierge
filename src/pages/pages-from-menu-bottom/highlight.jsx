import React from 'react'
import { Box, Grid, Card, CardMedia, Typography, Stack, IconButton, Toolbar } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import TopBar from '../../components/menu/top-bar/top-bar'
import { calculateStatus } from '../../list-of-datas/function-calculate-hour-of-status-from-lists/status-utils'
import MenuBottomNavigation from '../../components/menu/menu-bottom/menu-bottom'





export default function Highlight() {

    const dataOfHighlights = [
        {id: 1, image: 'sponsors/embraed.png',  status: calculateStatus("19:00h às 21:00h")}
    ]

    return (
        <>
        <TopBar title={"Destaques"}/>
        <Toolbar/>
        <Grid container spacing={2} style={{ padding: 10, paddingBottom: 15 }}>
          {dataOfHighlights.map(({ id, title: childName, status, image, routePage }) => (
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
                      color: '#FFF',
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
                    color: '#f4e9cd',
                  }}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>
        <MenuBottomNavigation/>
        </>
    )
}