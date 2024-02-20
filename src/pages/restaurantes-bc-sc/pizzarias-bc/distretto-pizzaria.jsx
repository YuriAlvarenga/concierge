import React from "react"

import { Box, Toolbar } from "@mui/material"
import MenuBottomNavigation from "../../../components/menu/menu-bottom/menu-bottom"
import TopBar from "../../../components/menu/top-bar/top-bar"
import ImageCardFromPizzariaDistretto from "../../../components/cards/cards-all-restaurants/cards-from-pizzaria-distretto/image-card"
import Title from "../../../components/titles/title"






export default function PizzariaDistrettoBC(){
    return(
        <>
            <TopBar title={"Distretto Tratoria"}/>
            <Box style={{ background: '#000', height: 140 }}>
                <ImageCardFromPizzariaDistretto/>
            </Box>
            <Box sx={{mt:23}}>
                <Title title={"Menus"} />
            </Box>  
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}