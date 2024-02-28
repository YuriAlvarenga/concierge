import React, { createContext, useContext, useState, useEffect } from "react"
import { hotels } from "../list-of-datas/list-of-data-hotel-page/list-of-hotels"
import { useParams } from "react-router-dom"

export const HotelContext = createContext();

export const HotelProvider = ({ children }) => {
  const [selectedHotel, setSelectedHotel] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    // Verificar se há um ID na URL
    if (id) {
      // Encontrar o hotel com base no ID da URL
      const foundHotel = hotels.find((hotel) => hotel.id === parseInt(id))
      // Definir o hotel selecionado com base no ID da URL
      setSelectedHotel(foundHotel)
      // Armazenar o ID no localStorage
      localStorage.setItem("selectedHotelId", id)
    }
  }, [id])

  // Verificar se o hotel selecionado não foi definido e há um ID armazenado no localStorage
  useEffect(() => {
    if (!selectedHotel) {
      const storedHotelId = localStorage.getItem("selectedHotelId")
      if (storedHotelId) {
        // Encontrar o hotel com base no ID armazenado no localStorage
        const foundHotel = hotels.find(
          (hotel) => hotel.id === parseInt(storedHotelId)
        )
        // Definir o hotel selecionado com base no ID armazenado no localStorage
        setSelectedHotel(foundHotel)
      }
    }
  }, [selectedHotel])

  return (
    <HotelContext.Provider value={{ selectedHotel }}>
      {children}
    </HotelContext.Provider>
  )
}
