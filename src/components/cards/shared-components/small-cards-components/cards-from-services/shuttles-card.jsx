import React, { useContext, useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { HotelContext } from '../../../../../context/context';

export default function ShuttleCard() {
  const { hotel } = useContext(HotelContext);
  const [loadedHotel, setLoadedHotel] = useState(null);

  useEffect(() => {
    const storedHotel = JSON.parse(localStorage.getItem("selectedHotel"));
    if (storedHotel) {
      setLoadedHotel(storedHotel);
    }
  }, []);

  useEffect(() => {
    if (hotel) {
      setLoadedHotel(hotel);
      localStorage.setItem("selectedHotel", JSON.stringify(hotel));
    }
  }, [hotel]);

  return (
    <>
      {loadedHotel && (
        <Grid container spacing={2} style={{ padding: 10 }}>
          {loadedHotel.services.map((service, index)=>(
            <Grid item xs={12} key={index}>
              {service.title === "Translados" && (
                <>
                  {service.instances && service.instances.map((instance, i) => (
                    <Grid item xs={12} key={i} style={{ marginBottom: 10 }}>
                      <Card sx={{ background: '#FFF', color: '#000', display:'flex', flexDirection:'row', alignItems: 'center' }}>
                        <CardMedia
                          component="img"
                          image={instance.image} // supondo que haja uma propriedade para a foto do motorista
                          alt={instance.name} // supondo que instance.name é o nome do motorista
                          sx={{ width: 100, height: 100, borderRadius: '50%', marginRight: 2 }}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                          <CardContent>
                            <Typography sx={{ fontSize: 16 }} component="div">
                              {instance.name}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} component="div">
                              Carro: {instance.car} | Placa: {instance.licensePlate} | Cor: {instance.carColor}
                            </Typography>
                          </CardContent>
                          <Button variant="outlined"  sx={{ alignSelf: 'flex-end', m: 1, color:'#28afb0', borderColor:'#28afb0'}}>
                            WhatsApp
                          </Button>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </>
              )}
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
