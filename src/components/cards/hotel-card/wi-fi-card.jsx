import React, { useContext, useState, useEffect } from 'react'
import { Grid, Typography, IconButton, Snackbar, Box } from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import { useTranslation } from 'react-i18next'
import HttpsIcon from '@mui/icons-material/Https'
import WifiIcon from '@mui/icons-material/Wifi'
import { HotelContext } from '../../../context/context'
import { Fade } from "react-awesome-reveal"


export default function WifiCard() {

  const [copied, setCopied] = useState(false)
  const [copiedNetwork, setCopiedNetwork] = useState('')
  const { t } = useTranslation()

  const { hotel } = useContext(HotelContext)
  const [loadedHotel, setLoadedHotel] = useState(null)

  //recupera o id do local storage
  useEffect(() => {
    const storedHotel = JSON.parse(localStorage.getItem("selectedHotel"))
    if (storedHotel) {
      setLoadedHotel(storedHotel)
    }
  }, [])

  useEffect(() => {
    if (hotel) {
      setLoadedHotel(hotel)
      localStorage.setItem("selectedHotel", JSON.stringify(hotel))
    }
  }, [hotel])

  //função para copiar a senha do hotel e disparar mensagem
  const copyToClipboard = (text, network) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setCopiedNetwork(network)
    setTimeout(() => {
      setCopied(false)
      setCopiedNetwork('')
    }, 3000)
  }

  return (
    <React.Fragment>
      {loadedHotel && (
        <Grid container spacing={2} style={{ padding: 15, paddingBottom: 0, marginTop: 1 }}>
          {loadedHotel.internet && (
            <Grid item xs={12}>
              <Fade direction='left'>
                <Typography variant="h6" sx={{ mb: 1 }}>{loadedHotel.internet.title}</Typography>
              </Fade>
              {loadedHotel.internet.items.map((item, index) => (
                <React.Fragment key={index}>
                  <Box sx={{ marginBottom: '10px', background:'#FFF', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 2, p: 1 }}>
                    <Fade direction="left">
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <WifiIcon sx={{ fontSize: 16, color: '#28afb0', mr: 1 }} />
                            <Typography sx={{ fontSize: 16 }}>{t("Rede")}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography sx={{ fontSize: 16, ml:1 }} color="text.secondary">{item.network}</Typography>
                        </Grid>
                      </Grid>
                    </Fade>
                    <Fade direction='right'>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <HttpsIcon sx={{ fontSize: 16, color: '#28afb0', mr: 1 }} />
                            <Typography sx={{ fontSize: 16 }}>{t("Senha")}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center', ml:1 }}>
                            <Typography sx={{ fontSize: 16 }} color="text.secondary">{item.password}</Typography>
                            <IconButton aria-label="Copiar Senha" onClick={() => copyToClipboard(item.password, item.network)} sx={{ ml: 1 }}>
                              <FileCopyIcon sx={{ color: '#28afb0' }} />
                            </IconButton>
                          </Box>
                        </Grid>
                      </Grid>

                    </Fade>
                  </Box>
                </React.Fragment>
              ))}
              <Snackbar
                open={copied}
                autoHideDuration={3000}
                onClose={() => setCopied(false)}
                message={`Senha de ${copiedNetwork} copiada para a área de transferência!`}
              />
            </Grid>
          )}
        </Grid>
      )}
    </React.Fragment>
  )
}
