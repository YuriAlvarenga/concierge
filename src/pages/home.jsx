import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Fade  } from '@mui/material'



export default function Home(){
  const navigate = useNavigate()
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true)

  useEffect(() => {
    const storedHotelId = localStorage.getItem("selectedHotelId")
    setShowWelcomeMessage(false)
    setTimeout(()=>{
      if (storedHotelId) {
        navigate(`/${storedHotelId}`)
      }
    },2000 )
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
            <Typography variant="body1" align="center">Redirecionando para sua página...</Typography>
          </Box>
        </Box>
      </Fade>
    </>
  )
}


