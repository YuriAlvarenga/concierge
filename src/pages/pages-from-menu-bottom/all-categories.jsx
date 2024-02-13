import { Typography, Grid, Card, CardContent, Toolbar } from "@mui/material"
import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import allCategories from "../../list-of-datas/list-of-data-categories/list-of-data-all-categories"
import { useNavigate } from "react-router-dom"

export default function Categories(){

    const navigate = useNavigate()

    return(
        <>
            <TopBar title={"Categorias"}/>
            <Toolbar/>
            {allCategories.map(({id, categorie, gradient, route})=>(
                <Grid container spacing={2} style={{ padding: 10 }} key={id} onClick={()=>navigate(route)}>
                    <Grid item xs={12}>
                        <Card sx={{background: gradient, color: '#FFF', display:'flex',alignItems:'center', justifyContent:'center' }}>
                            <CardContent>
                                <Typography sx={{fontSize:16}} component="div">
                                    {categorie}
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