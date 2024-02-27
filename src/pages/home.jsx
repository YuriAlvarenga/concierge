import React, { useState, useEffect } from 'react';
import { Box, Toolbar } from '@mui/material';
import TopBar from '../components/menu/top-bar/top-bar';
import ImageCard from '../components/cards/concierge-cards/image-card';
import Title from '../../src/components/cards/shared-components/titles/title';
import SmallCardServices from '../components/cards/shared-components/small-cards-components/small-card-from-services';
import CardComponent from '../components/cards/concierge-cards/card-from-home';
import { useTranslation } from 'react-i18next';
import ButtonTranslate from '../components/menu/top-bar/button-translate';
import { MenuBookTwoTone } from '@mui/icons-material';

export default function Home() {
  const { t } = useTranslation();
  const [hotelData, setHotelId] = useState(null);

  useEffect(() => {
    // Função para extrair parâmetros da URL
    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Executar a função para extrair o parâmetro da URL quando o componente for montado
    const id = getParameterByName('hotel_id');
    setHotelId(id);

    // Realizar a requisição fetch apenas se o hotelId estiver definido
    if (id) {
      fetch('list-of-datas/list-of-data-hotel-page/list-of-hotels.json')
        .then(response => response.json())
        .then(data => {
          // Encontrar o hotel com o ID correspondente
          var hotel = data.hotels.find(hotel => hotel.id == id);
          
          // Verificar se o hotel foi encontrado
          if (hotel) {
            // Exibir os detalhes do hotel
            console.log('Detalhes do Hotel:');
            console.log('Nome:', hotel.name);
            console.log('Localização:', hotel.location);
            console.log('Classificação:', hotel.rating);
          } else {
            console.log('Hotel não encontrado.');
          }
        })
        .catch(error => console.error('Erro ao carregar os hotéis:', error));
    }
  }, [hotelData]);

  return (
    <Box style={{ maxWidth: '100%', margin: '0 auto', background: '#f3f3f3' }}>
      <TopBar title={"Concierge Virtual"} rightComponent={<ButtonTranslate />} />
      <Box style={{ background: '#031926', height: 80 }}>
        <ImageCard />
      </Box>
      {hotelData && (
        <Box sx={{ mt: 23 }}>
          <Title title={hotelData.name} />
          <SmallCardServices />
          <CardComponent />
        </Box>
      )}
      <Toolbar />
      
    </Box>
  );
}
