import React from 'react'
import { IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'

export default function ArrowBackButton() {
  const navigate = useNavigate()

  const handleBackButtonClick = () => {
    navigate(-1)
  }

  return (
    <IconButton
      style={{ position: 'absolute', left: 1, top: '50%', transform: 'translateY(-50%)', color:'#FFF'}} 
      onClick={handleBackButtonClick}
    >
      <ArrowBackIcon sx={{fontSize:24}} />
    </IconButton>
  )
}
