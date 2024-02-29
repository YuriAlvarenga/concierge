
import React, { createContext, useState, useEffect } from "react"
import { hotels } from "../list-of-datas/list-of-data-hotel-page/list-of-hotels"
import { useLocation } from "react-router-dom"

export const HotelContext = createContext()

export const HotelProvider = ({ children }) => {
    const location = useLocation()
    const pathname = location.pathname
    const id = pathname.substring(1) // Remove a barra inicial para obter apenas o ID

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

  return (
    <HotelContext.Provider value={{ hotel }}>
      {children}
    </HotelContext.Provider>
  )
}
