import React, { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import { Toolbar, Box } from "@mui/material"
import WifiCard from "../../components/cards/hotel-card/wi-fi-card"
import SmallCard from "../../components/cards/shared-components/small-cards-components/small-card-from-services"
import Title from "../../components/cards/shared-components/titles/title"
import ServicesFromHotelCard from "../../components/cards/hotel-card/cards-services-from-hotel"
import ImageCardFromHotel from "../../components/cards/hotel-card/image-card-from-hotel"
import HourCard from "../../components/cards/hotel-card/hour-card-hotel"
import SocialMedia from "../../components/cards/shared-components/card-social-media/social-media"
import { hotels } from "../../list-of-datas/list-of-data-hotel-page/list-of-hotels"

export default function HotelPage(){
    const { id } = useParams()
    const [hotel, setHotel] = useState(null)

    useEffect(() => {
        // Encontrar o hotel com o ID correspondente
        const selectedHotel = hotels.find((hotel) => hotel.id === parseInt(id))
    
        // Verificar se o hotel foi encontrado
        if (selectedHotel) {
          setHotel(selectedHotel)
          localStorage.setItem("selectedHotelId", id)
        }
      }, [id])

    useEffect(() => {
        const storedHotelId = localStorage.getItem("selectedHotelId")
        if (storedHotelId && storedHotelId !== id) {
          // Se o ID do hotel recuperado do localStorage for diferente do ID na URL,
          // redirecionar para a página com o ID correto
          window.location.href = `/${storedHotelId}`
        }
    }, [id])


    return(
        <>
          {hotel && (
                <>
                    <ImageCardFromHotel hotelName={hotel.name} />
                    <Box sx={{ position: "absolute", top: 240, right: 0 }}>
                        <SocialMedia
                            instagramUrl={"https://www.instagram.com/ibiscriciuma/"}
                            facebookUrl={"https://www.facebook.com/hotelibiscriciuma/"}
                        />
                    </Box>
                    {hotel.services && (
                        <>
                            <Title title={"Serviços"} />
                            <SmallCard hotelSmallServices={hotel.services} />
                        </>
                    )}
                    <WifiCard />
                    <HourCard />
                    <Title title={"Serviços"} />
                    <ServicesFromHotelCard />
                    <Toolbar />
                    <MenuBottomNavigation hotelId={hotel.id} />
                </>
            )}
        </>
    )
}
