export const hotels = [
  {
    id: 1,
    name: "Hotel Ibis",
    location: "Cidade A",
    services: [
      {
        title: "Farmácias", 
        instances: [
          { name: "Farmácia A", contact: "123-456-7890" },
          { name: "Farmácia B", contact: "987-654-3210" }
        ]
      },
      {
        title: "Lavanderia", 
        instances: [
          { name: "Lavanderia X", contact: "456-789-0123" },
          { name: "Lavanderia Y", contact: "789-012-3456" }
        ]
      },
      {
        title: "Locadoras", 
        instances: [
          { name: "Localiza", contact: "456-789-0123" },
          { name: "Unidas", contact: "789-012-3456" },
          { name: "Movida", contact: "789-012-3456" }
        ]
      },
      {
        title: "Translados", 
        instances: [
          { name: "Translado X", contact: "456-789-0123" },
          { name: "Translado Y", contact: "789-012-3456" }
        ]
      },
      {
        title: "Frigobar", 
        instances: [
          { name: "Refrigerante", price: 5 },
          { name: "Água Mineral", price: 3 },
          { name: "Chocolate", price: 8 }
        ]
      }
    ],
    restaurant: {
      name: "Restaurante A",
      items: [
        { name: "Prato A", price: 10 },
        { name: "Prato B", price: 15 },
        { name: "Prato C", price: 20 }
      ]
    }
  },
  {
    id: 2,
    name: "Hotel Itália",
    location: "Cidade B",
    rating: 4.2,
    restaurant: {
      name: "Restaurante B",
      items: [
        { name: "Prato D", price: 12 },
        { name: "Prato E", price: 18 },
        { name: "Prato F", price: 22 }
      ]
    },
    minibar: [
      { name: "Refrigerante", price: 5 },
      { name: "Água Mineral", price: 3 },
      { name: "Salgadinho", price: 7 }
    ]
  },
  {
    id:3 ,
    name: "Hotel Slaviero",
    location: "Cidade C",
    rating: 4.8,
    restaurant: {
      name: "Restaurante C",
      items: [
        { name: "Prato G", price: 14 },
        { name: "Prato H", price: 20 },
        { name: "Prato I", price: 25 }
      ]
    },
    minibar: [
      { name: "Refrigerante", price: 5 },
      { name: "Água Mineral", price: 3 },
      { name: "Biscoito", price: 6 }
    ]
  }
]
