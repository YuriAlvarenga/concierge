import { Typography } from "@mui/material"
import React from "react"

export default function Title({title, index}){ 
    const isWhite = index === 1
    return(
        <Typography sx={{ml: 1, mt: 3, pt:2, color: isWhite ? '#FFF' : 'inherit'}}>
            {title}
        </Typography>
    )
}
