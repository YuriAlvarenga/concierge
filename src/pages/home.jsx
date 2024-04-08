import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Fade, CircularProgress  } from '@mui/material'



export default function Home(){
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true)

  useEffect(() => {
    setShowWelcomeMessage(false)
    setIsLoading(true)
    const storedHotelId = localStorage.getItem("selectedHotelId")

    if (storedHotelId) {
      navigate(`/${storedHotelId}`)
    }
  }, [navigate])

  return (
    <>
      <Fade in={showWelcomeMessage} timeout={1000}>
        <Box
          minHeight="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bgcolor="#f3f3f3"
        >
          <Box sx={{display:'flex', alignItems:'center', mb: 1}}>
            <img src="logo-app/concierge-logo.png" alt="Concierge Virtual" style={{ height:80, width:80, borderRadius:10}} />
            <Typography variant="h6" gutterBottom align="center" sx={{ml:1}}>
              Concierge Virtual
            </Typography>
          </Box>
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
    </>
  )
}


