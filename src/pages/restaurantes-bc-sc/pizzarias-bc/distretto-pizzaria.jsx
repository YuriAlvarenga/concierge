import React from "react"

import { Box, Toolbar, Typography } from "@mui/material"
import MenuBottomNavigation from "../../../components/menu/menu-bottom/menu-bottom"
import TopBar from "../../../components/menu/top-bar/top-bar"
import ImageCardFromPizzariaDistretto from "../../../components/cards/cards-all-restaurants/cards-from-pizzaria-distretto/image-card"
import SocialMedia from "../../../components/cards/shared-components/card-social-media/social-media"
import AboutUsDistretto from "../../../components/cards/cards-all-restaurants/cards-from-pizzaria-distretto/about-us/about-us"
import CardAddressNavigation from "../../../components/cards/shared-components/card-address-navigation/card-address-navigation"
import ReservationButton from "../../../components/cards/cards-all-restaurants/cards-from-pizzaria-distretto/button-reservation/button-reservation"
import ArrowBackButton from "../../../components/menu/top-bar/arrow-back-button"




export default function PizzariaDistrettoBC(){
    return(
        <React.Fragment>
            <TopBar title={"Distretto Tratoria"} leftComponent={<ArrowBackButton/>}/>
            <ImageCardFromPizzariaDistretto/>
            <Typography variant="h6" sx={{m:1}}>Distretto Tratoria</Typography>
            <SocialMedia 
                instagramUrl={"https://www.instagram.com/distrettobartrattoria/"} 
                facebookUrl={"https://www.facebook.com/DistrettoDItalia/?locale=pt_BR"}
            /> 
            <CardAddressNavigation endereco = {"3ª Av., 1112 - Centro, Balneário-SC"}/>
            <AboutUsDistretto/> 
            <ReservationButton/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </React.Fragment>
    )
}