import { Box, Button } from '@mui/material'
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
    <Box>
      <Button onClick={() => changeLanguage('pt-BR')}>Português</Button>
      <Button onClick={() => changeLanguage('es')}>Español</Button>
      <Button onClick={() => changeLanguage('en')}>English</Button>
    </Box>
  )
}

