import { Toolbar, Typography } from "@mui/material"
import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"


export default function Notifications(){
    return(
        <>
            <TopBar title={"Notificações"}/>
            <Toolbar/>
            <Typography>oi</Typography>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}