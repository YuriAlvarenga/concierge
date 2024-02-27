import { Typography } from "@mui/material"
import React from "react"
import { useTranslation } from 'react-i18next'



export default function Title({title, index}){ 
    const { t } = useTranslation()
    const isWhite = index === 1
    return(
        <Typography variant="h6" sx={{ml: 1, mt: 2, pt:2, color: isWhite ? '#FFF' : 'inherit'}}>
            {t(title)}
        </Typography>
    )
}
