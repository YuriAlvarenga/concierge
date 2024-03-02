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
        <Grid container spacing={2} style={{ padding: 15 }}>
          {loadedHotel.services.map((service, index)=>(
            <Grid item xs={12} key={index}>
              {service.subTitle === "Translados" && (
                <>
                  {service.instances && service.instances.map((instance, i) => (
                    <Grid item xs={12} key={i} style={{ marginBottom: 10 }}>
                      <Card sx={{ background: '#FFF', color: '#000', display:'flex', flexDirection:'row', alignItems: 'center' }}>
                        <Box sx={{ m: 1 }}>
                          <CardMedia
                            component="img"
                            image={instance.image} 
                            alt={instance.name} 
                            sx={{ width: 80, height: 80, borderRadius: '50%' }}
                          />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                          <CardContent>
                            <Typography sx={{ fontSize: 16 }} component="div">
                              {instance.name}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} component="div">
                              Carro: {instance.car} | Placa: {instance.licensePlate} | Cor: {instance.carColor}
                            </Typography>
                            <Box sx={{display:'flex', flexDirection:'row-reverse', mt:1}}>
                              <Button sx={{color:'#28afb0'}} size="small">Solicitar Motorista</Button>  
                            </Box>
                          </CardContent>
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
