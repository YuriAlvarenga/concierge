import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import { Toolbar } from "@mui/material"
import WifiCard from "../../components/cards/hotel-card/wi-fi-card"
import SmallCard from "../../components/cards/shared-components/small-cards-components/small-card-from-services"
import Title from "../../components/cards/shared-components/titles/title"
import ServicesFromHotelCard from "../../components/cards/hotel-card/cards-services-from-hotel"
import ImageCardFromHotel from "../../components/cards/hotel-card/image-card-from-hotel"
import HourCard from "../../components/cards/hotel-card/hour-card-hotel"
import ButtonTranslate from "../../components/menu/top-bar/button-translate"
import SocialMedia from "../../components/cards/shared-components/card-social-media/social-media"



export default function HotelPage(){
    return(
        <>
            <TopBar title={'Ibis Criciúma'} rightComponent={<ButtonTranslate/>}/>
                <ImageCardFromHotel/>
                <SmallCard/>
                <WifiCard/>
                <HourCard/>
                <Title title={"Serviços"}/>
                <SocialMedia 
                    instagramUrl={"https://www.instagram.com/ibiscriciuma/"}
                    facebookUrl={"https://www.facebook.com/hotelibiscriciuma/"}
                />
                <ServicesFromHotelCard/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}