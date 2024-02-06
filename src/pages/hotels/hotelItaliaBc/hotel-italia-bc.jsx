import React from 'react'
import MenuBottomNavigation from '../../../components/menu/menu-bottom/menu-bottom'
import TopBar from '../../../components/menu/top-bar/top-bar'
import ImageCard from '../../../components/cards/hotel-cards/image-card'
import TitleCards from '../../../components/titles/title-cards'
import { Box } from '@mui/material'
import SmallCard from '../../../components/cards/hotel-cards/small-card'
import CardComponent from '../../../components/cards/hotel-cards/simple-card'


export default function HotelItaliaBC() {

  return (
    <Box  style={{ maxWidth: '100%', margin: '0 auto' }}>
      <TopBar/>
      <TitleCards title={"Hotel Itália"}/>
      <ImageCard/>
      <SmallCard gradientColors={['#1fe4f5', '#3fbafe']}/>
      <SmallCard gradientColors={['#60efbc,#58d5c9']}/>
      <CardComponent/>
      <MenuBottomNavigation/>
    </Box>
  )
}

