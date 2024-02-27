import React from "react"
import TopBar from "../../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../../components/menu/menu-bottom/menu-bottom"
import { Toolbar } from "@mui/material"
import ArrowBackButton from "../../../components/menu/top-bar/arrow-back-button"
import NewService from "../../../components/cards/concierge-cards/cards-from-services/cadastrar-serviço"



export default function MinibarServicePage(){
    return(
        <>
            <TopBar title={'Frigobar'} leftComponent={<ArrowBackButton/>}/>
            <Toolbar/>
                <NewService/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}