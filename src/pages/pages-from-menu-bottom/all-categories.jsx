import { Typography, Grid, Card, CardContent, Toolbar } from "@mui/material"
import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"



export default function Categories(){

    const allCategories = [
        { id:1, categorie: "Baladas" },
        { id:2, categorie: "Bares" },
        { id:3, categorie: "Cafeterias" },
        { id:4, categorie: "Farmácias"},
        { id:5, categorie: "Passeios"},
        { id:6, categorie: "Restaurantes" },
        { id:7, categorie: "Soverterias" },
        { id:8, categorie: "Translados"},
      ]
      const categoryColors = [
          'radial-gradient( #f588d8, #c0a3e5)',
          'radial-gradient( #FFA500, #FF8C00)',
          'radial-gradient( #AAAAAA, #000000)',
          'radial-gradient( #ff6888, #ff6888)',
          'radial-gradient( #1fe4f5, #3fbafe)',
          'radial-gradient( #00FFFF, #008B8B)',
          'radial-gradient(#60efbc, #58d5c9)',
          'radial-gradient( #76b2fe, #b69efe)',
    ]

    return(
        <>
            <TopBar title={"Categorias"}/>
            <Toolbar/>
            {allCategories.map((name,id)=>(
                <Grid container spacing={2} style={{ padding: 10 }} key={id}>
                    <Grid item xs={12}>
                        <Card sx={{background: categoryColors[id], color: '#FFF', display:'flex',alignItems:'center', justifyContent:'center' }}>
                            <CardContent>
                                <Typography sx={{fontSize:16}} component="div">
                                    {name.categorie}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            ))}
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}