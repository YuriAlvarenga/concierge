
import WbTwilightIcon from '@mui/icons-material/WbTwilight'


const iconAoVivo = "/icons-from-bars/icon-ao-vivo.png"
const iconOpen = "/icons-from-bars/open.png"
const iconSertanejo = "/icons-from-bars/sertanejo.png"
const iconHiphop = "/icons-from-bars/hip-hop.png"
const iconBrasilidade = "/icons-from-bars/brasilidade.png"
const iconRockAndRoll = "/icons-from-bars/rock-and-roll.png"
const iconEltronica = "/icons-from-bars/eletronica.png"


const smallerIconStyle = {
    width: '40px',
    height: '40px',
}

const dataOfSmallCardsFromBars = 
    [
        {id: 1, title: 'Aberto agora', icon:<img src={iconOpen} alt="Aberto agora" style={smallerIconStyle} />,  gradient: 'linear-gradient(to bottom, #60efbc 60%, #AAAAAA)'},
        { id: 2, title: 'Ao vivo', icon:<img src={iconAoVivo} alt="Ao vivo" style={smallerIconStyle}/>, gradient: 'linear-gradient(to bottom, #b07eb9 60%, #AAAAAA)'},
        { id: 3, title: 'Sertanejo', icon:<img src={iconSertanejo} alt="Sertanejo" style={smallerIconStyle}/>, gradient: 'linear-gradient(to bottom, #ff6888 60%, #AAAAAA)' },
        { id: 4, title: 'Hip-Hop', icon:<img src={iconHiphop} alt="hip-hop" style={smallerIconStyle}/>, gradient: 'linear-gradient(to bottom, #1fe4f5 60%, #AAAAAA)' },
        { id: 5, title: 'Brasilidade', icon:<img src={iconBrasilidade} alt="brasilidade" style={smallerIconStyle}/>, gradient: 'linear-gradient(to bottom, #60efbc 60%, #AAAAAA)' },
        { id: 6, title: 'Rock', icon:<img src={iconRockAndRoll} alt="rock-and-roll" style={smallerIconStyle}/>, gradient: 'linear-gradient(to bottom, #b07eb9 60%, #AAAAAA)' },
        { id: 7, title: 'Sunset', icon: <WbTwilightIcon sx={{color:'#FFD700'}}/>, gradient: 'linear-gradient(to bottom, #ff6888 60%, #AAAAAA)'},  
        { id: 8, title: 'Eletrônica', icon:<img src={iconEltronica} alt="eletronica" style={smallerIconStyle}/>,gradient: 'linear-gradient(to bottom, #1fe4f5 60%, #AAAAAA)' },
    ]
   

export default dataOfSmallCardsFromBars