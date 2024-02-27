import React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

export default function TopBar({title, leftComponent, rightComponent}) {
  return (
    <AppBar sx={{position:'fixed',ml:3,  background:'#19647e', color:'#FFF',  p:1, boxShadow:'none'}}>
        <Typography style={{ margin: 'auto', fontSize:14 }}>
            {title}
            {leftComponent}
            {rightComponent}
        </Typography>
    </AppBar>
  )
}
