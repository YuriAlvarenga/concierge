import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import { Toolbar } from "@mui/material"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import CardAllRestaurants from "../../components/cards/cards-all-restaurants/cards-all-restaurants"
import SmallCardFromRestaurants from "../../components/cards/cards-all-restaurants/small-cards-from-restaurants"
import Title from "../../components/titles/title"



export default function Restaurantes(){
    return(
        <>
            <TopBar title={"Restaurantes"}/>
            <Title title={"Explorar opções"}/>
            <SmallCardFromRestaurants/>
            <CardAllRestaurants/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}