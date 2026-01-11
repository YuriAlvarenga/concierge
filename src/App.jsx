import React from 'react'
import AppRoutes from './AppRoutes'
import { Box, CssBaseline } from '@mui/material'

export default function App() {
  return (
    <Box 
      sx={{ 
        bgcolor: '#f5f5f5', // Cor de fundo do "monitor" (Desktop)
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center' 
      }}
    >
      {/* CssBaseline limpa as margens padrão do navegador */}
      <CssBaseline />

      {/* Este Box é o seu "Celular" */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '450px', // Largura máxima do layout mobile
          bgcolor: 'white', // Cor de fundo do app
          minHeight: '100vh',
          boxShadow: { xs: 'none', md: '0 0 25px rgba(0,0,0,0.1)' }, // Sombra apenas no desktop
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <AppRoutes />
      </Box>
    </Box>
  )
}