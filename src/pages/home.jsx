import React from 'react'
import MenuBottomNavigation from '../components/menu/menu-bottom/menu-bottom'
import { Box, Toolbar } from '@mui/material'
import TopBar from '../components/menu/top-bar/top-bar'
import ImageCard from '../components/cards/concierge-cards/image-card'
import Title from '../../src/components/titles/title'
import SmallCard from '../components/cards/concierge-cards/small-card-from-home'
import CardComponent from '../components/cards/concierge-cards/card-from-home'


export default function Home() {

  return (
    <>
    <Box  style={{ maxWidth: '100%', margin: '0 auto', background: '#FFF'}}>
      <TopBar title={"Concierge Virtual"}/>
          <Box style={{ background: '#000', height: 140 }}>
            <Title title={"Destaques"} index={1}/>
            <ImageCard/>
          </Box>
          <Box sx={{mt:22}}>
            <Title title={"Serviços"} />
            <SmallCard />
            <CardComponent />
          </Box>  
      <Toolbar/>
      <MenuBottomNavigation/>
    </Box>
    </>
  )
}

