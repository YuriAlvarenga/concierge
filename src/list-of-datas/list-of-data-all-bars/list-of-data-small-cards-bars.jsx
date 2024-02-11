
import WbTwilightIcon from '@mui/icons-material/WbTwilight'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar, faMicrophone, faUserGroup } from '@fortawesome/free-solid-svg-icons'


const dataOfSmallCardsFromBars = 
    [
        {id: 1, title: 'Ao vivo',icon:<FontAwesomeIcon icon={faUserGroup} />,  gradient: ' #1fe4f5'},
        { id: 2, title: 'Aberto agora', icon: <MusicNoteIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #60efbc, #60efbc)'},
        { id: 3, title: 'Sertanejo', icon: <MusicNoteIcon sx={{color:'#FFF'}}/>, gradient: 'linear-gradient(to bottom, #ff6888, #ff6888)' },
        { id: 4, title: 'Hip-Hop', icon: <FontAwesomeIcon icon={faMicrophone}/>, gradient: 'linear-gradient(to bottom, #b07eb9, #b07eb9)' },
        { id: 5, title: 'Brasilidade', icon: <MusicNoteIcon sx={{color:'#FFA500'}}/>, gradient: 'linear-gradient(to bottom, green 50%, #FFA500)' },
        { id: 6, title: 'Rock', icon: <FontAwesomeIcon  icon={faGuitar} />, gradient: 'linear-gradient(to bottom, #FFF 60%, #AAAAAA)' },
        { id: 7, title: 'Sunset', icon: <WbTwilightIcon sx={{color:'#FFD700'}}/>, gradient: 'linear-gradient(to bottom, #FFA500 60%, #1fe4f5 )'},  
        { id: 8, title: 'Eletrônica', icon: <MusicNoteIcon sx={{color:'#00000'}}/>, gradient: 'linear-gradient(to bottom, #FF69B4, #b07eb9 55%, #1fe4f5 )' },
    ]
   

export default dataOfSmallCardsFromBars