import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService'
import CarRentalIcon from '@mui/icons-material/CarRental'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import KitchenIcon from '@mui/icons-material/Kitchen'
import RoomServiceIcon from '@mui/icons-material/RoomService'
import GroupsIcon from '@mui/icons-material/Groups'

const dataOfSmallCards = 
    [
        {id: 1, title: 'Farmácias', icon: <MedicationLiquidIcon sx={{color:'#FFF'}} />,  gradient: 'linear-gradient(to bottom, #1d404c 60%, #FFF 50%)', route:"/pharmacy"},
        { id: 2, title: 'Lavanderias', icon: <LocalLaundryServiceIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #1d404c 60%, #FFF 50%)', route:"/laundries"},
        { id: 3, title: 'Locadoras', icon: <CarRentalIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #1d404c 60%, #FFF 50%)', route:"/car-rental-agency"},
        { id: 4, title: 'Translados', icon: <AirportShuttleIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #1d404c 60%, #FFF 50%)', route:"/shuttle-services" },
        { id: 5, title: 'Room Service', icon: <RoomServiceIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #1d404c 60%, #FFF 50%)', route:"/room-service" },
        { id: 6, title: 'Restaurantes', icon: <RestaurantIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #1d404c 60%, #FFF 50%)', route:"/restaurantesbc" },
        { id: 7, title: 'Frigobar', icon: <KitchenIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #1d404c 60%, #FFF 50%)', route:"/minibar-service" },
        { id: 8, title: 'Sala de Reunião', icon: <GroupsIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #1d404c 60%, #FFF 50%)', route:"/meeting-room-service" },
    ]
   

export default dataOfSmallCards