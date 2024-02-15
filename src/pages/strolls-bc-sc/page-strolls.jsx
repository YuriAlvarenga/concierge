import React, {useState} from 'react'
import {Grid, Card, CardMedia, Button, Typography, Box, IconButton } from '@mui/material'
import dataOfPageStrolls from '../../list-of-datas/list-of-data-strolls/list-of-data-from-page-strolls'
import MenuBottomNavigation from '../../components/menu/menu-bottom/menu-bottom'
import FileCopyIcon from '@mui/icons-material/FileCopy'

export default function PageStrolls() {
    // Função para abrir o aplicativo de navegação com o endereço desejado
  const openNavigationApp = () => {
    const endereco = "Rua 4000, 133 Barra Sul, Balneário Camboriú, SC"
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`

    // Verifica se o dispositivo suporta a abertura do aplicativo do Google Maps
    const supportsNativeApp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (supportsNativeApp) {
        // Abre o aplicativo do Google Maps
        window.open(`geo:0,0?q=${encodeURIComponent(endereco)}`, '_blank')
    } else {
        // Abre o Google Maps no navegador
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
    <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {dataOfPageStrolls.map(({id, image})=>(
                    <Card key={id}> 
                        <CardMedia
                            component="img"
                            alt={`Imagem ${id}`}
                            image={image} 
                            sx={{ height: 360, objectFit: 'fill' }}
                        />
                    </Card>
                ))}
            </Grid>
            <Grid item xs={12}>
          {/* Botão para navegar até o endereço */}
          <Button variant="contained" onClick={openNavigationApp}>
            Navegar até o Endereço
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton 
                  aria-label="Copiar Senha"
                  onClick={() => copyToClipboard("Rua 4000, 133 Barra Sul, Balneário Camboriú, SC")}
                >
                  <FileCopyIcon />
                </IconButton>
                <Typography color="text.secondary">
                    Rua 4000, 133 Barra Sul, Balneário Camboriú, SC
                </Typography>
              </Box>
            {copied && <Typography color="text.secondary" sx={{ textAlign: 'center' }}>Senha copiada para a área de transferência!</Typography>}
        </Grid>
        </Grid>
        <MenuBottomNavigation/>
    </>
  )
}