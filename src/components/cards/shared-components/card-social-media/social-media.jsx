import React, { useContext, useEffect, useState } from 'react'
import { Grid, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import { HotelContext } from '../../../../context/context'


export default function SocialMedia() {
    const { hotel } = useContext(HotelContext)
    const [loadedHotel, setLoadedHotel] = useState(null)

    useEffect(() => {
        const storedHotel = JSON.parse(localStorage.getItem("selectedHotel"))
        if (storedHotel) {
            setLoadedHotel(storedHotel)
        }
    }, [])

    useEffect(() => {
        if (hotel) {
            setLoadedHotel(hotel)
            localStorage.setItem("selectedHotel", JSON.stringify(hotel))
        }
    }, [hotel])

    const handleInstagramClick = () => {
        if (loadedHotel && loadedHotel.socialMedia && loadedHotel.socialMedia.items) {
            const instagramUrl = loadedHotel.socialMedia.items.find(item => item.instagram)?.instagram
            if (instagramUrl) {
                window.open(instagramUrl, '_blank')
            }
        }
    }

    const handleFacebookClick = () => {
        if (loadedHotel && loadedHotel.socialMedia && loadedHotel.socialMedia.items) {
            const facebookUrl = loadedHotel.socialMedia.items.find(item => item.facebook)?.facebook
            if (facebookUrl) {
                window.open(facebookUrl, '_blank')
            }
        }
    }

    const shouldRenderIcons = loadedHotel && loadedHotel.socialMedia && loadedHotel.socialMedia.items && (
        loadedHotel.socialMedia.items.find(item => item.instagram) || loadedHotel.socialMedia.items.find(item => item.facebook)
    )

    return (
        shouldRenderIcons && (
            <Grid container spacing={2} style={{ display: 'flex', alignItems: 'right', justifyContent: 'right' }}>
                <Grid item xs={12} style={{ marginTop: 0, display: 'flex', alignItems: 'right', justifyContent: 'flex-end', marginRight: 8 }}>
                    {loadedHotel.socialMedia.items.find(item => item.instagram) && (
                        <IconButton component="div" onClick={handleInstagramClick}>
                            <InstagramIcon sx={{ color: '#9dbebb', fontSize: 30 }} />
                        </IconButton>
                    )}

                    {loadedHotel.socialMedia.items.find(item => item.facebook) && (
                        <IconButton sx={{ fontSize: 14 }} component="div" onClick={handleFacebookClick}>
                            <FacebookIcon sx={{ color: '#9dbebb', fontSize: 30 }} />
                        </IconButton>
                    )}

                </Grid>
            </Grid>
        )
    )
}
