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
import { Fade } from "react-awesome-reveal"

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
    "Eventos": <GroupsIcon sx={{color:"#FFF"}}/>,
    "Lista de Canais": <DvrIcon sx={{color:"#FFF"}}/>
  }

  return (
    <React.Fragment>
      {loadedHotel && loadedHotel.services && loadedHotel.services.length > 0 && (
         <React.Fragment>
          <Fade direction="left">
            <Typography variant="h6" sx={{ml: 1, mt: 2, pt:2}}>
              {t(loadedHotel.services[0].title)}
            </Typography>
          </Fade>
        <Grid container spacing={1} sx={{ padding: 2 }}>
          { loadedHotel.services.map((service, index) => (
            <Grid item xs={4} key={index} onClick={() => navigate(service.route)}>
              <Card sx={{ background: 'linear-gradient(to bottom, #28afb0 60%, #FFF 50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 80 }}>
                <CardContent>
                  <Fade direction='right'>
                    <Typography sx={{ fontSize: 16 }} component="div">
                      {iconMap[service.subTitle]}
                    </Typography>
                  </Fade>
                </CardContent>
                <Fade direction='left'>
                  <Typography sx={{ fontSize: 12 }} alignItems='center' justifyContent='center' component="div">
                    {t(service.subTitle)}
                  </Typography>
                </Fade>
              </Card>
            </Grid>
          ))}
        </Grid>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
