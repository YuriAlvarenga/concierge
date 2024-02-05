import React from 'react'
import MenuBottomNavigation from '../../../components/menu/menu-bottom'
import TopBar from '../../../components/top-bar/top-bar'
import ImageCard from '../../../components/cards/image-card'
import TitleCards from '../../../components/titles/title-cards'
import { Box } from '@mui/material'


export default function HotelItaliaBC() {

  return (
    <Box  style={{ maxWidth: '100%', margin: '0 auto' }}>
      <TopBar/>
      <TitleCards title={"Hotel Itália"}/>
      <ImageCard/>
      <MenuBottomNavigation/>
    </Box>
  )
}

