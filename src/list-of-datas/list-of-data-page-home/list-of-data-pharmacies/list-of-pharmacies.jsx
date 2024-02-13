import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService'
import CarRentalIcon from '@mui/icons-material/CarRental'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'

const dataOfPharmacies = 
    [
        {id: 1, title: 'Farmácia Preço Popular', icon: <MedicationLiquidIcon sx={{color:'#fff'}} />,  gradient: 'linear-gradient(to bottom, #ff6888 60%, transparent 50%)', route:"/pharmacy"},
        { id: 2, title: 'Farmácia Panvel', icon: <LocalLaundryServiceIcon sx={{color:'#fff'}}/>, gradient: 'linear-gradient(to bottom, #1fe4f5 60%, transparent 50%)', route:"/pharmacy"},
        { id: 3, title: 'Farmácia Noite e Dia', icon: <CarRentalIcon sx={{color:'#fff'}}/>, gradient: 'linear-gradient(to bottom, #60efbc 60%, transparent 50%)', route:"/pharmacy"},
        { id: 4, title: 'Drogaria Raia', icon: <AirportShuttleIcon sx={{color:'#fff'}}/>, gradient: 'linear-gradient(to bottom, #b07eb9 60%, transparent 50%)', route:"/pharmacy" },
        {id: 5, title: 'Farmácia São João', icon: <MedicationLiquidIcon sx={{color:'#fff'}} />,  gradient: 'linear-gradient(to bottom, #ff6888 60%, transparent 50%)', route:"/pharmacy"},
    ]
   

export default dataOfPharmacies