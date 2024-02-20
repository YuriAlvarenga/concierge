import { calculateStatus } from "../function-calculate-hour-of-status-from-lists/status-utils"


//Dados referentes ao componente Simple Card
const dataOfSimpleCard = [
    {
      name: 'Passeios',
      route: '/strollsbc',
      children: [
        {id: 1, title:"Oceanic Aquarium", horario:"09:00h às 21:00h", status: calculateStatus("09:00h às 21:00h"), gradient: ['#1fe4f5', '#1fe4f5'], routePage: '/strolls-oceanic-aquarium-page-bc'}, 
        { id: 2, title:"Aventura Jurássica", horario:"09:00h às 20:00h", status: calculateStatus("09:00h às 21:00h"), gradient: ['#60efbc', '#60efbc']},
        { id: 3, title:"Big Weel", horario:"09:00h às 21:30h", status: calculateStatus("09:00h às 21:30h"), gradient: ['#b07eb9', '#b07eb9']},
      ],
    },

    {
      name: 'Restaurantes',
      route: '/restaurantesbc',
      children: [
        { id: 4, title:"Distretto", horario:"19:00h às 00:00h", status: calculateStatus("19:00h às 00:00h"), gradient: ['#1fe4f5', '#1fe4f5'], routePage: '/distretto-tratoria'},
        { id: 5, title:"Guacamole", horario:"19:00h às 23:30h", status: calculateStatus("19:00h às 23:30h"), gradient:['#60efbc', '#60efbc']},
        { id: 6, title:"Brava Sushi", horario:"19:00h às 23:30h", status: calculateStatus("19:00h às 23:30h"), gradient: ['#b07eb9', '#b07eb9'] },
      ],
    },
    {
      name: 'Bares',
      route: '/barsbc',
      children: [
        { id: 7, title:"Infarta Madalena", horario:"19:00h às 01:00h", status: calculateStatus("19:00h às 01:00h"), gradient: ['#1fe4f5', '#1fe4f5']},
        { id: 8, title:"Sossega Bar", horario:"19:00h às 02:30h", status: calculateStatus("19:00h às 02:30h"),gradient: ['#60efbc', '#60efbc'] },
        { id: 9, title: 'Taj Bar', horario:"19:00h às 02:30h", status: calculateStatus("19:00h às 02:30h"), gradient: ['#b07eb9', '#b07eb9']},
      ],
    },
    {
      name: 'Baladas',
      route: '/nightclubsbc',
      children: [
        { id: 10, title:"Shed Bar", horario:"21:00h às 05:00h", status: calculateStatus("21:00h às 05:00h"), gradient: ['#1fe4f5', '#1fe4f5']},
        { id: 11, title:"Warung", horario:"22:00h às 04:30h", status: calculateStatus("22:00h às 04:30h"), gradient: ['#60efbc', '#60efbc']},
        { id: 12, title:"Green Valley", horario:"23:00h às 06:30h", status: calculateStatus("23:00h às 06:30h"), gradient: ['#b07eb9', '#b07eb9']}
      ],
    },
  ]
  export default dataOfSimpleCard