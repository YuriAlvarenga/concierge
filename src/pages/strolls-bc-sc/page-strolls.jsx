import React from 'react'
import MenuBottomNavigation from '../../components/menu/menu-bottom/menu-bottom'
import ImageCardFromPageStrolls from '../../components/cards/strolls/page-strolls/card-image-from-page-strolls'
import CardAddressFromPageStrolls from '../../components/cards/strolls/page-strolls/card-address-from-page-strolls'
import TopBar from '../../components/menu/top-bar/top-bar'
import StoryFromStrolls from '../../components/cards/strolls/stories-card-from-strolls/stories-card-from-strolls'
import { Toolbar } from '@mui/material'
import Title from '../../components/titles/title'
import BuyTicketsFromStrollsPage from '../../components/cards/strolls/page-strolls/buy-tickets-from-strolls'
import SwiperCardFromStrolls from '../../components/cards/strolls/page-strolls/swipper-card-from-strolls'

export default function PageStrolls() {

  return (  
    <>
      <Toolbar/>
        <TopBar title={"Oceanic Aquarium"} />
          <StoryFromStrolls/>
          <Title title={"Garanta seus dias de Diversão"}/>
          <BuyTicketsFromStrollsPage/>
          <CardAddressFromPageStrolls/>
          <Title title={"Sobre nós"}/>
          <SwiperCardFromStrolls/>
          <ImageCardFromPageStrolls/>
          <Toolbar/>
        <MenuBottomNavigation/>
   
    </>
  )
}