import React from 'react'
import MenuBottomNavigation from '../../../components/menu/menu-bottom/menu-bottom'
import ImageCardFromPageStrolls from '../../../components/cards/strolls/oceanic-aquarium-cards/card-image-from-page-strolls'
import TopBar from '../../../components/menu/top-bar/top-bar'
import StoryFromStrolls from '../../../components/cards/strolls/stories-card-from-strolls/stories-card-from-strolls'
import { Toolbar, Stack, Typography } from '@mui/material'
import BuyTicketsFromStrollsPage from '../../../components/cards/strolls/oceanic-aquarium-cards/buy-tickets-from-strolls'
import SwiperCardFromStrolls from '../../../components/cards/strolls/oceanic-aquarium-cards/swipper-card-from-strolls'
import ArrowBackButton from '../../../components/menu/top-bar/arrow-back-button'
import CardAddressNavigation from '../../../components/cards/shared-components/card-address-navigation/card-address-navigation'
import Title from '../../../components/cards/shared-components/titles/title'
import dataOfAllStrolls from '../../../list-of-datas/list-of-data-strolls/list-of-data-all-strolls'

export default function PageStrolls() {

  const aquariumOceanicStatus = dataOfAllStrolls.find(status => status.id === 2).status
  const color = aquariumOceanicStatus === 'Aberto' ? 'green' : 'red'

  return (  
    <>
        <TopBar title={"Oceanic Aquarium"} leftComponent={<ArrowBackButton/>}/>
        <Toolbar/>
        <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ position: 'fixed', top: 20, width:'100%', right:0, color:color,  background: 'rgba(0,0,0,0.5)', p:1 }}>
        <Typography >
          {aquariumOceanicStatus}
        </Typography>
        </Stack>
          <StoryFromStrolls/>
          <Title title={"Garanta seus dias de Diversão"}/>
          <BuyTicketsFromStrollsPage/>
          <CardAddressNavigation endereco = {"Rua 4000, 133 Balneário Camboriú, SC"}/>
          <Title title={"Sobre nós"}/>
          <SwiperCardFromStrolls/>
          <ImageCardFromPageStrolls/>
          <Toolbar/>
        <MenuBottomNavigation/>
   
    </>
  )
}