import React from 'react'
import MenuBottomNavigation from '../../../components/menu/menu-bottom/menu-bottom'
import ImageCardFromPageStrolls from '../../../components/cards/strolls/oceanic-aquarium-cards/card-image-from-page-strolls'
import CardAddressFromPageStrolls from '../../../components/cards/strolls/oceanic-aquarium-cards/card-address-from-page-strolls'
import TopBar from '../../../components/menu/top-bar/top-bar'
import StoryFromStrolls from '../../../components/cards/strolls/stories-card-from-strolls/stories-card-from-strolls'
import { Toolbar } from '@mui/material'
import Title from '../../../components/titles/title'
import BuyTicketsFromStrollsPage from '../../../components/cards/strolls/oceanic-aquarium-cards/buy-tickets-from-strolls'
import SwiperCardFromStrolls from '../../../components/cards/strolls/oceanic-aquarium-cards/swipper-card-from-strolls'
import SocialMedia from '../../../components/cards/card-social-media/social-media'
import ArrowBackButton from '../../../components/menu/top-bar/arrow-back-button'

export default function PageStrolls() {

  return (  
    <>
        <TopBar title={"Oceanic Aquarium"} leftComponent={<ArrowBackButton/>}/>
          <Toolbar/>
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