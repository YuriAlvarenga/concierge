import React from 'react'
import {Grid, Card, CardMedia} from '@mui/material'
import dataOfPageStrolls from '../../../../list-of-datas/list-of-data-strolls/oceanic-aquarium-bc/list-of-data-from-page-strolls'


export default function ImageCardFromPageStrolls() {
  return (  
    <Grid container spacing={2}>
        <Grid item xs={12}>
            {dataOfPageStrolls.map(({id, image})=>(
                <Card key={id} sx={{m:1}}> 
                    <CardMedia
                        component="img"
                        alt={`Imagem ${id}`}
                        image={image} 
                        sx={{  objectFit: 'fill' }}
                    />
                </Card>
            ))}
        </Grid>
    </Grid>
  )
}