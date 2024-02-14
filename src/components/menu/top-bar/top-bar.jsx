import React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

export default function TopBar({title}) { //vindo de home.jsx
  return (
    <AppBar sx={{height:25, background:'#000', color:'#fff', m:0, p:0}}>
        <Typography style={{ margin: 'auto', fontSize:14 }}>
            {title}
        </Typography>
    </AppBar>
  )
}
