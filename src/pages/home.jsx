import React from 'react'
import MenuBottomNavigation from '../components/menu/menu-bottom/menu-bottom'
import { Box, Toolbar } from '@mui/material'
import TopBar from '../components/menu/top-bar/top-bar'
import ImageCard from '../../src/components/cards/hotel-cards/image-card'
import Title from '../../src/components/titles/title'
import SmallCard from '../components/cards/hotel-cards/small-card-from-home'
import CardComponent from '../components/cards/hotel-cards/card-from-home'
import SeeAll from '../components/titles/seeAll'



export default function Home() {

  return (
    <>
    <Toolbar/>
    <Box  style={{ maxWidth: '100%', margin: '0 auto' }}>
      <TopBar title={"Hotel Itália"}/>
          <ImageCard/>
          <Title title={"Serviços"}/>
          <SmallCard/>
          <CardComponent />  
      <Toolbar/>
      <MenuBottomNavigation/>
    </Box>
    </>
  )
}

