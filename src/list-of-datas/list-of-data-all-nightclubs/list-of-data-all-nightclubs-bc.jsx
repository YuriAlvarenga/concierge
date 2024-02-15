import { calculateStatus } from "../function-calculate-hour-of-status-from-lists/status-utils"



const dataOfAllNightClubs = [

    { id: 1, title:"Taj Bar", horario:"19:00h às 00:00h", status: calculateStatus("19:00h às 00:00h"), gradient: ['#555555', '#000000'], image: "/nightclubs/taj-bar.jpg"},
    { id: 2, title:"Shed Bar", horario:"19:00h às 00:00h", status: calculateStatus("19:00h às 00:00h"), gradient: ['#555555', '#000000'], image: "/nightclubs/shed-bar.jpg"},
    { id: 3, title:"Green Valley", horario:"19:00h às 23:30h", status: calculateStatus("19:00h às 23:30h"), gradient:['#2E8B57', '#2E8B57'], image: "/nightclubs/green-valley.jpg"},
    { id: 4, title:"Aimée Praia Brava", horario:"19:00h às 00:00h", status: calculateStatus("19:00h às 03:00h"), gradient: ['#555555', '#000000'], image: "/nightclubs/aimee.jpg"},
    { id: 5, title:"Warung Club", horario:"19:00h às 23:30h", status: calculateStatus("19:00h às 05:30h"), gradient: ['#FFA500', '#FF8C00'], image: "/nightclubs/warung-beach-club.jpg" },
    { id: 6, title:"Surreal Park", horario:"19:00h às 23:30h", status: calculateStatus("19:00h às 05:30h"), gradient: ['#FFA500', '#FF8C00'] , image: "/nightclubs/surreal-park.jpg"},
    { id: 7, title:"The Grand", horario:"19:00h às 23:30h", status: calculateStatus("19:00h às 04:30h"), gradient: ['#FFA500', '#FF8C00'], image: "/nightclubs/the-grand.jpg" },
    { id: 8, title:"Hike Club", horario:"19:00h às 23:30h", status: calculateStatus("15:00h às 22:00h"), gradient:['#2E8B57', '#2E8B57'], image: "/nightclubs/hike-praia-brava.jpg"},
    { id: 9, title:"Amaitê Praia Brava", horario:"19:00h às 23:30h", status: calculateStatus("15:00h às 23:30h"), gradient: ['#FFA500', '#FF8C00'], image: "/nightclubs/amaite-praia-brava.png" },
]

export default dataOfAllNightClubs