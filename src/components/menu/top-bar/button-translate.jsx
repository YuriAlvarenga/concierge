import React, { useState, useEffect } from "react"
import TranslateIcon from '@mui/icons-material/Translate';
import { IconButton, Menu, MenuItem } from "@mui/material"
import { useTranslation } from 'react-i18next'


export default function ButtonTranslate({color}){
    const [anchorEl, setAnchorEl] = useState(null)
    const { i18n } = useTranslation()
  
    useEffect(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage')
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage)
        }
    }, [i18n.language])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const changeLanguageAndNavigate = (language) => {
        i18n.changeLanguage(language)
        localStorage.setItem('selectedLanguage', language)
        handleClose() // Feche o menu após a mudança de idioma
    }

    return(
        <>
            <IconButton onClick={handleClick} style={{ position: 'absolute', right: 1, top: '50%', transform: 'translateY(-50%)', color: color}} >
                <TranslateIcon sx={{fontSize:25}} />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                style={{ zIndex: 9999,  marginTop: 25}} 
            >
                <MenuItem onClick={() => changeLanguageAndNavigate('pt-BR')}>Português</MenuItem>
                <MenuItem onClick={() => changeLanguageAndNavigate('es')}>Español</MenuItem>
                <MenuItem onClick={() => changeLanguageAndNavigate('en')}>English</MenuItem>
            </Menu>
        </>
    )
}
