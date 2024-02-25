import React from 'react'
import { Box, Grid, Card, CardContent, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import EastIcon from '@mui/icons-material/East'
import dataOfSimpleCard from '../../../list-of-datas/list-of-data-page-home/list-of-data-card-from-home'
import SeeAll from '../../cards/shared-components/titles/seeAll'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


export default function CardComponent() {
  const navigate = useNavigate();
  const { t } = useTranslation()

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {dataOfSimpleCard.map(({ name, children, route }) => (
        <Grid item xs={12} key={name}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>{t([name])}</Typography>
            <SeeAll route={route} />
          </Box>
          {children.map(({ id, title: childName, horario, status, gradient, routePage }) => (
            <Card
              key={id}
              sx={{
                background: '#1d404c',
                color: '#FFF',
                mb: 2,
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.9)',
                cursor: 'pointer',
              }}
              onClick={() => navigate(routePage)}
            >
              <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h6">{childName}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {status === 'Aberto' ? (
                    <CheckCircleIcon sx={{ color: 'green', fontSize: 17, mr: 1 }} />
                  ) : (
                    <RadioButtonUncheckedIcon sx={{ background:'red', color: 'red', borderRadius: '50%', fontSize: 14, mr: 1 }} />
                  )}
                  <Typography variant="body2" sx={{ color: status === 'Aberto' ? '#FFF' : 'text.secondary' }}>{status}</Typography>
                </Box>
              </CardContent>
              <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ color: '#FFF' }}>{horario}</Typography>
                <EastIcon sx={{ color: '#FFF'  }} />
              </CardContent>
            </Card>
          ))}
        </Grid>
      ))}
    </Grid>
  )
}
