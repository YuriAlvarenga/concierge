import React, { useState } from 'react'
import { Box, Grid, Card, CardContent, Typography } from '@mui/material'


export default function HourCard() {

  return (
    <Grid container spacing={2} style={{ padding: 10, paddingBottom: 0 }}>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: 16, mb: 1 }}>Horários</Typography>
        <Card sx={{ marginBottom: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
                <Typography>
                    café:
                </Typography>
                <Typography color="text.secondary">
                    07:00h às 11:00h
                </Typography>
            </Box>
            <Box>
                <Typography>
                Almoço:
                </Typography>
                <Typography color="text.secondary">
                    12:00h às 14:30h
                </Typography>
            </Box>
          </CardContent>

          <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{mr:1}}>
              Jantar:
            </Typography>
            <Typography color="text.secondary">
              07:00h às 11:00h
            </Typography>
          </CardContent>

          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
                <Typography>
                    Academia:
                </Typography>
                <Typography color="text.secondary">
                    09:00h às 20:00h
                </Typography>
            </Box>
            <Box>
                <Typography>
                    Piscina:
                </Typography>
                <Typography color="text.secondary">
                    09:00h às 20:00h
                </Typography>
            </Box>
          </CardContent>
 
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
                <Typography>
                Check-in:
                </Typography>
                <Typography color="text.secondary">
                a partir das 14:00h
                </Typography>
            </Box>
            <Box>
                <Typography>
                    Check-out:
                </Typography>
                <Typography color="text.secondary">
                    até às 12:00h 
                </Typography>
            </Box>
          </CardContent>

        </Card>
      </Grid>
    </Grid>
  )
}
