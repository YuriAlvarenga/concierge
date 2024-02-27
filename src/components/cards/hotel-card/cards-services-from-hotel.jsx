import React from 'react'
import { Grid, Box, Button, Typography, IconButton } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import EastIcon from '@mui/icons-material/East'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import { useTranslation } from 'react-i18next'



export default function ServicesFromHotelCard() {

  const { t } = useTranslation()

  const handleWhatsAppClick = (phoneNumber, message) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }
  

  const serviceItems = [
    { title: 'Reservas', phoneNumber: '+5547997815538', message: 'Olá, gostaria de fazer uma reserva.', isOpen: false, color: 'red'  },
    { title: 'Room Service', phoneNumber: '+5547997815538', message: 'Mensagem para o serviço de quarto.', isOpen: true, color: 'green'  },
    { title: 'Recepção', phoneNumber: '+5547997815538', message: 'Mensagem para a recepção.', isOpen: true, color: 'green'  },
  ]

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {serviceItems.map((item, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {item.isOpen ? (
                    <CheckCircleIcon sx={{ color: 'green', fontSize: 17, borderRadius: '100%', mr: 1 }} />
                  ) : (
                    <RadioButtonUncheckedIcon sx={{ background: 'red', fontSize: 14, borderRadius: '50%', mr: 1, color:'red' }} />
                  )}
                  <Typography variant="body2">{item.isOpen ? t('Aberto') : t('Fechado agora')}</Typography>
                </Box>
                <IconButton onClick={() => handleWhatsAppClick(item.phoneNumber, item.message)}>
                  <EastIcon sx={{ fontSize: 16, color: "#1d404c" }} />
                </IconButton>
              </Box>
              <Button variant="contained" sx={{background:"#19647e", mt: 1}} fullWidth onClick={() => handleWhatsAppClick(item.phoneNumber, item.message)}>
                {t(item.title)}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
