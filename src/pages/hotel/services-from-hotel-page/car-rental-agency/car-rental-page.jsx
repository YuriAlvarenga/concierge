import React from "react"
import TopBar from "../../../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../../../components/menu/menu-bottom/menu-bottom"
import { Toolbar } from "@mui/material"

import ArrowBackButton from "../../../../components/menu/top-bar/arrow-back-button"
import CarRentalCard from "../../../../components/cards/shared-components/small-cards-components/cards-from-services/car-rental-agency"




export default function CarRentalPage(){
    return(
        <>
            <TopBar title={'Locadoras de Veículos'} leftComponent={<ArrowBackButton/>}/>
            <CarRentalCard/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}