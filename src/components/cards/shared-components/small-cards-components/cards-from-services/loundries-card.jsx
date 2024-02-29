import React, { useContext, useState, useEffect } from 'react'
import { Grid, Box } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import dataOfLoundries from '../../../../../list-of-datas/list-of-data-page-home/list-of-data-services/list-of-data-laundries'
import { HotelContext } from '../../../../../context/context'


export default function LaundryCard(){

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
            Lavanderias
          </Typography>
        </Grid>
        {loadedHotel.services.map((service, index)=>(
          <Grid item xs={12} key={index}>
            {service.title === "Lavanderia" && (
              <Card sx={{ background: '#FFF', color: '#000', display:'flex', flexDirection:'column'}}>
                {service.instances && service.instances.map((instance, i) => (
                  <CardContent key={i} sx={{ borderBottom: '1px solid #ccc' }}>
                    <Typography sx={{ fontSize: 16 }} component="div">
                      {instance.name}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} component="div">
                      Status: {instance.status}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} component="div">
                      Contact: {instance.contact}
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