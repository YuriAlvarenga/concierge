import React from "react"
import TopBar from "../../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../../components/menu/menu-bottom/menu-bottom"
import { Toolbar } from "@mui/material"
import ArrowBackButton from "../../../components/menu/top-bar/arrow-back-button"
import MeetingRoomCard from "../../../components/cards/shared-components/small-cards-components/cards-from-services/meeting-room-card"



export default function MeetingRoomPage(){
    return(
        <>
            <TopBar title={'Sala de Reunião'} leftComponent={<ArrowBackButton/>}/>
            <MeetingRoomCard/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}