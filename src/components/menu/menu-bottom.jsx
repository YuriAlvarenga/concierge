import React, {useState} from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/Explore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import { styled } from '@mui/system'

const RootBottomNavigation = styled(BottomNavigation)({
  width: '100%',
  position: 'fixed', 
  bottom: 0,
  background:'#000'
})

export default function MenuBottomNavigation() {
  const [value, setValue] = useState('home')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <RootBottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction label="Início" value="home" icon={<HomeIcon />} sx={{color:"#fff"}} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<ExploreIcon />} sx={{color:"#fff"}} />
      <BottomNavigationAction label="Categorias" value="categories" icon={<FavoriteIcon />} sx={{color:"#fff"}} />
      <BottomNavigationAction label="Recepção" value="reception" icon={<PersonIcon />} sx={{color:"#fff"}} />
    </RootBottomNavigation>
  )
}
