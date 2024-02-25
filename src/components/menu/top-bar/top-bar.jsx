import React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

export default function TopBar({title, leftComponent, rightComponent}) {
  return (
    <AppBar sx={{height:25, background:'#031926', color:'#f4e9cd', m:0, p:0}}>
        <Typography style={{ margin: 'auto', fontSize:14 }}>
            {title}
            {leftComponent}
            {rightComponent}
        </Typography>
    </AppBar>
  )
}
