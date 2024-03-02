import React, { useContext, useState, useEffect } from 'react'
import { Box, Grid, Card, CardContent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast'
import BrunchDiningIcon from '@mui/icons-material/BrunchDining'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining'
import PoolIcon from '@mui/icons-material/Pool'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'
import HotTubIcon from '@mui/icons-material/HotTub'
import DoorBackIcon from '@mui/icons-material/DoorBack'
import { HotelContext } from '../../../context/context'

const iconMap = {
  "Café": <FreeBreakfastIcon sx={{ mr: 1, fontSize: 18,   }} />,
  "Almoço": <DinnerDiningIcon sx={{ mr: 1, fontSize: 18, color:'orange'  }} />,
  "Jantar": <BrunchDiningIcon sx={{ mr: 1, fontSize: 18, color:'red' }} />,
  "Piscina": <PoolIcon sx={{ mr: 1, fontSize: 18, color:'blue'  }} />,
  "Academia": <FitnessCenterIcon sx={{ mr: 1, fontSize: 18 }} />,
  "Sauna": <HotTubIcon sx={{ mr: 1, fontSize: 18, color:'red'  }} />,
  "Check-in": <MeetingRoomIcon sx={{ mr: 1, fontSize: 18, color:'brown'  }} />,
  "Check-out": <DoorBackIcon sx={{ mr: 1, fontSize: 18, color:'brown'  }} />
}

export default function HourCard() {
  const { t } = useTranslation()

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
    <React.Fragment>
      {loadedHotel && (
        <Grid container spacing={2} style={{ padding: 10, paddingBottom: 0 }}>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 1 }}>{loadedHotel.hours.name}</Typography>
            <Card sx={{ backgroundColor: '#FFF', borderRadius: 2 }}>
              <CardContent>
                <Grid container spacing={2}>
                  {loadedHotel.hours.items.map((item, index) => (
                    <Grid item xs={4} key={index}>
                      <HourRow icon={iconMap[item.name]} title={t(item.name)} time={item.horario} />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  )
}

function HourRow({ icon, title, time }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        {icon}
        <Typography variant="body1">{title}</Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">{time}</Typography>
    </Box>
  )
}
