import React, { useState } from "react"
import LanguageIcon from '@mui/icons-material/Language'
import { IconButton, Menu, MenuItem } from "@mui/material"
import { useTranslation } from 'react-i18next'


export default function ButtonTranslate({color}){
    const [anchorEl, setAnchorEl] = useState(null)
    const { i18n } = useTranslation()
  

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const changeLanguageAndNavigate = (language) => {
        i18n.changeLanguage(language)
        handleClose() // Feche o menu após a mudança de idioma
    }

    return(
        <>
            <IconButton onClick={handleClick} style={{ position: 'absolute', right: 1, top: '50%', transform: 'translateY(-50%)', color: color}} >
                <LanguageIcon sx={{fontSize:25}} />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={() => changeLanguageAndNavigate('pt-BR')}>Português</MenuItem>
                <MenuItem onClick={() => changeLanguageAndNavigate('es')}>Español</MenuItem>
                <MenuItem onClick={() => changeLanguageAndNavigate('en')}>English</MenuItem>
            </Menu>
        </>
    )
}
