import React, {useState} from 'react'
import MenuBottomNavigation from '../components/menu/menu-bottom/menu-bottom'
import { Box, Toolbar } from '@mui/material'
import HotelPage from './pages-from-menu-bottom/hotel-page'
import Categories from './pages-from-menu-bottom/all-categories'
import Notifications from './pages-from-menu-bottom/notifications'


export default function Home() {
  //função que mostra o item que está sendo clicado através dos estados itemMenuLateral passado como props
  const [itemBottomBar, setitemBottomBar] = useState(1)
  const handleItemClick = (id) => {
    setitemBottomBar(id)
  }

  return (
    <>
    <Toolbar/>
    <Box  style={{ maxWidth: '100%', margin: '0 auto' }}>

      {itemBottomBar === 1 ? (
        <HotelPage/>
      ) : itemBottomBar === 3  ? (
        <Notifications/>) : 
      itemBottomBar === 4 ? (
        <Categories/>) : ("")}

      <Toolbar/>
      <MenuBottomNavigation handleItemClick={handleItemClick} />
    </Box>
    </>
  )
}

