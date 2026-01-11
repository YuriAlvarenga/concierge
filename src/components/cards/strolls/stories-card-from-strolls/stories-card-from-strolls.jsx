import { Box, Typography, Card, CardMedia, IconButton } from '@mui/material'
import React, { useState } from 'react'
import ReactInstaStories from 'react-insta-stories'
import CloseIcon from '@mui/icons-material/Close'
import stories from '../../../../list-of-datas/list-of-data-strolls/oceanic-aquarium-bc/list-of-data-stories-strolls'


export default function StoryFromStrolls() {
  const [activeListIndex, setActiveListIndex] = useState(null)

  const handleCardClick = (index) => {
    setActiveListIndex(index)
  }

  const handleCloseStories = () => {
    setActiveListIndex(null)
  }

  return (
    <>
      {activeListIndex !== null ? (
        <Box sx={{
          position: 'absolute', 
          top: 0,
          left: 0,
          width: '100%',
          height: '100%', 
          zIndex: 9999,
          bgcolor: '#000'
        }}>
          <ReactInstaStories
            stories={stories[activeListIndex].items}
            width="100%" // Força a largura total do container
            height="100%" // Força a altura total do container
            onAllStoriesEnd={handleCloseStories}
          />

          <IconButton
            onClick={handleCloseStories}
            sx={{
              position: 'absolute',
              top: 15,
              right: 10,
              zIndex: 9999,
              backgroundColor: 'rgba(0,0,0,0.3)',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' }
            }}
          >
            <CloseIcon sx={{ color: '#FFF' }} />
          </IconButton>
        </Box>
      ) : (
        <Box sx={{ p: 1 }}>
          <Typography variant='h6' sx={{ mb: 1 }}>Stories</Typography>
          <Box sx={{
            display: 'flex',
            justifyContent:'space-around',
            gap: 2,
            overflowX: 'auto',
            pb: 1,
            '::-webkit-scrollbar': { display: 'none' } // Esconde barra de scroll
          }}>
            {stories.map((image, index) => (
              <Box key={index} sx={{ textAlign: 'center', flexShrink: 0 }}>
                <Card
                  sx={{
                    boxShadow: 'none',
                    background: "transparent",
                    border: '3px solid #2196f3',
                    borderRadius: '50%',
                    p: 0.3 
                  }}
                >
                  <CardMedia
                    component="img"
                    image={image.image}
                    alt="Story thumb"
                    sx={{
                      borderRadius: "50%",
                      width: 70,
                      height: 70,
                      cursor: 'pointer',
                      objectFit: 'cover'
                    }}
                    onClick={() => handleCardClick(index)}
                  />
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </>
  )
}