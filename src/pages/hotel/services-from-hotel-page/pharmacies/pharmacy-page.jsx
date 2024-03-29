import React from "react"
import TopBar from "../../../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../../../components/menu/menu-bottom/menu-bottom"
import { Toolbar } from "@mui/material"
import PharmacyCard from "../../../../components/cards/shared-components/small-cards-components/cards-from-services/pharmacy-card"
import ArrowBackButton from "../../../../components/menu/top-bar/arrow-back-button"



export default function PharmacyPage(){
    return(
        <>
            <TopBar title={'Farmácias'} leftComponent={<ArrowBackButton/>}/>
            <Toolbar/>
                <PharmacyCard/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}