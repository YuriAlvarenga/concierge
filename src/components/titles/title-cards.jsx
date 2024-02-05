import { Typography } from "@mui/material"
import React from "react"


export default function TitleCards(props){
    return(
        <Typography sx={{mt:4, ml: 1}}>
            {props.title}
        </Typography>
    )
}