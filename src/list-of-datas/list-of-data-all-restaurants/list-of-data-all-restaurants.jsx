import { calculateStatus } from "../function-calculate-hour-of-status-from-lists/status-utils"


const dataOfAllRestaurants = 
    [
        {id: 1, title:"Heróis da Pizza", horario:"19:00h às 23:30h", status: calculateStatus("19:00h às 23:30h"), gradient: ['#1fe4f5, #1fe4f5'], image: "/restaurants/herois-da-pizza-bc.jpg"},
        { id: 2, title:"Distretto Trattoria", horario:"19:00h às 00:00h", status: calculateStatus("19:00h às 00:00h"), gradient: ['#60efbc, #60efbc'], image: "/restaurants/distretto.jpg"},
        { id: 3, title:"Brava-Grill", horario:"09:00h às 20:00h", status: calculateStatus("19:00h às 00:00h"), gradient: ['#b07eb9, #b07eb9'],  image:"/restaurants/brava-grill.jpg"},
        { id: 4, title:"Brava Sushi", horario:"09:00h às 20:00h", status: calculateStatus("19:00h às 00:00h"), gradient: ['#1fe4f5, #1fe4f5'], image: "/restaurants/brava-sushi.png"},
        { id: 5, title:"Pizza Bis", horario:"09:00h às 21:30h", status: calculateStatus("19:00h às 00:00h"), gradient: ['#1fe4f5', '#1fe4f5'],image: "/restaurants/pizza-bis.jpg"},
        {id: 6, title:"Lucca Bistrô", horario:"09:00h às 21:00h", status: calculateStatus("19:00h às 00:00h"), gradient: ['#ff6888, #ff6888'], image:"/restaurants/lucca-bistro.jpg"},
    ]

export default dataOfAllRestaurants