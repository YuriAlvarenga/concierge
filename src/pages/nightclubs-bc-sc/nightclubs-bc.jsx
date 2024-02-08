import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import { Toolbar } from "@mui/material"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"



export default function NightClubs(){
    return(
        <>
            <TopBar title={"Baladas"}/>
            <Toolbar/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}