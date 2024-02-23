import React from "react"

import { Box, Toolbar } from "@mui/material"
import MenuBottomNavigation from "../../../components/menu/menu-bottom/menu-bottom"
import TopBar from "../../../components/menu/top-bar/top-bar"
import ImageCardFromPizzariaDistretto from "../../../components/cards/cards-all-restaurants/cards-from-pizzaria-distretto/image-card"
import Title from "../../../components/cards/shared-components/titles/title"
import MenuBook from "../../../components/cards/cards-all-restaurants/cards-from-pizzaria-distretto/menu-book/menu-book"
import SocialMedia from "../../../components/cards/shared-components/card-social-media/social-media"
import AboutUsDistretto from "../../../components/cards/cards-all-restaurants/cards-from-pizzaria-distretto/about-us/about-us"
import CardAddressNavigation from "../../../components/cards/shared-components/card-address-navigation/card-address-navigation"
import FixedButton from "../../../components/cards/cards-all-restaurants/cards-from-pizzaria-distretto/button-reservation/button-reservation"
import ArrowBackButton from "../../../components/menu/top-bar/arrow-back-button"




export default function PizzariaDistrettoBC(){
    return(
        <>
            <TopBar title={"Distretto Tratoria"} leftComponent={<ArrowBackButton/>}/>
            <ImageCardFromPizzariaDistretto/>
            <Box sx={{position:'absolute', top: 250, right: 0}}>
                <SocialMedia 
                        instagramUrl={"https://www.instagram.com/distrettobartrattoria/"} 
                        facebookUrl={"https://www.facebook.com/DistrettoDItalia/?locale=pt_BR"}
                /> 
            </Box>
            <Title title={"Menus"}/>
            <MenuBook/>
            <Title title={"Sobre nós"} />
            <AboutUsDistretto/> 
            <CardAddressNavigation endereco = {"3ª Avenida, 1112 - Centro, Balneário-SC"}/>
            <FixedButton/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}