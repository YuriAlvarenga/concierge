import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import { Toolbar } from "@mui/material"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import CardAllRestaurants from "../../components/cards/cards-all-restaurants/cards-all-restaurants"
import SmallCardFromRestaurants from "../../components/cards/cards-all-restaurants/small-cards-from-restaurants"
import Story from "../../components/cards/stories-card/stories-card"



export default function Restaurantes(){
    return(
        <>
            <TopBar title={"Restaurantes"}/>
            <Toolbar/>
            <Story stories={"Destaques"}/>
            <CardAllRestaurants/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}