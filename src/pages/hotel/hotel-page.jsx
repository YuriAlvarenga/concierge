import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import { Toolbar } from "@mui/material"
import WifiCard from "../../components/cards/hotel-card/wi-fi-card"
import SmallCard from "../../components/cards/concierge-cards/small-card-from-home"
import Title from "../../components/titles/title"
import ServicesFromHotelCard from "../../components/cards/hotel-card/cards-services-from-hotel"
import ImageCardFromHotel from "../../components/cards/hotel-card/image-card-from-hotel"
import HourCard from "../../components/cards/hotel-card/hour-card-hotel"
import Story from "../../components/cards/stories-card/stories-card"



export default function HotelPage(){
    return(
        <>
            <TopBar title={'Hotel Itália'}/>
            <Toolbar/>
                <ImageCardFromHotel/>
                <Story stories={"Aproveite agora"}/>
                <WifiCard/>
                <HourCard/>
                <Title title={"Serviços"}/>
                <ServicesFromHotelCard/>
                <SmallCard/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}