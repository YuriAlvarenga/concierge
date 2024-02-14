
import WbTwilightIcon from '@mui/icons-material/WbTwilight'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar, faMicrophone } from '@fortawesome/free-solid-svg-icons'


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
        {id: 1, title: 'Aberto agora', icon:<img src={iconOpen} alt="Aberto agora" style={smallerIconStyle} />,  gradient: ' #000000'},
        { id: 2, title: 'Ao vivo', icon:<img src={iconAoVivo} alt="Ao vivo" style={smallerIconStyle}/>, gradient: 'linear-gradient(to bottom, #000000, #000000)'},
        { id: 3, title: 'Sertanejo', icon:<img src={iconSertanejo} alt="Sertanejo" style={smallerIconStyle}/>, gradient: 'linear-gradient(to bottom, #000000, #000000)' },
        { id: 4, title: 'Hip-Hop', icon:<img src={iconHiphop} alt="hip-hop" style={smallerIconStyle}/>, gradient: 'linear-gradient(to bottom, #000000, #000000)' },
        { id: 5, title: 'Brasilidade', icon:<img src={iconBrasilidade} alt="brasilidade" style={smallerIconStyle}/>, gradient: 'linear-gradient(to bottom, #000000 50%, #000000)' },
        { id: 6, title: 'Rock', icon:<img src={iconRockAndRoll} alt="rock-and-roll" style={smallerIconStyle}/>, gradient: 'linear-gradient(to bottom, #FFF 60%, #AAAAAA)' },
        { id: 7, title: 'Sunset', icon: <WbTwilightIcon sx={{color:'#FFD700'}}/>, gradient: 'linear-gradient(to bottom, #FFA500 60%, #1fe4f5 )'},  
        { id: 8, title: 'Eletrônica', icon:<img src={iconEltronica} alt="eletronica" style={smallerIconStyle}/>, gradient: 'linear-gradient(to bottom, #000000, #000000 55%, #1fe4f5 )' },
    ]
   

export default dataOfSmallCardsFromBars