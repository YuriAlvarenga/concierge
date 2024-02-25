import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import { Toolbar } from "@mui/material"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import CardAllBars from "../../components/cards/cards-all-bars/cards-all-bars"
import ArrowBackButton from "../../components/menu/top-bar/arrow-back-button"
import SmallCardComponent from "../../components/cards/shared-cards/small-cards-component"
import dataOfSmallCardsFromBars from "../../list-of-datas/list-of-data-all-bars/list-of-data-small-cards-bars"



export default function Bars(){
    return(
        <>
            <TopBar title={"Bares"} leftComponent={<ArrowBackButton/>}/>
            <Toolbar/>
            <SmallCardComponent data={dataOfSmallCardsFromBars}/>
            <CardAllBars/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}