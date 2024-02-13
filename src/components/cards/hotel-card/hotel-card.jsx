import React, { useState } from 'react'
import { Box, Grid, Card, CardContent, Typography, IconButton } from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopy'

export default function HotelCard() {
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
        <Card sx={{ marginBottom: '10px' }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>
              Rede:
            </Typography>
            <Typography color="text.secondary">
              Hotel Itália
            </Typography>
          </CardContent>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>
              Password:
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton 
                aria-label="Copiar Senha"
                onClick={() => copyToClipboard('SuaSenhaAqui')}
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
      </Grid>
    </Grid>
  )
}
