import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService'
import CarRentalIcon from '@mui/icons-material/CarRental'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
import { calculateStatus } from '../../function-calculate-hour-of-status-from-lists/status-utils'

const dataOfPharmacies = 
    [
        {id: 1, title: 'Farmácia Preço Popular', status: calculateStatus("00:00 às 23:59h"), icon: <MedicationLiquidIcon sx={{color:'#fff'}} />,  gradient: 'linear-gradient(to bottom, #ff6888 60%, transparent 50%)', route:"/pharmacy"},
        { id: 2, title: 'Farmácia Panvel', status: calculateStatus("09:00h às 21:00h"), icon: <LocalLaundryServiceIcon sx={{color:'#fff'}}/>, gradient: 'linear-gradient(to bottom, #1fe4f5 60%, transparent 50%)', route:"/pharmacy"},
        { id: 3, title: 'Farmácia Noite e Dia', status: calculateStatus("09:00h às 21:00h"), icon: <CarRentalIcon sx={{color:'#fff'}}/>, gradient: 'linear-gradient(to bottom, #60efbc 60%, transparent 50%)', route:"/pharmacy"},
        { id: 4, title: 'Drogaria Raia', status: calculateStatus("09:00h às 21:00h"), icon: <AirportShuttleIcon sx={{color:'#fff'}}/>, gradient: 'linear-gradient(to bottom, #b07eb9 60%, transparent 50%)', route:"/pharmacy" },
        {id: 5, title: 'Farmácia São João', status: calculateStatus("09:00h às 21:00h"), icon: <MedicationLiquidIcon sx={{color:'#fff'}} />,  gradient: 'linear-gradient(to bottom, #ff6888 60%, transparent 50%)', route:"/pharmacy"},
    ]
   

export default dataOfPharmacies