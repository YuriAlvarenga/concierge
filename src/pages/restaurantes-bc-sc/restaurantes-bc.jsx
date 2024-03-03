import React, { useState, useEffect } from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import { Toolbar } from "@mui/material"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import CardAllRestaurants from "../../components/cards/cards-all-restaurants/cards-all-restaurants"
import ButtonTranslate from "../../components/menu/top-bar/button-translate"


export default function Restaurantes(){

    const [loadedHotel, setLoadedHotel] = useState(null)

    useEffect(() => {
        const storedHotel = JSON.parse(localStorage.getItem("selectedHotel"))
        if (storedHotel) {
            setLoadedHotel(storedHotel)
        }
    }, [])

    useEffect(() => {
        if (loadedHotel) {
            localStorage.setItem("selectedHotel", JSON.stringify(loadedHotel))
        }
    }, [loadedHotel])


    return(
        <>
            <TopBar title={"Restaurantes"} rightComponent={<ButtonTranslate color="#FFF"/>}/>
            <Toolbar/>
            <CardAllRestaurants/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    );
}
