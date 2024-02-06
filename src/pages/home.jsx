import React from 'react'
import TopBar from '../components/menu/top-bar/top-bar'
import MenuBottomNavigation from '../components/menu/menu-bottom/menu-bottom'
import ImageCard from '../components/cards/hotel-cards/image-card'
import Title from '../components/titles/title'
import { Box } from '@mui/material'
import SmallCard from '../components/cards/hotel-cards/small-card'
import CardComponent from '../components/cards/hotel-cards/simple-card'


export default function Home() {

  return (
    <Box  style={{ maxWidth: '100%', margin: '0 auto' }}>
      <TopBar/>
      <Title title={"Hotel Itália"}/>
      <ImageCard/>
      <Title title={"Serviços"}/>
      <SmallCard/>
      <Title title={"Lazer"}/>
      <CardComponent gradientColors={['#1fe4f5, #3fbafe']}/>
      <CardComponent gradientColors={['#fbc1cc, #fa99b2']}/>
      <CardComponent gradientColors={['#76b2fe, #b69efe']}/>
      <Title title={"Restaurantes"}/>
      <CardComponent gradientColors={['#60efbc, #58d5c9']}/>
      <CardComponent gradientColors={['#f588d8, #c0a3e5']}/>
      
      <MenuBottomNavigation/>
    </Box>
  )
}

