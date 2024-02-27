import React from 'react'
import { Box, Grid, Card, CardContent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function HourCard() {
  const { t } = useTranslation()

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ mb: 1 }}>Horários</Typography>
        <Card sx={{ backgroundColor: '#FFF', borderRadius: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid container item xs={12} spacing={2} sx={{display: 'flex',  justifyContent: 'space-between'}}>
                <HourRow title={t("Café")} time="07:00h às 11:00h" />
                <HourRow title={t("Almoço")} time="12:00h às 14:30h" />
              </Grid>
              <Grid container item xs={12} spacing={2}>
                <HourRow title={t("Jantar")} time="07:00h às 11:00h" />
              </Grid>
              <Grid container item xs={12} spacing={2} sx={{display: 'flex',  justifyContent: 'space-between'}}>
                <HourRow title={t("Piscina")} time="09:00h às 20:00h" />
                <HourRow title={t("Academia")} time="09:00h às 20:00h" />
              </Grid>
              <Grid container item xs={12} spacing={0} sx={{display: 'flex',  justifyContent: 'space-between'}}>
                <HourRow title={t("Check-in")} time="A partir das 14:00h" />
                <HourRow title={t("Check-out")} time="Até às 12:00h" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

function HourRow({ title, time }) {
  return (
    <Grid item xs={6} sm={4}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'space-between', py: 1 }}>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{time}</Typography>
      </Box>
    </Grid>
  )
}
