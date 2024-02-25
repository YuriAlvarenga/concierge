import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import { Toolbar } from "@mui/material"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import CardAllRestaurants from "../../components/cards/cards-all-restaurants/cards-all-restaurants"
import Title from "../../components/cards/shared-components/titles/title"
import ArrowBackButton from "../../components/menu/top-bar/arrow-back-button"
import SmallCardComponent from "../../components/cards/shared-cards/small-cards-component"
import dataOfSmallCardsFromRestaurants from "../../list-of-datas/list-of-data-all-restaurants/list-of-data-small-card-restaurants"



export default function Restaurantes(){
    return(
        <>
            <TopBar title={"Restaurantes"} leftComponent={<ArrowBackButton/>}/>
            <Title title={"Explorar opções"}/>
            <SmallCardComponent data={dataOfSmallCardsFromRestaurants}/>
            <Title title={"Restaurantes"}/>
            <CardAllRestaurants/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}