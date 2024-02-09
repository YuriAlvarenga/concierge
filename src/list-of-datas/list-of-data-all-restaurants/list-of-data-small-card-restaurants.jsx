
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import RiceBowlIcon from '@mui/icons-material/RiceBowl'
import SetMealIcon from '@mui/icons-material/SetMeal'
import KebabDiningIcon from '@mui/icons-material/KebabDining'


const dataOfSmallCardsFromRestaurants = 
    [
        {id: 1, title: 'Pizzarias', icon: <LocalPizzaIcon sx={{color:'#b07eb9'}} />,  gradient: ' #ff6888'},
        { id: 2, title: 'Oriental', icon: <RiceBowlIcon sx={{color:'#ff6888'}}/>, gradient: 'linear-gradient(to bottom, #1fe4f5, #1fe4f5 )'},
        { id: 3, title: 'Frutos do Mar', icon: <SetMealIcon sx={{color:'#b07eb9'}}/>, gradient: 'linear-gradient(to bottom, #60efbc, #60efbc)'},
        { id: 4, title: 'Churrascarias', icon: <KebabDiningIcon sx={{color:'#ff6888'}}/>, gradient: 'linear-gradient(to bottom, #b07eb9, #b07eb9)' },
    ]
   

export default dataOfSmallCardsFromRestaurants