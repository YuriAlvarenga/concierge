import React from 'react'
import {Box, Grid, Card, CardContent, Typography } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import EastIcon from '@mui/icons-material/East'
import dataOfAllBars from '../../../list-of-datas/list-of-data-all-bars/list-of-data-all-bars'


export default function CardAllBarsAndNightclubs() {
  return (
    <Grid container spacing={2} style={{ padding: 10, paddingBottom: 0 }}>
        <Grid item xs={12}>
          {dataOfAllBars.map(({ id, title, horario, status, gradient }) => (
            <Card key={id} sx={{ background: gradient, color: '#FFF', marginBottom: '10px' }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography>{title}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <RadioButtonUncheckedIcon sx={{ background: status === 'Aberto' ? 'green' : 'red', color: status === "Aberto" ? 'green' : 'red', borderRadius: '100%', mr: 1, fontSize: 13 }} />
                  <Typography>{status}</Typography>
                </Box>
              </CardContent>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography>{horario}</Typography>
                  <EastIcon />
                </Box>
              </CardContent>
            </Card>
          ))}
        </Grid>
    </Grid>
  )
}