import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import { styled } from '@mui/system'
import AddIcon from '@mui/icons-material/Add'
import StarPurple500Icon from '@mui/icons-material/StarPurple500'

const RootBottomNavigation = styled(BottomNavigation)({
  width: '100%',
  position: 'fixed',
  bottom: 0,
  background: '#031926',
  margin: 0,
  padding: 0
})

export default function MenuBottomNavigation() {
  const [value, setValue] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  //verifica a rota atual e atribui o novo valor a value, faz com que o item do menu clicado fique ativo
  useEffect(() => {
    setValue(location.pathname)
  }, [location.pathname])

  const handleItemClick = (newValue) => {
    setValue(newValue)
    navigate(newValue)
  }

  const itemsMenu = [
    { id: 1, label: "Hotel", value: "/hotelpage/:hotelId", icon: <HomeIcon /> },
    { id: 2, label: "Concierge", value: "/", icon: <PersonIcon /> },
    { id: 4, label: "Categorias", value: "/categories", icon: <AddIcon /> }
  ]

  return (
    <RootBottomNavigation value={value}>
      {itemsMenu.map((item) => (
        <BottomNavigationAction
          onClick={() => handleItemClick(item.value)} //pega o valor do item clicado e vai para a função handleitemclick para ver qual item foi clicado, atribuindo um novo valor
          key={item.id}
          label={item.label}
          value={item.value}
          icon={item.icon}
          sx={{ color: "#FFF"}}
        />
      ))}
    </RootBottomNavigation>
  )
}
