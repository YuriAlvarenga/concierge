import React from "react"

import { Box, Toolbar } from "@mui/material"
import MenuBottomNavigation from "../../../components/menu/menu-bottom/menu-bottom"
import TopBar from "../../../components/menu/top-bar/top-bar"
import ImageCardFromPizzariaDistretto from "../../../components/cards/cards-all-restaurants/cards-from-pizzaria-distretto/image-card"
import Title from "../../../components/titles/title"
import MenuBook from "../../../components/cards/cards-all-restaurants/cards-from-pizzaria-distretto/menu-book/menu-book"
import SocialMedia from "../../../components/cards/card-social-media/social-media"
import AboutUsDistretto from "../../../components/cards/cards-all-restaurants/cards-from-pizzaria-distretto/about-us/about-us"
import CardAddressFromPageDistretto from "../../../components/cards/cards-all-restaurants/cards-from-pizzaria-distretto/address-from-page-distretto/card-address-from-page-distretto"
import FixedButton from "../../../components/cards/cards-all-restaurants/cards-from-pizzaria-distretto/button-reservation/button-reservation"






export default function PizzariaDistrettoBC(){
    return(
        <>
            <TopBar title={"Distretto Tratoria"}/>
            <Box style={{ background: '#000', height: 140 }}>
                <SocialMedia 
                    instagramUrl="https://www.instagram.com/distrettobartrattoria/"
                    facebookUrl="https://www.facebook.com/DistrettoDItalia/?locale=pt_BR"/>
                <ImageCardFromPizzariaDistretto/>
            </Box>
            <Box sx={{mt:29}}>
                <Title title={"Menus"} />
                <MenuBook/>
            </Box> 
            <Title title={"Sobre nós"} />
            <AboutUsDistretto/> 
            <CardAddressFromPageDistretto/>
            <FixedButton/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}