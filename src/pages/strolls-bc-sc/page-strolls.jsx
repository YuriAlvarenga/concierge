import React from 'react'
import {Grid, Card, CardMedia } from '@mui/material'
import dataOfPageStrolls from '../../list-of-datas/list-of-data-strolls/list-of-data-from-page-strolls'
import MenuBottomNavigation from '../../components/menu/menu-bottom/menu-bottom'


export default function PageStrolls() {

  return (
    <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {dataOfPageStrolls.map(({id, image})=>(
                    <Card key={id}> 
                        <CardMedia
                            component="img"
                            alt={`Imagem ${id}`}
                            image={image} 
                            sx={{ height: 260, objectFit: 'fill' }}
                        />
                    </Card>
                ))}
            </Grid>
        </Grid>
        <MenuBottomNavigation/>
    </>
  )
}