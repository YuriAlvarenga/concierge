import React, { useState } from 'react'
import { Box, Grid, Card, CardContent, Typography, IconButton } from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import dataOfWifiHotel from '../../../list-of-datas/list-of-data-hotel-page/list-of-data-wi-fi'

export default function WifiCard() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <Grid container spacing={2} style={{ padding: 10, paddingBottom: 0 }}>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: 16, mb: 1 }}>Wi-fi</Typography>
        {dataOfWifiHotel.map(({network, password})=>(
          <Card sx={{ marginBottom: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography>
                Rede:
              </Typography>
              <Typography color="text.secondary">
                {network}
              </Typography>
              <Typography>
                Senha:
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton 
                  aria-label="Copiar Senha"
                  onClick={() => copyToClipboard(password)}
                >
                  <FileCopyIcon />
                </IconButton>
                <Typography color="text.secondary">
                  Senha
                </Typography>
              </Box>
            </CardContent>
            {copied && <Typography color="text.secondary" sx={{ textAlign: 'center' }}>Senha copiada para a área de transferência!</Typography>}
          </Card>
        ))}
      </Grid>
    </Grid>
  )
}
