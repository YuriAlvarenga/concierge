import React, { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
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
import { hotels } from "../../list-of-datas/list-of-data-hotel-page/list-of-hotels"

export default function HotelPage(){

    const { id } = useParams()
    const hotel = hotels.find((hotel) => hotel.id === parseInt(id))
    console.log(hotel.id)
  

    return(
        <>
                {hotel && (
                    <TopBar title={hotel.name} rightComponent={<ButtonTranslate/>}/>
                )}
            
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
            <MenuBottomNavigation hotelId={hotel.id}/>
        </>
    )
}