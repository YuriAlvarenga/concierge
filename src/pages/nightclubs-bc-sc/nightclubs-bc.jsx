import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import { Toolbar } from "@mui/material"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import CardAllNightclubs from "../../components/cards/cards-all-nightclubs/cards-all-nightclubs"



export default function NightClubs(){
    return(
        <>
            <TopBar title={"Baladas"}/>
            <Toolbar/>
            <CardAllNightclubs/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}