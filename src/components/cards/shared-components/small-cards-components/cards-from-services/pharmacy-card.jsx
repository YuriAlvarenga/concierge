import React, { useContext, useEffect, useState } from 'react'
import { Grid, Typography, Card, CardContent, Button, Box } from '@mui/material'
import { HotelContext } from '../../../../../context/context'
import { useNavigate } from 'react-router-dom';

export default function PharmacyCard() {
  const { hotel } = useContext(HotelContext);
  const [loadedHotel, setLoadedHotel] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const storedHotel = JSON.parse(localStorage.getItem('selectedHotel'))
    if (storedHotel) {
      setLoadedHotel(storedHotel)
    }
  }, [])

  useEffect(() => {
    if (hotel) {
      setLoadedHotel(hotel)
      localStorage.setItem('selectedHotel', JSON.stringify(hotel))
    }
  }, [hotel])

  const openWhatsApp = (contact) => {
    const phoneNumber = '+5547997815538'
    window.open(`https://wa.me/${phoneNumber}`)
  }

  return (
    <>
      {loadedHotel && (
        <Grid container spacing={2} sx={{ padding: 1 }}>
          {loadedHotel.services.map((service, index) => (
            <Grid item xs={12} key={index} onClick={() => navigate(service.route)}>
              {service.title === 'Farmácias' && (
                <>
                  {service.instances && service.instances.map((instance, i) => (
                    <Card key={i} sx={{ marginBottom: 2 }}> 
                      <CardContent sx={{ p:1, background: instance.gradient, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> 
                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%', pb:3}}>
                          <Typography sx={{ fontSize: 16, color:"#FFF" }} component="div">
                            {instance.name}
                          </Typography>
                          <Typography sx={{ fontSize: 12, color:"#FFF" }} component="div">
                            {instance.status}
                          </Typography>
                        </Box>
                      </CardContent>
                      <Box sx={{display:'flex', m:1, justifyContent:'space-between'}}>
                        Endereço aqui, Promoção redes sociais
                        <Button variant="contained" onClick={() => openWhatsApp(instance.contact)}>
                          WhatsApp
                        </Button>
                      </Box>
                    </Card>
                  ))}
                </>
              )}
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}
