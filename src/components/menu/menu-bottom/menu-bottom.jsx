import React, {useState} from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'
import PersonIcon from '@mui/icons-material/Person'
import { styled } from '@mui/system'
import AddIcon from '@mui/icons-material/Add'
import { PropaneSharp } from '@mui/icons-material'

const RootBottomNavigation = styled(BottomNavigation)({
  width: '100%',
  position: 'fixed', 
  bottom: 0,
  background:'#000',
  margin:0,
  padding:0
})

export default function MenuBottomNavigation({handleItemClick}) {

  //associa o nome e icon que estão sendo clicados
  const [value, setValue] = useState('home')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  //lista de itens do menu inferior
  const itemsMenu = [
    { id:1, label: "Início", value: "home", icon:<HomeIcon /> },
    { id:2, label: "Recepção", value: "reception", icon:<PersonIcon /> },
    { id:3, label: "Notificações", value: "notifications", icon:<CircleNotificationsIcon /> },
    { id:4, label: "Categorias", value: "categories", icon:<AddIcon /> }
  ]

  return (
    <RootBottomNavigation value={value} onChange={handleChange} >
      {itemsMenu.map((item) =>(
        <BottomNavigationAction onClick={()=>{setValue(item.value);handleItemClick(item.id)}} key={item.id} label={item.label} value={item.value} icon={item.icon} sx={{color:"#fff"}} />
      ))}
    </RootBottomNavigation>
  )
}
