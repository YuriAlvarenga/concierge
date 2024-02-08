import { Typography } from "@mui/material"
import React from "react"


export default function Title({title}){ //vindo como props de outras páginas que requerem o title (Componente topbar)
    return(
        <Typography sx={{ml: 1, mt:2}}>
            {title}
        </Typography>
    )
}