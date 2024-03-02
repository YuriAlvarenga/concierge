import React from 'react'
import { Box, Grid, Card, CardContent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast'
import BrunchDiningIcon from '@mui/icons-material/BrunchDining'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining'
import PoolIcon from '@mui/icons-material/Pool'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'
import DoorBackIcon from '@mui/icons-material/DoorBack'

export default function HourCard() {
  const { t } = useTranslation()

  return (
    <Grid container spacing={1} sx={{ padding: 2 }}>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ mb: 1 }}>Horários</Typography>
        <Card sx={{ backgroundColor: '#FFF', borderRadius: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid container item xs={12} spacing={10} sx={{display: 'flex',  justifyContent: 'space-between'}}>
                <HourRow icon={<FreeBreakfastIcon sx={{mr:1, fontSize:18}}/>} title={t("Café")} time="07:00h às 11:00h" />
                <HourRow icon={<DinnerDiningIcon sx={{mr:1, fontSize:18}}/>} title={t("Almoço")} time="12:00h às 14:30h" />
              </Grid>
              <Grid container item xs={12} spacing={10}>
                <HourRow icon={<BrunchDiningIcon sx={{mr:1, fontSize:18}}/>} title={t("Jantar")} time="07:00h às 11:00h" />
              </Grid>
              <Grid container item xs={12} spacing={10} sx={{display: 'flex',  justifyContent: 'space-between'}}>
                <HourRow icon={<PoolIcon sx={{mr:1, fontSize:18}}/>} title={t("Piscina")} time="09:00h às 20:00h" />
                <HourRow icon={<FitnessCenterIcon sx={{mr:1, fontSize:18}}/>} title={t("Academia")} time="09:00h às 20:00h" />
              </Grid>
              <Grid container item xs={12} spacing={10} sx={{display: 'flex',  justifyContent: 'space-between'}}>
                <HourRow icon={<MeetingRoomIcon sx={{mr:1, fontSize:18}}/>} title={t("Check-in")} time="A partir das 14:00h" />
                <HourRow icon={<DoorBackIcon sx={{mr:1, fontSize:18}}/>} title={t("Check-out")} time="Até às 12:00h" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

function HourRow({ icon, title, time }) {
  return (
    <Grid item xs={6} sm={4}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'start', justifyContent: 'space-between', py: 1 }}>
        <Box sx={{ display: 'flex', alignItems:'center', justifyContent: 'space-between'}}>
          {icon}
          <Typography variant="body1">{title}</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">{time}</Typography>
      </Box>
    </Grid>
  )
}
