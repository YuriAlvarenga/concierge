import React, { useContext, useEffect, useState } from 'react'
import {Grid, Card, CardMedia, CardContent, Typography } from '@mui/material'
import { HotelContext } from '../../../../../context/context'


export default function MinibarCard() {
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
      <Grid container spacing={2} style={{ padding: 10 }}>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: 18, color: '#000' }} variant="h6" component="div">
            Frigobar
          </Typography>
        </Grid>
        {loadedHotel.services.map((service, index)=>(
          <Grid item xs={12} key={index}>
            {service.title === "Frigobar" && (
              <Card sx={{ background: '#FFF', color: '#000', display:'flex', flexDirection:'column'}}>
                {service.items && service.items.map((instance, i) => (
                  <CardContent key={i} sx={{ borderBottom: '1px solid #ccc' }}>
                    <Typography sx={{ fontSize: 16 }} component="div">
                      {instance.name}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} component="div">
                      Preço: {instance.price}
                    </Typography>
                  </CardContent>
                ))}
              </Card>
            )}
          </Grid>
        ))}
      </Grid>
    )}
    </>
  )
}