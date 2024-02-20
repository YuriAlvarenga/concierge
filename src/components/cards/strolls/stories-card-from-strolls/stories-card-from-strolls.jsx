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
        <Box style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9998}}>
          <ReactInstaStories
            stories={stories[activeListIndex].items}
            defaultInterval={1500}
            width={window.innerWidth}
            height={window.innerHeight}
            onAllStoriesEnd={handleCloseStories}
            onRequestClose={handleCloseStories}
            style={{ pointerEvents: 'auto' }}
          />
          <IconButton onClick={handleCloseStories} sx={{ position: 'absolute', top: 15, right: 10, zIndex: 9999 }}>
            <CloseIcon sx={{ color: '#FFF' }} />
          </IconButton>
        </Box>
      ) : (
        <>
          <Typography sx={{ m: 1, mt:0 }}>Stories</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around'  }}>
            {stories.map((image, index) => (
              <Card key={index} sx={{ boxShadow: 'none', background:"#f3f3f3" }}>
                <CardMedia
                  component="img"
                  image={image.image}
                  alt={image.image}
                  sx={{ borderRadius: "50%", width: 80, height: 80, cursor: 'pointer'  }}
                  onClick={() => handleCardClick(index)}
                />
              </Card>
            ))}
          </Box>
        </>
      )}
    </>
  )
}
