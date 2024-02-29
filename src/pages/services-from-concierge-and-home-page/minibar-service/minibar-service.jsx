import React from "react"
import TopBar from "../../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../../components/menu/menu-bottom/menu-bottom"
import { Toolbar } from "@mui/material"
import ArrowBackButton from "../../../components/menu/top-bar/arrow-back-button"
import MinibarCard from "../../../components/cards/shared-components/small-cards-components/cards-from-services/minibar-card"



export default function MinibarServicePage(){
    return(
        <>
            <TopBar title={'Frigobar'} leftComponent={<ArrowBackButton/>}/>
            <Toolbar/>
                <MinibarCard/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}