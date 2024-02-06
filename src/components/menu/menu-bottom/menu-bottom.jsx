import React, {useState} from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'
import PersonIcon from '@mui/icons-material/Person'
import { styled } from '@mui/system'
import AddIcon from '@mui/icons-material/Add'

const RootBottomNavigation = styled(BottomNavigation)({
  width: '100%',
  position: 'fixed', 
  bottom: 0,
  background:'#000',
  margin:0,
  padding:0
})

export default function MenuBottomNavigation() {
  const [value, setValue] = useState('home')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <RootBottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction label="Início" value="home" icon={<HomeIcon />} sx={{color:"#fff"}} />
      <BottomNavigationAction label="Recepção" value="reception" icon={<PersonIcon />} sx={{color:"#fff"}} />
      <BottomNavigationAction label="Notificações" value="notifications" icon={<CircleNotificationsIcon />} sx={{color:"#fff"}} />
      <BottomNavigationAction label="Categorias" value="categories" icon={<AddIcon />} sx={{color:"#fff"}} />
    </RootBottomNavigation>
  )
}
