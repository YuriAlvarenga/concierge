import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/Explore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import { styled } from '@mui/system'

const RootBottomNavigation = styled(BottomNavigation)({
  width: '100%',
  position: 'fixed', // Adicionando 'fixed' para manter na parte inferior
  bottom: 0 // Adicionando 'bottom: 0' para fixar na parte inferior
})

export default function MenuBottomNavigation() {
  const [value, setValue] = React.useState('recents')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <RootBottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction label="Recents" value="recents" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<ExploreIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Folder" value="folder" icon={<PersonIcon />} />
    </RootBottomNavigation>
  )
}
