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

  return (
    <>
      {loadedHotel && (
        <Grid container spacing={1} style={{ padding: 10 }}>
          {loadedHotel.services.map((service, serviceIndex) => (
            <Grid item xs={12} key={serviceIndex}>
              {service.subTitle === "Sala de Reunião" && (
                <>
                  {service.instances.map((instance, instanceIndex) => (
                    <Grid item xs={12} key={instanceIndex}>
                      <Card sx={{ mb:3 }}>
                        <CardMedia
                          sx={{ height: 140 }}
                          image={instance.image}
                          title="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {instance.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {instance.content}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button sx={{color:'#28afb0'}} size="small">Solicitar Orçamento</Button>
                        </CardActions>
                      </Card>
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
