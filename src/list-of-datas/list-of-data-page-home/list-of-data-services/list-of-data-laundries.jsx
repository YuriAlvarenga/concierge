import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService'
import { calculateStatus } from '../../function-calculate-hour-of-status-from-lists/status-utils'


const dataOfLoundries = 
    [
        {id: 1, title: 'Lavanderia Dimensão', status: calculateStatus("09:00h às 22:00h"), icon: <MedicationLiquidIcon sx={{color:'#fff'}} />,  gradient: 'linear-gradient(to bottom, #ff6888 60%, transparent 50%)',  image:"/loundries/loundry-5asec.jpg"},
        { id: 2, title: 'Lavanderia 5asec', status: calculateStatus("09:00h às 21:00h"), icon: <LocalLaundryServiceIcon sx={{color:'#fff'}}/>, gradient: 'linear-gradient(to bottom, #1fe4f5 60%, transparent 50%)',  image:"/loundries/loundry-5asec.jpg"},
    ]
   

export default dataOfLoundries