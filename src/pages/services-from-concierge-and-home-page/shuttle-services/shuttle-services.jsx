import React from "react"
import TopBar from "../../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../../components/menu/menu-bottom/menu-bottom"
import { Toolbar } from "@mui/material"
import PharmacyCard from "../../../components/cards/concierge-cards/cards-from-services/pharmacy-card"



export default function ShuttlePage(){
    return(
        <>
            <TopBar title={'Translados'}/>
            <Toolbar/>
                <PharmacyCard/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}