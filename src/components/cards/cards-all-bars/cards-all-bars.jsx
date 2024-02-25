import React from 'react'
import { Box, Grid, Card, CardMedia, Typography, IconButton, Skeleton } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import dataOfAllBars from '../../../list-of-datas/list-of-data-all-bars/list-of-data-all-bars'

export default function CardAllBars({ filteredData }) {
  // Verifica se filteredData está vazio
  const isFilteredDataEmpty = filteredData.length === 0

  return (
    <Grid container spacing={2} style={{ padding: 10, paddingBottom: 0 }}>
      {/* Se filteredData estiver vazio, renderiza dataOfAllBars */}
      {isFilteredDataEmpty ? (
        dataOfAllBars.map(({ id, title: childName, status, image }) => (
          <Grid item xs={12} key={childName}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography>{childName}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mr:1 }}>
                <RadioButtonUncheckedIcon sx={{ background: status === 'Aberto' ? 'green' : 'red', color: status === "Aberto" ? 'green' : 'red', borderRadius: '100%', mr: 1, fontSize: 13 }} />
                <Typography>{status}</Typography>
              </Box>
            </Box>
            
            <Card key={id} sx={{ color: '#FFF', marginBottom: '10px', position:'relative' }}>
              {image ? (
                <>
                  <CardMedia
                    component="img"
                    image={image}
                    alt={childName}
                    style={{ width: '100%', objectFit: 'cover' }}
                  />
                  <IconButton style={{ position: 'absolute', bottom: 0, right: 0, color: '#fff' }}>
                    <ArrowForwardIcon />
                  </IconButton>
                </>
              ): (
                <Skeleton variant="rectangular" height={220} sx={{background: '#cdcdcd'}}/>
              )}       
            </Card>
          </Grid>
        ))
      ) : (
        // Se filteredData não estiver vazio, renderiza filteredData
        filteredData.map(({ id, title: childName, status, image }) => (
          <Grid item xs={12} key={childName}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography>{childName}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mr:1 }}>
                <RadioButtonUncheckedIcon sx={{ background: status === 'Aberto' ? 'green' : 'red', color: status === "Aberto" ? 'green' : 'red', borderRadius: '100%', mr: 1, fontSize: 13 }} />
                <Typography>{status}</Typography>
              </Box>
            </Box>
            
            <Card key={id} sx={{ color: '#FFF', marginBottom: '10px', position:'relative' }}>
              {image ? (
                <>
                  <CardMedia
                    component="img"
                    image={image}
                    alt={childName}
                    style={{ width: '100%', objectFit: 'cover' }}
                  />
                  <IconButton style={{ position: 'absolute', bottom: 0, right: 0, color: '#fff' }}>
                    <ArrowForwardIcon />
                  </IconButton>
                </>
              ): (
                <Skeleton variant="rectangular" height={220} sx={{background: '#cdcdcd'}}/>
              )}       
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  )
}
