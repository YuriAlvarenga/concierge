import React, { useState } from 'react'
import { Grid, Card, CardContent, Typography, IconButton, Snackbar, Box } from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import dataOfWifiHotel from '../../../list-of-datas/list-of-data-hotel-page/list-of-data-wi-fi'

export default function WifiCard() {
  const [copied, setCopied] = useState(false);
  const [copiedNetwork, setCopiedNetwork] = useState('')

  const copyToClipboard = (text, network) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setCopiedNetwork(network)
    setTimeout(() => {
      setCopied(false)
      setCopiedNetwork('')
    }, 3000)
  }

  return (
    <Grid container spacing={2} style={{ padding: 15, paddingBottom: 0 }}>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ mb: 1 }}>Wi-Fi</Typography>
        {dataOfWifiHotel.map(({ id, network, password }) => (
          <Card key={id} sx={{ marginBottom: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 2 }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ mr: 1 }}>
                  Rede:
                </Typography>
                <Typography color="text.secondary">
                  {network}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ mr: 1 }}>
                  Senha:
                </Typography>
                <Typography color="text.secondary">
                  {password}
                </Typography>
                <IconButton
                  aria-label="Copiar Senha"
                  onClick={() => copyToClipboard(password, network)}
                >
                  <FileCopyIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
        <Snackbar
          open={copied}
          autoHideDuration={3000}
          onClose={() => setCopied(false)}
          message={`Senha de ${copiedNetwork} copiada para a área de transferência!`}
        />
      </Grid>
    </Grid>
  )
}
