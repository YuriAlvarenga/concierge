import React, {useState} from 'react'
import {Grid, CardContent, Typography, IconButton } from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import DirectionsIcon from '@mui/icons-material/Directions'
import PlaceIcon from '@mui/icons-material/Place'

export default function CardAddressNavigation({endereco}) {
    // Função para abrir o aplicativo de navegação com o endereço desejado
  const openNavigationApp = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`
    const geoUrl = `geo:0,0?q=${encodeURIComponent(endereco)}`

    if ("geolocation" in navigator) {
      // Abre o endereço no aplicativo de mapas
      window.location.href = geoUrl
    } else {
      // Abre o endereço no navegador
      window.open(googleMapsUrl, '_blank')
    }

  }


  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }


  return (  
    <Grid container spacing={2}>
      <Grid item xs={12}>
          <Typography sx={{m:1}}>
              Como Chegar?
          </Typography>
          <CardContent sx={{display: 'flex', alignItems:'center', justifyContent:'space-around', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', m:1}} >
              <PlaceIcon sx={{color:'red'}}/>
              <Typography sx={{fontSize:13}} color="text.secondary">
                  {endereco}
              </Typography>
              <IconButton 
                aria-label="Copiar Senha"
                onClick={() => copyToClipboard(endereco)}
              >
                <FileCopyIcon />
              </IconButton>
              <IconButton aria-label="Navegar até o endereço" variant="contained" onClick={openNavigationApp}>
                <DirectionsIcon />
              </IconButton>
          </CardContent>    
          {copied && <Typography color="text.secondary" sx={{ textAlign: 'center' }}>Endereço copiado para a área de transferência!</Typography>}
      </Grid>
    </Grid>

  )
}