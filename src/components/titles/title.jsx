import { Typography } from "@mui/material"
import React from "react"


export default function Title(props){
    return(
        <Typography sx={{ml: 1, mt:2}}>
            {props.title}
        </Typography>
    )
}