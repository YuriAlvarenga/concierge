import React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

export default function TopBar({title, leftComponent, rightComponent}) {

  const { t } = useTranslation()
  return (
    <AppBar sx={{position:'fixed',ml:3,  background:'#19647e', color:'#FFF',  p:1, boxShadow:'none'}}>
        <Typography style={{ margin: 'auto', fontSize:14 }}>
            {t(title)}
            {leftComponent}
            {rightComponent}
        </Typography>
    </AppBar>
  )
}
