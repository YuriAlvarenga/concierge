import React from "react"
import { Box, Typography, Link } from "@mui/material"
import { useNavigate } from 'react-router-dom'


export default function SeeAll({route}){ //vindo da página hotel-page como props

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(route)
      }

    return(
        <Box sx={{display:'flex', justifyContent:'flex-end', m:2}}>
            <Typography onClick={handleClick} component={Link} href="#" underline="hover">
                Ver todos 
            </Typography>
        </Box>
    )
}