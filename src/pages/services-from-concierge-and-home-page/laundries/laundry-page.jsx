import React from "react"
import TopBar from "../../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../../components/menu/menu-bottom/menu-bottom"
import { Toolbar } from "@mui/material"
import LaundryCard from "../../../components/cards/concierge-cards/cards-from-services/loundries-bc"
import ArrowBackButton from "../../../components/menu/top-bar/arrow-back-button"




export default function LaundryPage(){
    return(
        <>
            <TopBar title={'Lavanderias'} leftComponent={<ArrowBackButton/>}/>
            <Toolbar/>
                <LaundryCard/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}