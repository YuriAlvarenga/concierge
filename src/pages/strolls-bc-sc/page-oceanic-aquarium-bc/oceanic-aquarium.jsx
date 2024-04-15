import React, { useState, useEffect, useContext } from 'react'
import MenuBottomNavigation from '../../../components/menu/menu-bottom/menu-bottom'
import ImageCardFromPageStrolls from '../../../components/cards/strolls/oceanic-aquarium-cards/card-image-from-page-strolls'
import TopBar from '../../../components/menu/top-bar/top-bar'
import StoryFromStrolls from '../../../components/cards/strolls/stories-card-from-strolls/stories-card-from-strolls'
import { Toolbar, Stack, Typography, Box } from '@mui/material'
import BuyTicketsFromStrollsPage from '../../../components/cards/strolls/oceanic-aquarium-cards/buy-tickets-from-strolls'
import SwiperCardFromStrolls from '../../../components/cards/strolls/oceanic-aquarium-cards/swipper-card-from-strolls'
import ArrowBackButton from '../../../components/menu/top-bar/arrow-back-button'
import CardAddressNavigation from '../../../components/cards/shared-components/card-address-navigation/card-address-navigation'
import Title from '../../../components/cards/shared-components/titles/title'
import { HotelContext } from '../../../context/context'
import { calculateStatus } from '../../../list-of-datas/function-calculate-hour-of-status-from-lists/status-utils'


export default function PageStrolls() {

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
    <>
      <TopBar title={"Oceanic Aquarium"} leftComponent={<ArrowBackButton />} />
      <Toolbar />
      {loadedHotel && loadedHotel.strolls && loadedHotel.strolls.items && (
        <Box sx={{ position: 'fixed', top: 35, right: 0, left: 0, background: 'rgba(0,0,0,0.5)', p: 1, zIndex: 9999 }}>
          {loadedHotel.strolls.items.map((stroll, index) => (
            <React.Fragment>
              {stroll.name === "Oceanic Aquarium" && (
                <Stack key={index} direction="row" alignItems="center" justifyContent="flex-end" >
                  {calculateStatus(stroll.status) === "Aberto agora" && (
                    <Typography sx={{ fontSize: 12, color: 'green' }} variant="body2"> {calculateStatus(stroll.status)}</Typography>
                  )}
                  {calculateStatus(stroll.status) === "Fechado agora" && (
                    <Typography sx={{ fontSize: 12, color: 'red' }} variant="body2"> {calculateStatus(stroll.status)}</Typography>
                  )}
                </Stack>
              )}
            </React.Fragment>
          ))}
        </Box>
      )}
      <StoryFromStrolls />
      <Title title={"Garanta seus dias de Diversão"} />
      <BuyTicketsFromStrollsPage />
      <CardAddressNavigation endereco={"Rua 4000, 133 B. Camboriú, SC"} />
      <Title title={"Sobre nós"} />
      <SwiperCardFromStrolls />
      <ImageCardFromPageStrolls />
      <Toolbar />
      <MenuBottomNavigation />

    </>
  )
}