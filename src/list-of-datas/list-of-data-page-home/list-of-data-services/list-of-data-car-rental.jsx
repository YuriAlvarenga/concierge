import { calculateStatus } from "../../function-calculate-hour-of-status-from-lists/status-utils"

const dataOfCarRental = 
    [
        {id: 1, title:"Localiza Locadora de Veículos", horario:"09:00h às 21:00h", status: calculateStatus("09:00h às 21:00h"), image: "/car-rental/localiza-bc.jpg"},
        { id: 2, title:"Movidas Locadora de Veículos", horario:"09:00h às 20:00h", status: calculateStatus("09:00h às 21:00h"), image: "/car-rental/movidas-bc.jpg"},
        { id: 3, title:"Unidas Locadora de Veículos", horario:"09:00h às 21:30h", status: calculateStatus("09:00h às 21:00h"), gradient: ['#ff6888', '#ff6888'], image:"/car-rental/unidas-bc.jpg"},

    ]
export default dataOfCarRental