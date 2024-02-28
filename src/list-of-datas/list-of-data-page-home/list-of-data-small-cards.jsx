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


const dataOfSmallCards = 
    [
        {id: 1, title: 'Farmácias', icon: <MedicationLiquidIcon sx={{color:'#FFF'}} />,  gradient: 'linear-gradient(to bottom, #28afb0 60%, #FFF 50%)', route:"/pharmacy"},
        { id: 2, title: 'Lavanderias', icon: <LocalLaundryServiceIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #28afb0 60%, #FFF 50%)', route:"/laundries"},
        { id: 3, title: 'Locadoras', icon: <CarRentalIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #28afb0 60%, #FFF 50%)', route:"/car-rental-agency"},
        { id: 4, title: 'Translados', icon: <AirportShuttleIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #28afb0 60%, #FFF 50%)', route:"/shuttle-services" },
        { id: 5, title: 'Room Service', icon: <RoomServiceIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #28afb0 60%, #FFF 50%)', route:"/room-service" },
        { id: 6, title: 'Restaurantes', icon: <RestaurantIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #28afb0 60%, #FFF 50%)', route:"/restaurantesbc" },
        { id: 7, title: 'Frigobar', icon: <KitchenIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #28afb0 60%, #FFF 50%)', route:"/minibar-service" },
        { id: 8, title: 'Sala de Reunião', icon: <GroupsIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #28afb0 60%, #FFF 50%)', route:"/meeting-room-service" },
        { id: 9, title: 'Lista de Canais', icon: <DvrIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #28afb0 60%, #FFF 50%)', route:"/meeting-room-service" },
        { id: 10, title: 'Tempo', icon: <ThermostatIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #28afb0 60%, #FFF 50%)', route:"/meeting-room-service" },
        { id: 11, title: 'Passeios', icon: <AttractionsIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #28afb0 60%, #FFF 50%)', route:"/meeting-room-service" },
    ]
   

export default dataOfSmallCards