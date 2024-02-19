import React from 'react'
import { Grid, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

export default function SocialMedia({instagramUrl, facebookUrl}){//parametros vindo de page strolls, hotel page.

    const handleInstagramClick = () => {
        window.open(instagramUrl, '_blank')
    }
    const handleFacebookClick = () => {
        window.open(facebookUrl, '_blank')
    }
  return (
    <Grid container spacing={2} style={{marginTop:4, display:'flex', alignItems:'right', justifyContent:'rigth'}}>
        <Grid item xs={12} style={{marginTop:0, display:'flex', alignItems:'right', justifyContent:'flex-end'}}>
            <IconButton sx={{fontSize:14}} component="div" onClick={handleInstagramClick}>
                <InstagramIcon sx={{color:'#C13584'}}/>
            </IconButton>
            <IconButton sx={{fontSize:14}} component="div" onClick={handleFacebookClick}>
                <FacebookIcon sx={{color:'#1877F2'}} />
            </IconButton>
        </Grid>
    </Grid>
    
  )
}