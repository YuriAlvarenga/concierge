import React from "react"
import { Typography, Grid, Card, CardContent, Box } from "@mui/material"

export default function AboutUsDistretto() {


  return (
    <Grid item xs={12}>
      <Typography variant="h6" sx={{ m:1}}>
        Sobre nós
      </Typography>
      <Card sx={{ m: 2, borderRadius: 2 }}>
        <CardContent sx={{ background: '#ff6888', color: "#Fff", display: 'flex', m: 0, position: 'relative' }}>
          <Typography sx={{ fontSize: 14, textAlign: 'justify' }} component="div">
            "Bem-vindo ao nosso refúgio pitoresco, onde cada momento é uma celebração do amor, da culinária italiana autêntica e da atmosfera acolhedora. Em nosso canto do mundo, encontramos a combinação perfeita entre romance e gastronomia, oferecendo uma experiência única para os amantes da boa comida e da intimidade."
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
