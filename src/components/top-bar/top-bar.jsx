import React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

export default function TopBar() {
  return (
    <AppBar position="fixed" sx={{height:25, background:'#000', color:'#fff',}}>
        <Typography style={{ margin: 'auto', fontSize:14 }}>
            Concierge Virtual
        </Typography>
    </AppBar>
  )
}
