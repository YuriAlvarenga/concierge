// hotelsData.js
export const hotels = [
  {
    id: 123,
    name: "Hotel A",
    location: "Cidade A",
    rating: 4.5,
    restaurant: {
      name: "Restaurante A",
      items: [
        { name: "Prato A", price: 10 },
        { name: "Prato B", price: 15 },
        { name: "Prato C", price: 20 }
      ]
    },
    minibar: [
      { name: "Refrigerante", price: 5 },
      { name: "Água Mineral", price: 3 },
      { name: "Chocolate", price: 8 }
    ]
  },
  {
    id: 456,
    name: "Hotel B",
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
    id: 789,
    name: "Hotel C",
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
];
