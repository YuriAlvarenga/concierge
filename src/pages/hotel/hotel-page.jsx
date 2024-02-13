import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import { Toolbar } from "@mui/material"
import HotelCard from "../../components/cards/hotel-card/hotel-card"
import SmallCard from "../../components/cards/concierge-cards/small-card-from-home"
import Title from "../../components/titles/title"
import ServicesFromHotelCard from "../../components/cards/hotel-card/cards-services-from-hotel"



export default function HotelPage(){
    return(
        <>
            <TopBar title={'Hotel Itália'}/>
            <Toolbar/>
                <HotelCard/>
                <Title title={"Serviços"}/>
                <ServicesFromHotelCard/>
                <SmallCard/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}