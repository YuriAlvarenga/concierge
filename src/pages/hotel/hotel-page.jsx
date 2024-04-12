import React, { useContext, useEffect } from "react"
import { Box } from "@mui/material"
import WifiCard from "../../components/cards/hotel-card/wi-fi-card"
import SmallCard from "../../components/cards/shared-components/small-cards-components/small-card-from-services"
import ServicesFromHotelCard from "../../components/cards/hotel-card/cards-services-from-hotel"
import ImageCardFromHotel from "../../components/cards/hotel-card/image-card-from-hotel"
import HourCard from "../../components/cards/hotel-card/hour-card-hotel"
import SocialMedia from "../../components/cards/shared-components/card-social-media/social-media"
import { HotelContext } from "../../context/context"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"

export default function HotelPage(){

    const { hotel } = useContext(HotelContext)

    useEffect(() => {
        // Renderizar apenas quando o hotel estiver disponível
    }, [hotel])

    return (
        <Box sx={{ overflowX: 'hidden' }}>
            {hotel && (
                <>
                    <ImageCardFromHotel hotelName={hotel.nameHotel} />
                    <Box sx={{ position: "absolute", top: 240, right: 0 }}>
                        <SocialMedia
                            instagramUrl={"https://www.instagram.com/ibiscriciuma/"}
                            facebookUrl={"https://www.facebook.com/hotelibiscriciuma/"}
                        />
                    </Box>
                    <SmallCard/>
                    <WifiCard />
                    <HourCard />
                    <ServicesFromHotelCard />
                    <MenuBottomNavigation/>
                </>
            )}
        </Box>
    )
}
