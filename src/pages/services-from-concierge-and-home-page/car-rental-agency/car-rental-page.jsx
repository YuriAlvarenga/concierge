import React from "react"
import TopBar from "../../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../../components/menu/menu-bottom/menu-bottom"
import { Toolbar } from "@mui/material"
import CarRentalCard from "../../../components/cards/concierge-cards/cards-from-services/car-rental-agency"
import ArrowBackButton from "../../../components/menu/top-bar/arrow-back-button"




export default function CarRentalPage(){
    return(
        <>
            <TopBar title={'Locadoras de Veículos'} leftComponent={<ArrowBackButton/>}/>
            <Toolbar/>
                <CarRentalCard/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}