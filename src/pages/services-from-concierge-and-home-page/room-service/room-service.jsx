import React from "react"
import TopBar from "../../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../../components/menu/menu-bottom/menu-bottom"
import { Toolbar } from "@mui/material"
import ArrowBackButton from "../../../components/menu/top-bar/arrow-back-button"
import RoomServiceCard from "../../../components/cards/shared-components/small-cards-components/cards-from-services/room-service"



export default function RoomServicePage(){
    return(
        <>
            <TopBar title={'Room Service'} leftComponent={<ArrowBackButton/>}/>
            <RoomServiceCard/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}