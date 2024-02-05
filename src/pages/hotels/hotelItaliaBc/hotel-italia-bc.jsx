import React from 'react'
import MenuBottomNavigation from '../../../components/menu/menu-bottom'
import TopBar from '../../../components/top-bar/top-bar'
import CardComponent from '../../../components/cards/card'
import ImageCard from '../../../components/cards/image-card'
import TitleCards from '../../../components/titles/title-cards'



export default function HotelItaliaBC() {

  return (
    <>
      <TopBar/>
      <TitleCards title={"Hotel Itália"}/>
      <ImageCard/>
      <MenuBottomNavigation/>
    </>
  )
}

