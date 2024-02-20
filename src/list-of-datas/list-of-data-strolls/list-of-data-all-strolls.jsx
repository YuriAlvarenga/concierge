import { calculateStatus } from "../function-calculate-hour-of-status-from-lists/status-utils"



const dataOfAllStrolls = 
    [
        {id: 1, title:"Space Adventure", horario:"09:00h às 21:00h", status: calculateStatus("09:00h às 21:00h"), image: "/strolls-bc/images-from-cards-bc/space-adventure-bc.jpg"},
        { id: 2, title:"Beto Carrero World", horario:"09:00h às 20:00h", status: calculateStatus("09:00h às 20:00h"), image: "/strolls-bc/images-from-cards-bc/beto-carrero-world.jpg"},
        {id: 3, title:"Oceanic Aquarium", horario:"09:00h às 21:00h", status: calculateStatus("09:00h às 21:00h"), image: "/strolls-bc/images-from-cards-bc/aquario-bc.jpg", routePage:"/strolls-oceanic-aquarium-page-bc"},
        { id: 4, title:"Jurassic Park", horario:"09:00h às 20:00h", status: calculateStatus("09:00h às 20:00h"), image: "/strolls-bc/images-from-cards-bc/aventura-jurassica.jpg"},
        { id: 5, title:"Roda Gigante", horario:"09:00h às 21:30h", status: calculateStatus("09:00h às 21:30h"), gradient: ['#ff6888', '#ff6888'], image:"/strolls-bc/images-from-cards-bc/big-weel.jpg"},
        { id: 6, title:"Muve indoor", horario:"09:00h às 20:00h", status: calculateStatus("09:00h às 20:00h"), image:"/strolls-bc/images-from-cards-bc/muve-indoor.png"},
        { id: 7, title:"Hollywood-bowl", horario:"09:00h às 20:00h", status: calculateStatus("09:00h às 20:00h"), image:"/strolls-bc/images-from-cards-bc/hollywood-bowl.jpg"},
    ]
export default dataOfAllStrolls