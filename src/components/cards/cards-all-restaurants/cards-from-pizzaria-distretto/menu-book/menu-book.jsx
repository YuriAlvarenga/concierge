import React from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { Box, Grid, Typography } from '@mui/material'


const menus = [
    {id:1, title: 'Brasil', icon:<MenuBookIcon sx={{fontSize:35}}/>},
    {id:2, title: 'Spanish', icon:<MenuBookIcon sx={{fontSize:35}}/>},
    {id:3, title: 'English', icon:<MenuBookIcon sx={{fontSize:35}}/>},
]


export default function MenuBook(){
    return(
        <Grid item xs={12} sx={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
            {menus.map((item) => (
                <Box key={item.id} sx={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                    <>{item.icon}</>
                    <Typography variant="body2" align="center">{item.title}</Typography>
                </Box>
            ))}
        </Grid>
    )
}