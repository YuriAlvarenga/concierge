import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService'
import CarRentalIcon from '@mui/icons-material/CarRental'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'

const dataOfSmallCards = 
    [
        {id: 1, title: 'Farmácias', icon: <MedicationLiquidIcon sx={{color:'#FFF'}} />,  gradient: 'linear-gradient(to bottom, #031926 60%, #FFF 50%)', route:"/pharmacy"},
        { id: 2, title: 'Lavanderias', icon: <LocalLaundryServiceIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #031926 60%, #FFF 50%)', route:"/laundries"},
        { id: 3, title: 'Locadoras', icon: <CarRentalIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #031926 60%, #FFF 50%)', route:"/car-rental-agency"},
        { id: 4, title: 'Translados', icon: <AirportShuttleIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #031926 60%, #FFF 50%)', route:"/shuttle-services" },
    ]
   

export default dataOfSmallCards