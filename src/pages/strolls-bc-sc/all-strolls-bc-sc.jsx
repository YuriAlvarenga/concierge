import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import { Toolbar } from "@mui/material"
import CardAllStrolls from "../../components/cards/strolls/cards-all-strolls/card-all-strolls"
import ButtonTranslate from "../../components/menu/top-bar/button-translate"



export default function Strolls(){
    return(
        <>
            <TopBar title={'Passeios'} rightComponent={<ButtonTranslate color="#FFF"/>}/>
            <Toolbar/>
            <CardAllStrolls/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}