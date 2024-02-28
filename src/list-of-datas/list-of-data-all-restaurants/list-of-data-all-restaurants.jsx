import { calculateStatus } from "../function-calculate-hour-of-status-from-lists/status-utils"


const dataOfAllRestaurants = 
    [
        { id: 1, title:"Brava Sushi", horario:"09:00h às 20:00h", status: calculateStatus("19:00h às 00:00h"), gradient: ['#1fe4f5, #1fe4f5'], image: "/restaurants/sushi-bc.jpg"},
        {id: 2, title:"Heróis da Pizza", horario:"19:00h às 23:30h", status: calculateStatus("11:00h às 23:30h"), gradient: ['#1fe4f5, #1fe4f5'], image: "/restaurants/herois-da-pizza-bc.jpg", tag: ["aberto agora"]},
        { id: 3, title:"Distretto Trattoria", horario:"19:00h às 00:00h", status: calculateStatus("19:00h às 00:00h"), gradient: ['#60efbc, #60efbc'], image: "/restaurants/distretto.jpg", routePage: '/distretto-tratoria'},
        { id: 4, title:"Brava-Grill", horario:"09:00h às 20:00h", status: calculateStatus("19:00h às 00:00h"), gradient: ['#b07eb9, #b07eb9'],  image:"/restaurants/brava-grill.jpg"},
        
       
    ]

export default dataOfAllRestaurants