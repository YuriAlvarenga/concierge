import React from 'react'
import {Box, Grid, Card, CardContent, Typography } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import EastIcon from '@mui/icons-material/East'
import dataOfSimpleCard from '../../../list-of-datas/list-of-data-page-home/list-of-data-card-from-home'
import SeeAll from '../../titles/seeAll'

export default function CardComponent() {
  return (
    <Grid container spacing={2} style={{ padding: 10, paddingBottom: 0 }}>
      {dataOfSimpleCard.map(({ name, children, route }) => (
        <Grid item xs={12} key={name}>
          <Typography sx={{fontSize:16, mb:1, mt:2}}>{name}</Typography>
          {children.map(({ id, title: childName, horario, status }) => (
            <Card key={id} sx={{marginBottom: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'  }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{fontSize:18}}>{childName}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <RadioButtonUncheckedIcon sx={{ background: status === 'Aberto' ? 'green' : 'red', color: status === "Aberto" ? 'green' : 'red', borderRadius: '100%', mr: 1, fontSize: 13 }} />
                  <Typography color="text.secondary">{status}</Typography>
                </Box>
              </CardContent>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography color="text.secondary">{horario}</Typography>
                  <EastIcon />
                </Box>
              </CardContent>
            </Card>
          ))}
          <SeeAll route={route}/>
        </Grid>
      ))}
    </Grid>
  )
}