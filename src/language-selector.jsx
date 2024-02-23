import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'


export default function LanguageSelector() {
  const { i18n } = useTranslation()
  const navigate = useNavigate()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    navigate("/concierge")
  }

  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent:'space-around', mt:'10vh'}}>
      <Typography>Languages</Typography>
      <Button sx={{width:'50%', mt:10}} variant='outlined' onClick={() => changeLanguage('pt-BR')}>Português</Button>
      <Button sx={{width:'50%', mt:10}} variant='outlined' onClick={() => changeLanguage('es')}>Español</Button>
      <Button sx={{width:'50%', mt:10}} variant='outlined' onClick={() => changeLanguage('en')}>English</Button>
    </Box>
  )
}

