import React from "react"

import { Toolbar } from "@mui/material"
import TopBar from "../../../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../../../components/menu/menu-bottom/menu-bottom"
import MinibarCard from '../../../../components/cards/shared-components/small-cards-components/cards-from-services/minibar-card'
import ArrowBackButton from "../../../../components/menu/top-bar/arrow-back-button"


export default function MinibarServicePage(){
    return(
        <>
            <TopBar title={'Frigobar'} leftComponent={<ArrowBackButton/>}/>
            <MinibarCard/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}