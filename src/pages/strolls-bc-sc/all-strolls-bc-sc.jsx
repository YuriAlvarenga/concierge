import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import { Toolbar } from "@mui/material"
import CardAllStrolls from "../../components/cards/strolls/cards-all-strolls/card-all-strolls"
import ArrowBackButton from "../../components/menu/top-bar/arrow-back-button"



export default function Strolls(){
    return(
        <>
            <TopBar title={'Passeios'} leftComponent={<ArrowBackButton/>}/>
            <Toolbar/>
            <CardAllStrolls/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}