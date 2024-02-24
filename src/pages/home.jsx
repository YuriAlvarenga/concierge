import React from 'react'
import MenuBottomNavigation from '../components/menu/menu-bottom/menu-bottom'
import { Box, Toolbar } from '@mui/material'
import TopBar from '../components/menu/top-bar/top-bar'
import ImageCard from '../components/cards/concierge-cards/image-card'
import Title from '../../src/components/cards/shared-components/titles/title'
import SmallCard from '../components/cards/concierge-cards/small-card-from-home'
import CardComponent from '../components/cards/concierge-cards/card-from-home'
import { useTranslation } from 'react-i18next'
import ButtonTranslate from '../components/menu/top-bar/button-translate'

export default function Home() {
  const { t } = useTranslation()
  return (
    <>
    <Box  style={{ maxWidth: '100%', margin: '0 auto', background: '#f3f3f3'}}>
      <TopBar title={"Hotel Itália"} rightComponent={<ButtonTranslate/>}/>
          <Box style={{ background: '#000', height: 140 }}>
            <ImageCard/>
          </Box>
          <Box sx={{mt:23}}>
            <Title title={t("Serviços")} />
            <SmallCard />
            <CardComponent />
          </Box>  
      <Toolbar/>
      <MenuBottomNavigation/>
    </Box>
    </>
  )
}

