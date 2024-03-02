import React, { useContext, useEffect, useState } from 'react'
import {Grid, Card, CardContent, Typography, Box } from '@mui/material'
import { HotelContext } from '../../../../../context/context'


export default function ChannelListCard() {
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
        <Grid container spacing={1} style={{ padding: 10, paddingTop:0, marginTop:0 }}>
          {loadedHotel.services.map((service, index) => (
            <Grid item xs={12} key={index}>
              {service.subTitle === "Lista de Canais" && (
                <Box>
                  {service.categories && service.categories.map((category, catIndex) => (
                    <React.Fragment key={catIndex}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>{category.categoryTitle}</Typography>
                    <Card sx={{ background: '#FFF', color: '#000', display: 'flex', flexDirection: 'column', mb:5 }}>
                        <Box key={catIndex}>
                          {category.items && category.items.map((item, itemIndex) => (
                            <CardContent key={itemIndex} sx={{ borderBottom: '1px solid #ccc', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                              <Typography sx={{ fontSize: 16 }} component="div">
                                {item.name}
                              </Typography>
                              <Typography sx={{ fontSize: 14 }} component="div">
                                {item.channel}
                              </Typography>
                            </CardContent>
                        ))}
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
