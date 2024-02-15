import { calculateStatus } from "../function-calculate-hour-of-status-from-lists/status-utils"



const dataOfAllStrolls = 
    [
        {id: 1, title:"Aquário", horario:"09:00h às 21:00h", status: calculateStatus("09:00h às 21:40h"), image: "/strolls-bc/aquario-bc.jpg"},
        { id: 2, title:"Jurassic Park", horario:"09:00h às 20:00h", status: calculateStatus("09:00h às 21:00h"), image: "/strolls-bc/aventura-jurassica.jpg"},
        { id: 3, title:"Roda Gigante", horario:"09:00h às 21:30h", status: calculateStatus("09:00h às 21:00h"), gradient: ['#ff6888', '#ff6888'], image:"/strolls-bc/big-weel.jpg"},
        { id: 4, title:"Beto Carrero World", horario:"09:00h às 20:00h", status: calculateStatus("09:00h às 21:00h"), image: "/strolls-bc/beto-carrero-world.jpg"},
        { id: 5, title:"Muve indoor", horario:"09:00h às 20:00h", status: calculateStatus("09:00h às 21:00h"), image:"/strolls-bc/muve-indoor.png"},
    ]
export default dataOfAllStrolls