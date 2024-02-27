import React from 'react'
import { Grid, Box } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import dataOfPharmacies from '../../../../list-of-datas/list-of-data-page-home/list-of-data-services/list-of-pharmacies'


export default function PharmacyCard(){


  return (
    <Grid container spacing={2} style={{ padding: 10 }}>
      {dataOfPharmacies.map(({id,title, status, gradient})=>(
        <Grid item xs={12} key={id}>
            <Card sx={{background: gradient, display:'flex', flexDirection:'column'}}>
              <CardContent sx={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <Typography sx={{fontSize:16, color:'#FFF'}} component="div">
                  {title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <RadioButtonUncheckedIcon sx={{ background: status === 'Aberto' ? 'green' : 'red', color: status === "Aberto" ? 'green' : 'red', borderRadius: '100%', mr: 1, fontSize: 13 }} />
                  <Typography color="text.secondary">{status}</Typography>
                </Box>
              </CardContent>
                <Typography sx={{fontSize:12, m: 1}} component="div">
                  cadastrar serviço
                </Typography>
                
            </Card>
        </Grid>
        ))}
    </Grid>
    
  )
}