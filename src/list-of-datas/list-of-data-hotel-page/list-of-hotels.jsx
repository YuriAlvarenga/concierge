import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService'
import CarRentalIcon from '@mui/icons-material/CarRental'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import KitchenIcon from '@mui/icons-material/Kitchen'
import RoomServiceIcon from '@mui/icons-material/RoomService'
import GroupsIcon from '@mui/icons-material/Groups'
import DvrIcon from '@mui/icons-material/Dvr'
import AttractionsIcon from '@mui/icons-material/Attractions'
import ThermostatIcon from '@mui/icons-material/Thermostat'





export const hotels = [
  {
    id: 1,
    name: "Hotel Ibis",
    location: "Cidade A",
    services: [
      {
        title: "Farmácias", 
        route: "/pharmacy",
        icon: <MedicationLiquidIcon sx={{color:'#FFF'}} />,
        instances: [
          { name: "Farmácia A", contact: "123-456-7890" },
          { name: "Farmácia B", contact: "987-654-3210" }
        ]
      },
      {
        title: "Lavanderia", 
        route: "/laundries",
        icon: <LocalLaundryServiceIcon sx={{color:'#FFF'}}/>,
        instances: [
          { name: "Lavanderia X", contact: "456-789-0123" },
          { name: "Lavanderia Y", contact: "789-012-3456" }
        ]
      },
      {
        title: "Locadoras", 
        route: "/car-rental-agency",
        icon: <CarRentalIcon sx={{color:'#FFF'}}/>,
        instances: [
          { name: "Localiza", contact: "456-789-0123" },
          { name: "Unidas", contact: "789-012-3456" },
          { name: "Movida", contact: "789-012-3456" }
        ]
      },
      {
        title: "Translados", 
        route: "/shuttle-services",
        icon: <AirportShuttleIcon sx={{color:'#FFF'}}/>,
        instances: [
          { name: "Translado X", contact: "456-789-0123" },
          { name: "Translado Y", contact: "789-012-3456" }
        ]
      },
      {
        title: "Room Service", 
        route: "/room-service",
        icon: <RoomServiceIcon sx={{color:'#FFF'}}/>,
        items: [
          { name: "Refrigerante", price: 5 },
          { name: "Água Mineral", price: 3 },
          { name: "Chocolate", price: 8 }
        ]
      },
      {
        title: "Frigobar", 
        route: "/minibar-service",
        icon: <KitchenIcon sx={{color:'#FFF'}}/>,
        items: [
          { name: "Refrigerante", price: 5 },
          { name: "Água Mineral", price: 3 },
          { name: "Chocolate", price: 8 }
        ]
      },
      {
        title: "Sala de Reuniões", 
        route: "/meeting-room-service",
        icon: <GroupsIcon sx={{color:'#FFF'}}/>,
        instances: [
          { name: "Translado X", contact: "456-789-0123" },
          { name: "Translado Y", contact: "789-012-3456" }
        ]
      },
      {
        title: "Lista de Canais", 
        route: "/meeting-room-service",
        icon: <DvrIcon sx={{color:'#FFF'}}/>,
        instances: [
          { name: "Translado X", contact: "456-789-0123" },
          { name: "Translado Y", contact: "789-012-3456" }
        ]
      },

    ],
    restaurant: {
      name: "Restaurante A",
      items: [
        { name: "Prato A", price: 10 },
        { name: "Prato B", price: 15 },
        { name: "Prato C", price: 20 }
      ]
    }
  },
  {
    id: 2,
    name: "Hotel Itália",
    location: "Cidade B",
    rating: 4.2,
    restaurant: {
      name: "Restaurante B",
      items: [
        { name: "Prato D", price: 12 },
        { name: "Prato E", price: 18 },
        { name: "Prato F", price: 22 }
      ]
    },
    minibar: [
      { name: "Refrigerante", price: 5 },
      { name: "Água Mineral", price: 3 },
      { name: "Salgadinho", price: 7 }
    ]
  },
  {
    id:3 ,
    name: "Hotel Slaviero",
    location: "Cidade C",
    rating: 4.8,
    restaurant: {
      name: "Restaurante C",
      items: [
        { name: "Prato G", price: 14 },
        { name: "Prato H", price: 20 },
        { name: "Prato I", price: 25 }
      ]
    },
    minibar: [
      { name: "Refrigerante", price: 5 },
      { name: "Água Mineral", price: 3 },
      { name: "Biscoito", price: 6 }
    ]
  }
]
