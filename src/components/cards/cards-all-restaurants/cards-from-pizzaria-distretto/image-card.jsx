import React, {useState, useEffect, useContext} from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { Box, Stack, Typography } from '@mui/material'
import { calculateStatus } from '../../../../list-of-datas/function-calculate-hour-of-status-from-lists/status-utils'
import { HotelContext } from '../../../../context/context'


export default function ImageCardFromPizzariaDistretto(){

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


  return (
    <Box sx={{ pt: 2, overflow: 'hidden', position: 'relative' }}>
      <Card sx={{ maxWidth: '100%', padding: 0 }}>
        <CardMedia
          component="img"
          alt='Imagem'
          image="/restaurants/distretto-tratoria/pizza-no-forno.jpg" 
          sx={{ height: 240, objectFit: 'fill', margin: 0, padding: 0 }}
        />
      </Card>
      {loadedHotel && loadedHotel.restaurants && loadedHotel.restaurants.items && (
        <Box sx={{ position: 'absolute', bottom: 0, right: 0, left:0, background: 'rgba(0,0,0,0.5)', p: 1, zIndex:9999}}>
          {loadedHotel.restaurants.items.map((restaurant, index) => (
            <Stack key={index} direction="row" alignItems="center" justifyContent="space-between" >
                <Typography sx={{ fontSize: 14, whiteSpace: 'nowrap', color:'#FFF' }}>Distretto Tratoria</Typography>
                {calculateStatus(restaurant.status) === "Aberto agora" &&(
                  <Typography sx={{fontSize:12, color:'green'}} variant="body2"> {calculateStatus(restaurant.status)}</Typography>
                )}
                {calculateStatus(restaurant.status) === "Fechado agora" &&(
                  <Typography sx={{fontSize:12,  color:'red'}} variant="body2"> {calculateStatus(restaurant.status)}</Typography>
                )}
            </Stack>
            ))}
        </Box>
      )}

    </Box>
  )
}
