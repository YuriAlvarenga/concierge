import { calculateStatus } from "../function-calculate-hour-of-status-from-lists/status-utils"



const dataOfAllBars = 
    [
        {id: 1, title:"PG Surf, Skate e Diversão", horario:"11:00h às 04:00h", status: calculateStatus("19:00h às 04:00h"), gradient: ['#1fe4f5, #1fe4f5'], image: "/bars/pg-skate-diversao.jpg"},
        { id: 2, title:"Shed Bar", horario:"22:00h às 05:00h", status: calculateStatus("22:00h às 05:00h"), gradient: ['#60efbc, #60efbc'], image: "/bars/shed-bar.jpg"},
        { id: 3, title:"The Grand", horario:"22:00h às 05:00h", status: calculateStatus("22:00h às 05:00h"), gradient: ['#60efbc', '#60efbc'], image:"/bars/the-grand.jpg"},
        {id: 4, title:"Édem Praia Brava", horario:"15:00h às 23:00h", status: calculateStatus("15:00h às 23:00h"), gradient: ['#b07eb9, #b07eb9'], image: "/bars/pg-skate-diversao.jpg"},
        { id: 5, title:"Taj Bar", horario:"19:00h às 00:00h", status: calculateStatus("19:00h às 00:00h"), gradient: ['#1fe4f5, #1fe4f5'], image: "/bars/taj-bar.jpg"},
        { id: 6, title:"Hike", horario:"15:00h às 22:00h", status: calculateStatus("15:00h às 22:00h"), gradient: ['#b07eb9, #b07eb9'],  image:"/bars/the-grand.jpg"},
        { id: 7, title:"Amaitê", horario:"15:00h às 22:30h", status: calculateStatus("15:00h às 22:00h"), gradient: ['#1fe4f5', '#1fe4f5'],image: "/bars/shed-bar.jpg"},
        {id: 8, title:"Tribus Bar", horario:"19:00h às 03:00h", status: calculateStatus("19:00h às 03:00h"), gradient: ['#ff6888, #ff6888'], image:"/bars/tribus-bar.jpg"},
    ]
export default dataOfAllBars