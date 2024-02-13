import React from "react"
import TopBar from "../../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../../components/menu/menu-bottom/menu-bottom"
import { Toolbar } from "@mui/material"
import CarRentalCard from "../../../components/cards/concierge-cards/cards-from-services/car-rental-agency"




export default function CarRentalPage(){
    return(
        <>
            <TopBar title={'Locadoras de Veículos'}/>
            <Toolbar/>
                <CarRentalCard/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}