import React, { useContext, useEffect, useState } from 'react'
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import { HotelContext } from '../../../../../context/context'

export default function MeetingRoomCard() {
  const { hotel } = useContext(HotelContext)
  const [loadedHotel, setLoadedHotel] = useState(null)

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
        <Grid container spacing={1}>
          {loadedHotel.services.map((service, serviceIndex) => (
            <Grid item xs={12} key={serviceIndex}>
              {service.subTitle === "Sala de Reunião" && (
                <>
                  {service.instances.map((instance, instanceIndex) => (
                    <Grid item xs={12} key={instanceIndex}>
                      <Card>
                        <CardMedia
                          sx={{ height: 240}}
                          image={instance.image}
                          title="events rooms"
                        />
                      </Card>
                       <CardContent sx={{mt:-5, background:'#FFF', ml:3, mr:3, mb:3, borderRadius:2}}>
                          <Typography gutterBottom variant="h5" component="div">
                            {instance.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {instance.content}
                          </Typography>
                        <CardActions sx={{display:'flex', flexDirection:'row-reverse', mt:3}}>
                          <Button sx={{color:'#28afb0'}} size="small" onClick={() => handleWhatsAppClick(instance.phoneNumber, instance.message)}>Solicitar Orçamento</Button>
                        </CardActions>
                        </CardContent>
                    </Grid>
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
