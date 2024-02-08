import React from "react"
import { Box, Typography, Link } from "@mui/material"



export default function SeeAll(){
    return(
        <Box sx={{display:'flex', justifyContent:'flex-end', m:2}}>
            <Typography component={Link} href="#" underline="hover">
                Ver todos 
            </Typography>
        </Box>
    )
}