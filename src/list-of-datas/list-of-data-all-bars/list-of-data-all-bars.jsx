import { calculateStatus } from "../function-calculate-hour-of-status-from-lists/status-utils"



const dataOfAllBars = 
   [

    { id: 1, title:"Taj Bar", horario:"19:00h às 00:00h", status: calculateStatus("19:00h às 00:00h"), gradient: ['#555555', '#000000'], image: "/nightclubs/taj-bar.png", tag: ["aberto agora", "ao vivo"]},
    { id: 2, title:"Shed Bar", horario:"19:00h às 00:00h", status: calculateStatus("19:00h às 00:00h"), gradient: ['#555555', '#000000'], image: "/nightclubs/shed-bar.png"},
    { id: 3, title:"Warung Club", horario:"19:00h às 23:30h", status: calculateStatus("19:00h às 05:30h"), gradient: ['#FFA500', '#FF8C00'], image: "/nightclubs/warung-beach-club.png" },
    { id: 4, title:"Surreal Park", horario:"19:00h às 23:30h", status: calculateStatus("19:00h às 05:30h"), gradient: ['#FFA500', '#FF8C00'] , image: "/nightclubs/surreal-park-bc.png"},
    { id: 5, title:"Hike Club", horario:"19:00h às 23:30h", status: calculateStatus("15:00h às 22:00h"), gradient:['#2E8B57', '#2E8B57'], image: "/nightclubs/hike-praia-brava.png"},
    { id: 6, title:"Édem Praia Brava", horario:"19:00h às 23:30h", status: calculateStatus("15:00h às 23:30h"), gradient: ['#FFA500', '#FF8C00'], image: "/nightclubs/edem-praia-brava.png" },
]
export default dataOfAllBars