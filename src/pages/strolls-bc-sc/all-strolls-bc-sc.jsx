import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import { Toolbar } from "@mui/material"
import CardAllStrolls from "../../components/cards/cards-all-strolls/card-all-strolls"



export default function Strolls(){
    return(
        <>
            <TopBar title={'Passeios'}/>
            <Toolbar/>
            <CardAllStrolls/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}