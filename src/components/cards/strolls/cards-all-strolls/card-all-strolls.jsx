import React from 'react'
import { Box, Grid, Card, CardMedia, Typography, Skeleton, IconButton } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import dataOfAllStrolls from '../../../../list-of-datas/list-of-data-strolls/list-of-data-all-strolls'
import { useNavigate } from 'react-router-dom'

export default function CardAllStrolls() {

  const navigate = useNavigate()

  return (
    <Grid container spacing={2} style={{ padding: 10, paddingBottom: 0 }}>
      {dataOfAllStrolls.map(({ id, title: childName, status, image, routePage }) => (
        <Grid item xs={12} key={childName} onClick={()=>navigate(routePage)}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>{childName}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
              {status === 'Aberto' ? (
                  <CheckCircleIcon sx={{ color: 'green', fontSize: 17, mr: 1 }} />
                  ) : (
                  <RadioButtonUncheckedIcon sx={{ background:'red', color: 'red', borderRadius: '50%', fontSize: 14, mr: 1 }} />
                )}
              <Typography variant="body2" sx={{ color: status === 'Aberto' ? '#000' : 'text.secondary' }}>{status}</Typography>
            </Box>
          </Box>

          <Card key={id} sx={{  color: '#FFF', marginBottom: '10px', position: 'relative' }}>
            {image ? (
              <>
                <CardMedia
                  component="img"
                  image={image}
                  alt={childName}
                  style={{ width: '100%', maxHeight: '220px', objectFit: 'cover' }}
                />
                <IconButton style={{ position: 'absolute', bottom: 0, right: 0, color: '#fff' }}>
                  <ArrowForwardIcon />
                </IconButton>
              </>
            ) : (
              <Skeleton variant="rectangular" height={220} />
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
