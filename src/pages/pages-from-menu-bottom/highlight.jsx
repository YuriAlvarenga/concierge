import React from 'react'
import { Box, Grid, Card, CardMedia, Typography, IconButton, Toolbar } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import MenuBottomNavigation from '../../components/menu/menu-bottom/menu-bottom'
import TopBar from '../../components/menu/top-bar/top-bar'
import ButtonTranslate from '../../components/menu/top-bar/button-translate'



export default function Highlight() {

  return (
    <>
        <TopBar title={"Destaques"} rightComponent={<ButtonTranslate/>}/>
        <Toolbar/>
        <Grid container spacing={2} style={{ padding: 10, paddingBottom: 15, marginTop: 0}}>
            <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography>Stand de Vendas</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                <Typography>Aberto agora</Typography>
                </Box>
            </Box>

            <Card sx={{  color: '#FFF', marginBottom: '10px', position: 'relative' }}>
                <>
                    <CardMedia
                    component="img"
                    image="/sponsors/embraed.png"
                    alt="embraed"
                    style={{ width: '100%', maxHeight: '220px', objectFit: 'cover' }}
                    />
                    <IconButton style={{ position: 'absolute', bottom: 0, right: 0, color: '#fff' }}>
                    <ArrowForwardIcon />
                    </IconButton>
                </>
            </Card>
            </Grid>
        </Grid>
        <Toolbar/>
        <MenuBottomNavigation/>
    </>
  )
}
