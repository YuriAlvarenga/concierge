import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService'
import CarRentalIcon from '@mui/icons-material/CarRental'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'

const dataOfSmallCardsFromRestaurants = 
    [
        {id: 1, title: 'Pizzarias', icon: <MedicationLiquidIcon sx={{color:'#fff'}} />,  gradient: ' #ff6888'},
        { id: 2, title: 'Oriental', icon: <LocalLaundryServiceIcon sx={{color:'#fff'}}/>, gradient: 'linear-gradient(to bottom, #1fe4f5, #1fe4f5 )'},
        { id: 3, title: 'Frutos do Mar', icon: <CarRentalIcon sx={{color:'#fff'}}/>, gradient: 'linear-gradient(to bottom, #60efbc, #60efbc)'},
        { id: 4, title: 'Churrascarias', icon: <AirportShuttleIcon sx={{color:'#fff'}}/>, gradient: 'linear-gradient(to bottom, #b07eb9, #b07eb9)' },
    ]
   

export default dataOfSmallCardsFromRestaurants