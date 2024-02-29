import React from 'react'
import { Grid, Box } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'

export default function NewService(){


  return (
    <Grid container spacing={2} style={{ padding: 10 }}>
        <Grid item xs={12}>
            <Card sx={{ display:'flex', flexDirection:'column'}}>
              <CardContent sx={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <Typography sx={{fontSize:16, color:'#FFF'}} component="div">
                  Novo Serviço
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <RadioButtonUncheckedIcon sx={{ borderRadius: '100%', mr: 1, fontSize: 13 }} />
                  <Typography color="text.secondary">status</Typography>
                </Box>
              </CardContent>
                <Typography sx={{fontSize:12, m: 1}} component="div">
                  Cadastrar serviço parceiro
                </Typography>
            </Card>
        </Grid>
    </Grid>
    
  )
}