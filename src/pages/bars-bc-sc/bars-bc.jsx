import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import { Toolbar } from "@mui/material"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import CardAllBars from "../../components/cards/cards-all-bars/cards-all-bars"
import SmallCardFromBars from "../../components/cards/cards-all-bars/small-cards-from-bars"



export default function Bars(){
    return(
        <>
            <TopBar title={"Bares"}/>
            <Toolbar/>
            <SmallCardFromBars/>
            <CardAllBars/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}