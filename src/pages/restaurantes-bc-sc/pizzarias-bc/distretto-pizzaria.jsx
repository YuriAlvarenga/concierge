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
import ArrowBackButton from "../../../components/menu/top-bar/arrow-back-button"




export default function PizzariaDistrettoBC(){
    return(
        <>
            <TopBar title={"Distretto Tratoria"} leftComponent={<ArrowBackButton/>}/>
            <Box style={{ background: '#000', height: 160 }}>
                <ImageCardFromPizzariaDistretto/>
            </Box>
            <Box sx={{mt:12}}>
                <SocialMedia 
                    instagramUrl={"https://www.instagram.com/distrettobartrattoria/"} 
                    facebookUrl={"https://www.facebook.com/DistrettoDItalia/?locale=pt_BR"}
                /> 
            </Box> 
                <Title title={"Menus"}/>
                <MenuBook/>
            <Title title={"Sobre nós"} />
            <AboutUsDistretto/> 
            <CardAddressFromPageDistretto/>
            <FixedButton/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}