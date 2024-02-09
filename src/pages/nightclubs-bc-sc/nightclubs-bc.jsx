import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import { Toolbar } from "@mui/material"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import CardAllBarsAndNightclubs from "../../components/cards/cards-all-bars/cards-all-bars"



export default function NightClubs(){
    return(
        <>
            <TopBar title={"Baladas"}/>
            <Toolbar/>
            <CardAllBarsAndNightclubs/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}