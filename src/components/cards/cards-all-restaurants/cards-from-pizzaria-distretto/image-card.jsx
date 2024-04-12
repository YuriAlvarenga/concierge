import React, {useState, useEffect, useContext} from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { Box, Stack, Typography } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import { Fade } from "react-awesome-reveal"
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
      

    </Box>
  )
}
