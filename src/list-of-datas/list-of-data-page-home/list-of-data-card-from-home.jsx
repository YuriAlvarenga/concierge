

//Dados referentes ao componente Simple Card
const dataOfSimpleCard = [
    {
      name: 'Passeios',
      route: '/strollsbc',
      children: [
        {id: 1, title:"Aquário", horario:"09:00h às 21:00h", status:"Aberto", gradient: ['#76b2fe', '#76b2fe']},
        { id: 2, title:"Jurassic Park", horario:"09:00h às 20:00h", status:"Aberto", gradient: ['#60efbc, #60efbc']},
        { id: 3, title:"Roda Gigante", horario:"09:00h às 21:30h", status:"Fechado",gradient: ['#ff6888', '#ff6888']},
      ],
    },

    {
      name: 'Restaurantes',
      route: '/restaurantesbc',
      children: [
        { id: 4, title:"Distretto", horario:"19:00h às 00:00h", status:"Aberto" ,gradient: ['#b07eb9', '#b07eb9']},
        { id: 5, title:"Guacamole", horario:"19:00h às 23:30h", status:"Aberto",gradient:['#1fe4f5', '#1fe4f5']},
        { id: 6, title:"Brava Sushi", horario:"19:00h às 23:30h", status:"Aberto",gradient: ['#60efbc', '#60efbc'] },
      ],
    },
    {
      name: 'Bares',
      route: '/barsbc',
      children: [
        { id: 7, title:"Infarta Madalena", horario:"19:00h às 01:00h", status:"Aberto", gradient: ['#ff6888', '#ff6888']},
        { id: 8, title:"Sossega Bar", horario:"19:00h às 02:30h", status:"Aberto",gradient: ['#b07eb9 ', '#b07eb9 '] },
        { id: 9, title: 'Taj Bar', horario:"19:00h às 02:30h", status:"Fechado",gradient: ['#1fe4f5 ', '#1fe4f5 ']},
      ],
    },
    {
      name: 'Baladas',
      route: '/nightclubsbc',
      children: [
        { id: 10, title:"Shed Bar", horario:"21:00h às 05:00h", status:"Fechado",gradient: ['#60efbc , #60efbc']},
        { id: 11, title:"Warung", horario:"22:00h às 04:30h", status:"Aberto",gradient: ['#ff6888', '#ff6888']},
        { id: 12, title:"Green Valley", horario:"23:00h às 06:30h", status:"Aberto",gradient: ['#b07eb9 ', '#b07eb9 ']}
      ],
    },
  ]
  export default dataOfSimpleCard