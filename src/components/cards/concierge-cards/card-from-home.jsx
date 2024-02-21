import React from 'react'
import {Box, Grid, Card, CardContent, Typography } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import EastIcon from '@mui/icons-material/East'
import dataOfSimpleCard from '../../../list-of-datas/list-of-data-page-home/list-of-data-card-from-home'
import SeeAll from '../../titles/seeAll'
import { useNavigate } from 'react-router-dom'

export default function CardComponent() {
  const navigate = useNavigate()
  return (
    <Grid container spacing={2} style={{ padding: 15, paddingBottom: 0 }}>
      {dataOfSimpleCard.map(({ name, children, route }) => (
        <Grid item xs={12} key={name}>
          <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography sx={{fontSize:18, mb:1, mt:2}}>{name}</Typography>
            <SeeAll route={route}/>
          </Box>
          {children.map(({ id, title: childName, horario, status, gradient, routePage }) => (
            <Card key={id} sx={{ marginBottom: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.9)'  }} onClick={()=>navigate(routePage)}> 
              <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{fontSize:18}}>{childName}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <RadioButtonUncheckedIcon sx={{ background: status === 'Aberto' ? 'green' : 'red', color: status === "Aberto" ? 'green' : 'red', borderRadius: '100%', mr: 1, fontSize: 13 }} />
                  <Typography sx={{ color: status === 'Aberto' ? '#000' : 'text.secondary'}}>{status}</Typography>
                </Box>
              </CardContent>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography sx={{color:"text.secondary"}}>{horario}</Typography>
                  <EastIcon />
                </Box>
              </CardContent>
            </Card>
          ))}
          
        </Grid>
      ))}
    </Grid>
  )
}