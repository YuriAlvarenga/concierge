import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import { styled } from '@mui/system'
import AddIcon from '@mui/icons-material/Add'
import AttractionsIcon from '@mui/icons-material/Attractions'
import RestaurantIcon from '@mui/icons-material/Restaurant'

const RootBottomNavigation = styled(BottomNavigation)({
  width: '100%',
  position: 'fixed',
  bottom: 0,
  background: '#19647e',
  margin: 0,
  padding: 0
})

export default function MenuBottomNavigation({ hotelId }) {
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
    { id: 1, label: "Hotel",  value:`/${hotelId}`, icon: <HomeIcon /> },
    { id: 2, label: "Restaurante", value: "/restaurantesbc", icon: <RestaurantIcon/>},
    { id: 3, label: "Passeios", value: "/strollsbc", icon: <AttractionsIcon/>},
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
          sx={{
            color: "#8BBEC7",
            "&.Mui-selected": { // Estilo aplicado quando o componente estiver selecionado
              color: "#FFF" // Cor de fundo quando selecionado
            }
          }}
        />
      ))}
    </RootBottomNavigation>
  )
}
