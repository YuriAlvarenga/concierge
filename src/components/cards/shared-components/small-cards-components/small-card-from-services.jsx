import React, { useContext, useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService'
import CarRentalIcon from '@mui/icons-material/CarRental'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
import KitchenIcon from '@mui/icons-material/Kitchen'
import RoomServiceIcon from '@mui/icons-material/RoomService'
import GroupsIcon from '@mui/icons-material/Groups'
import DvrIcon from '@mui/icons-material/Dvr'
import { HotelContext } from '../../../../context/context'

export default function SmallCardServices() {
  const navigate = useNavigate()
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

  // Mapear os ícones aos títulos de serviço
  const iconMap = {
    "Farmácias": <MedicationLiquidIcon sx={{color:"#FFF"}} />,
    "Lavanderia": <LocalLaundryServiceIcon sx={{color:"#FFF"}} />,
    "Locadoras": <CarRentalIcon sx={{color:"#FFF"}}/>,
    "Translados": <AirportShuttleIcon sx={{color:"#FFF"}}/>,
    "Room Service": <RoomServiceIcon sx={{color:"#FFF"}}/>,
    "Frigobar": <KitchenIcon sx={{color:"#FFF"}}/>,
    "Sala de Reunião": <GroupsIcon sx={{color:"#FFF"}}/>,
    "Lista de Canais": <DvrIcon sx={{color:"#FFF"}}/>
  }

  return (
    <React.Fragment>
      {loadedHotel && (
        <Grid container spacing={2} sx={{ padding: 2 }}>
          {loadedHotel.services.map((service, index) => (
            <Grid item xs={3} key={index} onClick={() => navigate(service.route)}>
              <Card sx={{ background: 'linear-gradient(to bottom, #28afb0 60%, #FFF 50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 80 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 16 }} component="div">
                    {iconMap[service.subTitle]}
                  </Typography>
                </CardContent>
                <Typography sx={{ fontSize: 12 }} component="div">
                  {t(service.subTitle)}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </React.Fragment>
  )
}
