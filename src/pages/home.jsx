import React from 'react'
import TopBar from '../components/menu/top-bar/top-bar'
import MenuBottomNavigation from '../components/menu/menu-bottom/menu-bottom'
import ImageCard from '../components/cards/hotel-cards/image-card'
import Title from '../components/titles/title'
import { Box } from '@mui/material'
import SmallCard from '../components/cards/hotel-cards/small-card'
import CardComponent from '../components/cards/hotel-cards/simple-card'
import SeeAll from '../components/titles/seeAll'


export default function Home() {

  return (
    <Box  style={{ maxWidth: '100%', margin: '0 auto' }}>
      <header>
        <TopBar title={"Hotel Itália"}/>
      </header>
      <main>
        <ImageCard/>
        <Title title={"Serviços"}/>
        <SmallCard/>
        <>
          <Title title={"Passeios"}/>
          <CardComponent gradientColors={['#1fe4f5, #3fbafe']} title={"Aquário"} horario={"09:00h às 21:00h"} status={"Aberto"}/>
          <CardComponent gradientColors={['#60efbc, #58d5c9']} title={"Jurassic Park"} horario={"09:00h às 20:00h"} status={"Aberto"}/>
          <CardComponent gradientColors={['#FFDAB9', '#FFA500']} title={"Roda Gigante"} horario={"09:00h às 21:30h"} status={"Fechado"}/>
          <CardComponent gradientColors={['#76b2fe, #b69efe']} title={"Barco Pirata"} horario={"09:00h às 21:30h"} status={"Fechado"}/>
          <SeeAll/>
        </>
        <>
          <Title title={"Restaurantes"}/>
          <CardComponent gradientColors={['#AAAAAA', '#000000']} title={"Distretto"} horario={"19:00h às 00:00h"} status={"Aberto"}/>
          <CardComponent gradientColors={['#00FFFF', '#008B8B']} title={"Águas da Brava"} horario={"19:00h às 23:30h"} status={"Aberto"}/>
          <CardComponent gradientColors={['#FFA07A', '#CD5C5C']} title={"Brava Sushi"} horario={"19:00h às 23:30h"} status={"Aberto"}/>
          <SeeAll/>
        </>
        <>
          <Title title={"Bares"}/>
          <CardComponent gradientColors={['#FFA500', '#FF8C00']} title={"Infarta Madalena"} horario={"19:00h às 01:00h"} status={"Aberto"}/>
          <CardComponent gradientColors={['#FF0000', '#B22222']} title={"Sossega Bar"} horario={"19:00h às 02:30h"} status={"Aberto"}/>
          <SeeAll/>
        </>
        <>
          <Title title={"Baladas"}/>
          <CardComponent gradientColors={['#f588d8, #c0a3e5']} title={"Shed"} horario={"21:00h às 05:00h"} status={"Fechado"}/>
          <CardComponent gradientColors={['#AAAAAA', '#000000']} title={"Warung"} horario={"22:00h às 04:30h"} status={"Aberto"}/>
          <CardComponent gradientColors={['#00FFFF', '#008B8B']} title={"Green Valley"} horario={"23:00h às 06:30h"} status={"Aberto"}/>
          <SeeAll/>
        </>
        <Box sx={{mt:10}}></Box>
      </main>
      <footer>
        <MenuBottomNavigation/>
      </footer>
    </Box>
  )
}

