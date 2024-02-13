import React from 'react'
import MenuBottomNavigation from '../components/menu/menu-bottom/menu-bottom'
import { Box, Toolbar } from '@mui/material'
import TopBar from '../components/menu/top-bar/top-bar'
import ImageCard from '../components/cards/concierge-cards/image-card'
import Title from '../../src/components/titles/title'
import SmallCard from '../components/cards/concierge-cards/small-card-from-home'
import CardComponent from '../components/cards/concierge-cards/card-from-home'
import SeeAll from '../components/titles/seeAll'



export default function Home() {

  return (
    <>
    <Box  style={{ maxWidth: '100%', margin: '0 auto' }}>
      <TopBar title={"Concierge Virtual"}/>
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

