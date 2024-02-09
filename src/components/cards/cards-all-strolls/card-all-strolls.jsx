import React from 'react'
import {Box, Grid, Card, CardContent, Typography } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import EastIcon from '@mui/icons-material/East'
import dataOfAllStrolls from '../../../list-of-datas/list-of-data-all-strolls/list-of-data-all-strolls'

export default function CardAllStrolls() {
  return (
    <Grid container spacing={2} style={{ padding: 10, paddingBottom: 0 }}>
        <Grid item xs={12}>
          {dataOfAllStrolls.map(({ id, title: childName, horario, status, gradient: childGradient }) => (
            <Card key={id} sx={{ background: `radial-gradient(${childGradient})`, color: '#FFF', marginBottom: '10px' }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography>{childName}</Typography>
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