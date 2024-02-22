import React from 'react'
import { Box, Grid, Card, CardContent, Typography } from '@mui/material'

export default function HourCard() {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ mb: 1 }}>Horários</Typography>
        <Card sx={{ backgroundColor: '#FFF', borderRadius: 4 }}>
          <CardContent>
            <HourRow title="Café" time="07:00h às 11:00h" />
            <HourRow title="Almoço" time="12:00h às 14:30h" />
            <HourRow title="Jantar" time="07:00h às 11:00h" />
            <HourRow title="Academia" time="09:00h às 20:00h" />
            <HourRow title="Piscina" time="09:00h às 20:00h" />
            <HourRow title="Check-in" time="a partir das 14:00h" />
            <HourRow title="Check-out" time="até às 12:00h" />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

function HourRow({ title, time }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
      <Typography variant="body1" sx={{ flex: 1 }}>{title}</Typography>
      <Typography variant="body2" color="text.secondary">{time}</Typography>
    </Box>
  )
}
