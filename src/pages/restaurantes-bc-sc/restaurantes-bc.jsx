import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import { Toolbar } from "@mui/material"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import CardAllRestaurants from "../../components/cards/cards-all-restaurants/cards-all-restaurants"
import SmallCardFromRestaurants from "../../components/cards/cards-all-restaurants/small-cards-from-restaurants"
import Title from "../../components/titles/title"
import ArrowBackButton from "../../components/menu/top-bar/arrow-back-button"



export default function Restaurantes(){
    return(
        <>
            <TopBar title={"Restaurantes"} leftComponent={<ArrowBackButton/>}/>
            <Title title={"Explorar opções"}/>
            <SmallCardFromRestaurants/>
            <Title title={"Restaurantes"}/>
            <CardAllRestaurants/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}