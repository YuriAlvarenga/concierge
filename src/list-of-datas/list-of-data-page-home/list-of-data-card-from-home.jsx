

//Dados referentes ao componente Simple Card
const dataOfSimpleCard = [
    {
      name: 'Passeios',
      route: '/strollsbc',
      children: [
        {id: 1, title:"Aquário", horario:"09:00h às 21:00h", status:"Aberto", gradient: ['#1fe4f5, #3fbafe']},
        { id: 2, title:"Jurassic Park", horario:"09:00h às 20:00h", status:"Aberto", gradient: ['#60efbc, #58d5c9']},
        { id: 3, title:"Roda Gigante", horario:"09:00h às 21:30h", status:"Fechado",gradient: ['#FFA500', '#FFD900']},
      ],
    },

    {
      name: 'Restaurantes',
      route: '/restaurantesbc',
      children: [
        { id: 4, title:"Distretto", horario:"19:00h às 00:00h", status:"Aberto" ,gradient: ['#555555', '#000000']},
        { id: 5, title:"Guacamole", horario:"19:00h às 23:30h", status:"Aberto",gradient:['#2E8B57', '#2E8B57']},
        { id: 6, title:"Brava Sushi", horario:"19:00h às 23:30h", status:"Aberto",gradient: ['#FFA500', '#FF8C00'] },
      ],
    },
    {
      name: 'Bares',
      route: '/barsbc',
      children: [
        { id: 7, title:"Infarta Madalena", horario:"19:00h às 01:00h", status:"Aberto", gradient: ['#FF0000', '#B22222']},
        { id: 8, title:"Sossega Bar", horario:"19:00h às 02:30h", status:"Aberto",gradient: ['#FFD700 ', '#FFD700 '] },
        { id: 9, title: 'Taj Bar', horario:"19:00h às 02:30h", status:"Fechado",gradient: ['#CD5C5C ', '#CD5C5C ']},
      ],
    },
    {
      name: 'Baladas',
      route: '/nightclubsbc',
      children: [
        { id: 10, title:"Shed Bar", horario:"21:00h às 05:00h", status:"Fechado",gradient: ['#FF69B4 , #FF69B4']},
        { id: 11, title:"Warung", horario:"22:00h às 04:30h", status:"Aberto",gradient: ['#444444', '#000000']},
        { id: 12, title:"Green Valley", horario:"23:00h às 06:30h", status:"Aberto",gradient: ['#7FFF7F ', '#008000 ']}
      ],
    },
  ]
  export default dataOfSimpleCard