import React, { useContext, useEffect, useState } from 'react'
import { Grid, Typography, Card, CardContent, Button, Box, List, ListItem } from '@mui/material'
import { HotelContext } from '../../../../../context/context'
import { useNavigate } from 'react-router-dom'
import { calculateStatus } from '../../../../../list-of-datas/function-calculate-hour-of-status-from-lists/status-utils'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

export default function PharmacyCard() {
  const { hotel } = useContext(HotelContext)
  const [loadedHotel, setLoadedHotel] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const storedHotel = JSON.parse(localStorage.getItem('selectedHotel'))
    if (storedHotel) {
      setLoadedHotel(storedHotel)
    }
  }, [])

  useEffect(() => {
    if (hotel) {
      setLoadedHotel(hotel)
      localStorage.setItem('selectedHotel', JSON.stringify(hotel))
    }
  }, [hotel])
  //whatasapp
  const openWhatsApp = (contact) => {
    const phoneNumber = '+5547997815538'
    window.open(`https://wa.me/${phoneNumber}`)
  }
  //navegar até o local

  const openNavigationApp = (endereco) => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`
    

    if ("geolocation" in navigator) {
      // Abre o endereço no aplicativo de mapas
      window.open(googleMapsUrl, '_blank')
     
    } 

  }


  return (
    <>
      {loadedHotel && (
        <Grid container spacing={2} sx={{ padding: 1 }}>
          {loadedHotel.services.map((service, index) => (
            <Grid item xs={12} key={index} onClick={() => navigate(service.route)}>
              {service.title === 'Lavanderia' && (
                <>
                  {service.instances && service.instances.map((instance, i) => (
                    <Card key={i} sx={{ marginBottom: 2 }}> 
                      <CardContent sx={{  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> 
                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%', p:1, background: instance.gradient, }}>
                          <Typography sx={{ fontSize: 16, color:"#FFF", pb:2 }} component="div">
                            {instance.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', pb:2  }}>
                            {instance.status ? (
                              calculateStatus(instance.status) === "Aberto agora" ? (
                                <RadioButtonUncheckedIcon sx={{fontSize: 14, background:' green', color: 'green', mr: 1, borderRadius:'50%' }} />
                              ) : (
                                <RadioButtonUncheckedIcon sx={{ fontSize: 14, background:'red', color: 'red', mr: 1, borderRadius:'50%' }} />
                              )
                            ) : (
                              <></>
                            )}
                            <Typography sx={{ fontSize: 12, color: "#FFF"}} component="div">
                              {instance.status ? calculateStatus(instance.status) : 'Horário não especificado'}
                            </Typography>
                          </Box>
                        </Box>
          
                        <Box sx={{display:'flex', flexDirection:'column'}}>
                          <Typography sx={{ fontSize: 14 }} component="div">
                            Endereço: {instance.address} 
                          </Typography>
                          <Typography sx={{ fontSize: 14 }} component="div">
                            Instruções:
                           <List>
                            <ListItem>- Retirar sacola da lavanderia com a recepção</ListItem>
                            <ListItem>- Verificar serviço desejado no menu da lavanderia</ListItem>
                            <ListItem>- Entrar em contato com a lavanderia pelo whatsapp</ListItem>
                           </List>
                          </Typography>
                        </Box>
                      </CardContent>
                      <Box sx={{display:'flex', alignItems:'center', justifyContent: 'space-between', m:1}}>
                        <Box sx={{display:'flex', alignItems:'center', ml:1, fontSize:12}}> 
                          <AccessTimeIcon sx={{fontSize:14, mr:1}}/>
                          {instance.status}
                        </Box>  
                        <Box>
                          <Button sx={{fontSize:10, mr:1, width: 80, color:'#28afb0', borderColor:'#28afb0'}} variant='outlined' onClick={openWhatsApp}>Menu</Button>
                          <Button sx={{fontSize:10, mr:1, color:'#28afb0', borderColor:'#28afb0'}} onClick={openWhatsApp} variant='outlined'>WhatsApp</Button>
                          <Button sx={{fontSize:10, color:'#28afb0', borderColor:'#28afb0'}} variant='outlined' onClick={() => openNavigationApp(instance.address)}>Navegar</Button>
                        </Box> 
                      </Box>
                    
                    </Card>
                  ))}
                </>
              )}
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}
