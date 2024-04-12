import React, { useContext, useEffect, useState } from 'react'
import { Grid, Card, CardMedia, Typography, IconButton, Box, Stack } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useNavigate } from 'react-router-dom'

import { calculateStatus } from '../../../../list-of-datas/function-calculate-hour-of-status-from-lists/status-utils'
import { HotelContext } from '../../../../context/context'
import { useTranslation } from 'react-i18next'
import { Fade } from "react-awesome-reveal"


export default function CardAllStrolls() {
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

  //coloca em ordem de abertos em primeiro lugar
  const sortedStrolls = loadedHotel && loadedHotel.strolls && loadedHotel.strolls.items
    ? loadedHotel.strolls.items.sort((a, b) => {
        const statusA = calculateStatus(a.status)
        const statusB = calculateStatus(b.status)
        
        if (statusA === "Aberto agora" && statusB !== "Aberto agora") return -1
        if (statusA !== "Aberto agora" && statusB === "Aberto agora") return 1
        
        return 0
      })
    : []

  return (
    <React.Fragment>
      {loadedHotel && sortedStrolls && (
        <Grid container spacing={2} style={{ padding: 10, paddingBottom: 15 }}>
          {sortedStrolls.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ position: 'relative', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', mb: 4 }} onClick={() => navigate(item.routePage)}>
                <CardMedia component="img" image={item.image} alt={item.image} sx={{ height: 220, objectFit: 'cover' }} />

                {(calculateStatus(item.status) === "Aberto agora" || calculateStatus(item.status) === "Fechado agora") && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2,
                      background: calculateStatus(item.status) === "Aberto agora" ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.5)',
                      color: calculateStatus(item.status) === "Aberto agora" ? '#FFF' : '#f4e9cd',
                    }}
                  >
                    {calculateStatus(item.status) === "Fechado agora" && (
                      <Stack direction="row" alignItems="center">
                          <Fade direction='left'>
                            <RadioButtonUncheckedIcon sx={{ fontSize: 14, background: 'red', color: 'red', mr: 1, borderRadius: '50%' }} />
                            <Typography variant="body2"> {t(item.status ? calculateStatus(item.status) : 'Horário não especificado')}</Typography>
                          </Fade>
                        </Stack>
                    )}
                    <Fade direction='right'>
                      <Typography variant="h6">{item.name}</Typography>
                    </Fade>
                  </Box>
                )}

                {calculateStatus(item.status) === "Aberto agora" && (
                  <Stack direction="row" alignItems="center" sx={{ position: 'absolute', top: 5, left: 5 }}>
                    <Fade direction='left'>
                      <RadioButtonUncheckedIcon sx={{ fontSize: 14, background: 'green', color: 'green', mr: 1, borderRadius: '50%' }} />
                      <Typography sx={{color:'#FFF'}} variant="body2"> {t(item.status ? calculateStatus(item.status) : 'Horário não especificado')}</Typography>
                    </Fade>
                  </Stack>
                )}
                <Fade direction='right'>
                  <IconButton sx={{ position: 'absolute', bottom: 10, right: 10, color: '#f4e9cd' }}>
                    <ArrowForwardIcon />
                  </IconButton>
                </Fade>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </React.Fragment>
  )
}
