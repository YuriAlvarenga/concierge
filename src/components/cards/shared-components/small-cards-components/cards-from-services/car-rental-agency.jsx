import React, { useContext, useEffect, useState } from 'react'
import { Grid, Card, CardMedia, Typography, Box, IconButton, Stack } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import { HotelContext } from '../../../../../context/context'
import { useNavigate } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { calculateStatus } from '../../../../../list-of-datas/function-calculate-hour-of-status-from-lists/status-utils'
import { useTranslation } from 'react-i18next'

export default function CarRentalCard() {
  const { hotel } = useContext(HotelContext)
  const { t } = useTranslation()
  const [loadedHotel, setLoadedHotel] = useState(null)
  const navigate = useNavigate()

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

   //whatspp function
   const handleWhatsAppClick = (phoneNumber, message) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  
  return (
    <>
    {loadedHotel && (
      <Grid container spacing={2} style={{ padding: 15 }}>
        {loadedHotel.services.map((service, index)=>(
          <Grid item xs={12} key={index}>
            {service.subTitle === "Locadoras" && (
              <Box>
                {service.instances && service.instances.map((instance, i) => (
                  <React.Fragment key={`${index}-${i}`}>
                    <Card key={i} sx={{ position: 'relative', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: 2 }} onClick={() => handleWhatsAppClick(instance.phoneNumber, instance.message)}>
                      <CardMedia component="img" image={instance.image} alt={instance.name} sx={{ height: 220, objectFit: 'fill' }}/>
                      {calculateStatus(instance.status)=== "Aberto agora" && (
                        <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 2, background: 'rgba(0,0,0,0.5)', color: '#FFF',}}>
                          <Stack direction="row" alignItems="center">
                            <RadioButtonUncheckedIcon sx={{ fontSize: 14, background:'green', color: 'green', mr: 1, borderRadius:'50%' }} />
                            <Typography variant="body2"> {t(instance.status ? calculateStatus(instance.status) : 'Horário não especificado')}</Typography>
                          </Stack>
                          <Typography variant="h6">{instance.name}</Typography>
                        </Box>
                      )}
                      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 2, color: '#FFF'}}>
                        {calculateStatus(instance.status) !== "Aberto agora" && (
                          <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 2, background: 'rgba(0,0,0,0.5)', color: '#FFF',}}>
                            <Stack direction="row" alignItems="center">
                              <RadioButtonUncheckedIcon sx={{ fontSize: 14, background:'red', color: 'red', mr: 1, borderRadius:'50%' }} />
                              <Typography variant="body2"> {t(instance.status ? calculateStatus(instance.status) : 'Horário não especificado')}</Typography>
                            </Stack>
                            <Typography variant="h6">{instance.name}</Typography>
                          </Box>
                        )}
                        <IconButton sx={{ position: 'absolute', bottom: 10, right: 10, color: '#FFF'}} onClick={() => navigate(service.route)}>
                          <ArrowForwardIcon />
                        </IconButton>
                      </Box>
                    </Card>
                  </React.Fragment>
                ))}
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    )}
    </>
  )
}
