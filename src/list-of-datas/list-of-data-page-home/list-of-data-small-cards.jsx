import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService'
import CarRentalIcon from '@mui/icons-material/CarRental'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'

const dataOfSmallCards = 
    [
        {id: 1, title: 'Farmácias', icon: <MedicationLiquidIcon sx={{color:'#fff'}} />,  gradient: 'linear-gradient(to bottom, #ff6888 60%, #FFF 50%)', route:"/pharmacy"},
        { id: 2, title: 'Lavanderias', icon: <LocalLaundryServiceIcon sx={{color:'#fff'}}/>, gradient: 'linear-gradient(to bottom, #1fe4f5 60%, #FFF 50%)', route:"/laundries"},
        { id: 3, title: 'Locadoras', icon: <CarRentalIcon sx={{color:'#fff'}}/>, gradient: 'linear-gradient(to bottom, #60efbc 60%, #FFF 50%)', route:"/car-rental-agency"},
        { id: 4, title: 'Translados', icon: <AirportShuttleIcon sx={{color:'#fff'}}/>, gradient: 'linear-gradient(to bottom, #b07eb9 60%, #FFF 50%)', route:"/shuttle-services" },
    ]
   

export default dataOfSmallCards