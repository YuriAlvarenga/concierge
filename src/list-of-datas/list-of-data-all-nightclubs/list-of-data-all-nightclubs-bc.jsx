import { calculateStatus } from "../function-calculate-hour-of-status-from-lists/status-utils"



const dataOfAllNightClubs = [

    { id: 1, title:"Taj Bar", horario:"19:00h às 00:00h", status: calculateStatus("19:00h às 00:00h"), gradient: ['#555555', '#000000'], image: "/nightclubs/taj-bar.png"},
    { id: 2, title:"Shed Bar", horario:"19:00h às 00:00h", status: calculateStatus("19:00h às 00:00h"), gradient: ['#555555', '#000000'], image: "/nightclubs/shed-bar.png"},
    { id: 3, title:"Green Valley", horario:"19:00h às 23:30h", status: calculateStatus("23:00h às 06:30h"), gradient:['#2E8B57', '#2E8B57'], video: "/nightclubs/green-valley.mp4"},
    { id: 4, title:"Warung Club", horario:"19:00h às 23:30h", status: calculateStatus("19:00h às 05:30h"), gradient: ['#FFA500', '#FF8C00'], image: "/nightclubs/warung-beach-club.png" },
    { id: 5, title:"Surreal Park", horario:"19:00h às 23:30h", status: calculateStatus("19:00h às 05:30h"), gradient: ['#FFA500', '#FF8C00'] , image: "/nightclubs/surreal-park-bc.png"},
    { id: 6, title:"Hike Club", horario:"19:00h às 23:30h", status: calculateStatus("15:00h às 22:00h"), gradient:['#2E8B57', '#2E8B57'], image: "/nightclubs/hike-praia-brava.png"},
    { id: 7, title:"Édem Praia Brava", horario:"19:00h às 23:30h", status: calculateStatus("15:00h às 23:30h"), gradient: ['#FFA500', '#FF8C00'], image: "/nightclubs/edem-praia-brava.png" },
]

export default dataOfAllNightClubs