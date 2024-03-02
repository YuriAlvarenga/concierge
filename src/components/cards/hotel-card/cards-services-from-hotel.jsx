import React, { useContext, useEffect, useState } from 'react'
import { Grid, Box, Button, Typography, IconButton } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import EastIcon from '@mui/icons-material/East'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import { useTranslation } from 'react-i18next'
import { HotelContext } from '../../../context/context'
import zIndex from '@mui/material/styles/zIndex'
import { calculateStatus } from '../../../list-of-datas/function-calculate-hour-of-status-from-lists/status-utils'


export default function ServicesFromHotelCard() {

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


  //whatspp function
  const handleWhatsAppClick = (phoneNumber, message) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }
  

  const serviceItems = [
    { title: 'Reservas', phoneNumber: '+5547997815538', message: 'Olá, gostaria de fazer uma reserva.', isOpen: false, color: 'red'  },
    { title: 'Recepção', phoneNumber: '+5547997815538', message: 'Mensagem para a recepção.', isOpen: true, color: 'green'  },
  ]

  return (
    <React.Fragment>
      {loadedHotel && (
        <Grid container spacing={2} sx={{ padding: 2 }}>
           {loadedHotel.contacts && (
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ mb: 1 }}>{loadedHotel.contacts.title}</Typography>
              {loadedHotel.contacts.items.map((item, idx) => (
                <Card key={idx} sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 2, mb: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {item.status ? (
                          calculateStatus(item.status) === "Aberto agora" ? (
                            <RadioButtonUncheckedIcon sx={{fontSize: 14, background:' green', color: 'green', mr: 1, borderRadius:'50%' }} />
                          ) : (
                            <RadioButtonUncheckedIcon sx={{ fontSize: 14, background:'red', color: 'red', mr: 1, borderRadius:'50%' }} />
                          )
                          ) : (
                          <></>
                          )}
                        <Typography sx={{ fontSize: 14}} component="div">
                          {item.status ? calculateStatus(item.status) : 'Horário não especificado'}
                        </Typography>
                      </Box>
                      <IconButton onClick={() => handleWhatsAppClick(item.phoneNumber, item.message)}>
                        <EastIcon sx={{ fontSize: 16, color: "#28afb0" }} />
                      </IconButton>
                    </Box>
                    <Button sx={{background:'#28afb0'}} variant='contained' fullWidth onClick={() => handleWhatsAppClick(item.phoneNumber, item.message)}>{t(item.name)}</Button>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          )}
        </Grid>
      )}
    </React.Fragment>
  )
}
