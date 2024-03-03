import React from "react"
import TopBar from "../../../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../../../components/menu/menu-bottom/menu-bottom"
import { Toolbar } from "@mui/material"
import ArrowBackButton from "../../../../components/menu/top-bar/arrow-back-button"
import ShuttleCard from "../../../../components/cards/shared-components/small-cards-components/cards-from-services/shuttles-card"



export default function ShuttlePage(){
    return(
        <>
            <TopBar title={'Translados'} leftComponent={<ArrowBackButton/>}/>
           
            <ShuttleCard/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}