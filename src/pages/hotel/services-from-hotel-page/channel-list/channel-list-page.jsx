import React from "react"
import { Toolbar } from "@mui/material"

import ChannelListCard from "../../../../components/cards/shared-components/small-cards-components/cards-from-services/channel-list-card"
import TopBar from "../../../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../../../components/menu/menu-bottom/menu-bottom"
import ArrowBackButton from "../../../../components/menu/top-bar/arrow-back-button"



export default function ChannelListPage(){
    return(
        <>
            <TopBar title={'Lista de Canais'} leftComponent={<ArrowBackButton/>}/>
            <ChannelListCard/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}