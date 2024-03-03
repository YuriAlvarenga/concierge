import React, { useContext, useEffect, useState } from 'react'
import { Grid, Card, CardMedia, Typography, IconButton, Box, Stack } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useNavigate } from 'react-router-dom'
import { HotelContext } from '../../../context/context'
import { calculateStatus } from '../../../list-of-datas/function-calculate-hour-of-status-from-lists/status-utils'
import { useTranslation } from 'react-i18next'


export default function CardAllRestaurants() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { hotel } = useContext(HotelContext)
  const [loadedHotel, setLoadedHotel] = useState(null)

  //recupera o id do local storage
  useEffect(() => {
    const storedHotel = JSON.parse(localStorage.getItem("selectedHotel"))
    if (storedHotel) {
      setLoadedHotel(storedHotel)
    }
  }, [])

  useEffect(() => {
    if (hotel) {
      setLoadedHotel(hotel)
      localStorage.setItem("selectedHotel", JSON.stringify(hotel))
    }
  }, [hotel])

  const sortedRestaurants = loadedHotel && loadedHotel.restaurants.items.sort((a, b) => {
    const statusA = calculateStatus(a.status)
    const statusB = calculateStatus(b.status)
    
    if (statusA === "Aberto agora" && statusB !== "Aberto agora") return -1
    if (statusA !== "Aberto agora" && statusB === "Aberto agora") return 1
    
    return 0
  })


  return (
    <React.Fragment>
      {loadedHotel && (
        <Grid container spacing={2} style={{ padding: 10, paddingBottom: 15 }}>
            <React.Fragment>
              {sortedRestaurants.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                 {calculateStatus(item.status)=== "Aberto agora" && (
                      <Box  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant='h6'>{item.name}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', m:1 }}>
                        {item.status && calculateStatus(item.status) === 'Aberto agora' && (
                              <RadioButtonUncheckedIcon sx={{ background:'green', color: 'green', fontSize: 17, mr: 1, borderRadius:'50%'}} />
                            )}
                            <Typography> {t(item.status ? calculateStatus(item.status) : 'Horário não especificado')}</Typography>
                        </Box>
                      </Box>
                    )}
                  <Card sx={{ position: 'relative', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', mb:4}} onClick={() => navigate(item.routePage)}>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.image}
                      sx={{ height: 220, objectFit: 'cover' }}
                    />
                    {calculateStatus(item.status) === "Fechado agora" && (
                      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 2, background: 'rgba(0,0,0,0.5)', color: '#f4e9cd'}}>
                        <Typography variant="h6" sx={{ mb: 1 }}>{item.name}</Typography>
                          <Stack direction="row" alignItems="center">
                            <RadioButtonUncheckedIcon sx={{ fontSize: 14, background:'red', color: 'red', mr: 1, borderRadius:'50%' }} />
                            <Typography variant="body2"> {t(item.status ? calculateStatus(item.status) : 'Horário não especificado')}</Typography>
                          </Stack>
                      </Box>
                    )}
                    <IconButton sx={{ position: 'absolute', bottom: 10, right: 10, color: '#f4e9cd'}}>
                      <ArrowForwardIcon />
                    </IconButton>
                  </Card>
                </Grid>
              ))}
            </React.Fragment>
        </Grid>
      )}
    </React.Fragment>
  )
}
