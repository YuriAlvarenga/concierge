
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import RiceBowlIcon from '@mui/icons-material/RiceBowl'
import SetMealIcon from '@mui/icons-material/SetMeal'
import KebabDiningIcon from '@mui/icons-material/KebabDining'


const iconPizza = "/icons-from-restaurants/icon-pizza.png"
const iconOriental = "/icons-from-restaurants/icon-oriental.png"
const iconFrutosDoMar = "/icons-from-restaurants/icon-frutos-do-mar.png"
const iconChurrascaria = "/icons-from-restaurants/icon-churrascaria.png"


const smallerIconStyle = {
    width: '40px',
    height: '40px',
}

const dataOfSmallCardsFromRestaurants = 
    [
        {id: 1, title: 'Pizzarias', icon:<img src={iconPizza} alt="icon pizza" style={smallerIconStyle} />,  gradient: ' #ff6888'},
        { id: 2, title: 'Oriental', icon:<img src={iconOriental} alt="icon oriental" style={smallerIconStyle} />, gradient: 'linear-gradient(to bottom, #1fe4f5, #1fe4f5 )'},
        { id: 3, title: 'Frutos do Mar', icon:<img src={iconFrutosDoMar} alt="icon frutos do mar" style={smallerIconStyle} />, gradient: 'linear-gradient(to bottom, #60efbc, #60efbc)'},
        { id: 4, title: 'Churrascarias', icon:<img src={iconChurrascaria} alt="icon churrascaria" style={smallerIconStyle} />, gradient: 'linear-gradient(to bottom, #b07eb9, #b07eb9)' },
    ]
   

export default dataOfSmallCardsFromRestaurants