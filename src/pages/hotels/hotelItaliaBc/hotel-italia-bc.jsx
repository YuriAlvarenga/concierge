import React from 'react'
import MenuBottomNavigation from '../../../components/menu/menu-bottom'
import TopBar from '../../../components/top-bar/top-bar'
import Card from '../../../components/cards/card'
import ImageCard from '../../../components/cards/image-card'



export default function HotelItaliaBC() {

  return (
    <>
      <TopBar/>
      <ImageCard title={'Hotel Itália'}/>
      <Card title={'Informativo'}/>
      <MenuBottomNavigation/>
    </>
  )
}

