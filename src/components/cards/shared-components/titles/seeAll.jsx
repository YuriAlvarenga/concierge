import React from "react"
import { Box, Typography, Link } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


export default function SeeAll({route}){ //vindo da página hotel-page como props

    const { t } = useTranslation()

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(route)
    }

    return(
        <Box sx={{display:'flex', justifyContent:'flex-end', mt:1.5, mr:1}}>
            <Typography onClick={handleClick} component={Link} href="#" underline="hover">
                {t("Ver todos")} 
            </Typography>
        </Box>
    )
}