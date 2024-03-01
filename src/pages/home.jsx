import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Toolbar, Typography, Fade, CircularProgress  } from '@mui/material'
import TopBar from '../components/menu/top-bar/top-bar'
import ButtonTranslate from '../components/menu/top-bar/button-translate'
import MenuBottomNavigation from '../components/menu/menu-bottom/menu-bottom'

export default function Home(){
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false)
      setIsLoading(true)
      const storedHotelId = localStorage.getItem("selectedHotelId")

      if (storedHotelId) {
        navigate(`/${storedHotelId}`)
      }
    }, 3000) 

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <>
      <TopBar title="Concierge Virtual" rightComponent={<ButtonTranslate />} />
      <Fade in={showWelcomeMessage} timeout={1000}>
        <Box
          minHeight="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bgcolor="#f3f3f3"
        >
          <Typography variant="h3" gutterBottom align="center">
            Bem-vindo ao Concierge Virtual!
          </Typography>
          {isLoading && (
            <Box mt={2}>
              <Typography variant="body1" align="center">Carregando...</Typography>
              <CircularProgress />
            </Box>
          )}
          {!isLoading && (
            <Typography variant="body1" align="center">Redirecionando para sua página...</Typography>
          )}
        </Box>
      </Fade>
      <Toolbar />
      <MenuBottomNavigation />
    </>
  )
}


