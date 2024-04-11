import React, { useContext } from "react"
import { Fade } from "react-awesome-reveal"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import { Toolbar, Box } from "@mui/material"
import WifiCard from "../../components/cards/hotel-card/wi-fi-card"
import SmallCard from "../../components/cards/shared-components/small-cards-components/small-card-from-services"
import ServicesFromHotelCard from "../../components/cards/hotel-card/cards-services-from-hotel"
import ImageCardFromHotel from "../../components/cards/hotel-card/image-card-from-hotel"
import HourCard from "../../components/cards/hotel-card/hour-card-hotel"
import SocialMedia from "../../components/cards/shared-components/card-social-media/social-media"
import { HotelContext } from "../../context/context"

export default function HotelPage() {

    const { hotel } = useContext(HotelContext)

    return (
        <>
            {hotel && (
                <React.Fragment>
                    <ImageCardFromHotel hotelName={hotel.nameHotel} />
                    <Box sx={{ position: "absolute", top: 240, right: 0 }}>
                        <Fade direction="right">
                            <SocialMedia
                                instagramUrl={"https://www.instagram.com/ibiscriciuma/"}
                                facebookUrl={"https://www.facebook.com/hotelibiscriciuma/"}
                            />
                        </Fade>
                    </Box>
                    <SmallCard />
                    <WifiCard />
                    <HourCard />
                    <ServicesFromHotelCard />
                    <Toolbar />
                    <MenuBottomNavigation />
                </React.Fragment>
            )}
        </>
    )
}
