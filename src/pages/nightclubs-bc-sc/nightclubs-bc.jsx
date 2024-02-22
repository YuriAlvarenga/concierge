import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import { Toolbar } from "@mui/material"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import CardAllNightclubs from "../../components/cards/cards-all-nightclubs/cards-all-nightclubs"
import ArrowBackButton from "../../components/menu/top-bar/arrow-back-button"



export default function NightClubs(){
    return(
        <>
            <TopBar title={"Baladas"} leftComponent={<ArrowBackButton/>}/>
            <Toolbar/>
            <CardAllNightclubs/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}