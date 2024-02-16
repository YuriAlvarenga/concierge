import { Box, Typography, Card, CardMedia, IconButton } from '@mui/material'
import React, { useState } from 'react'
import ReactInstaStories from 'react-insta-stories'
import CloseIcon from '@mui/icons-material/Close'


export default function Story() {
  const [showStories, setShowStories] = useState(false)
  
  const handleCardClick = () => {
    setShowStories(true)
  }

  const handleCloseStories = () => {
    setShowStories(false)
  }


  const stories = [
    {
      url: 'https://picsum.photos/1080/1920',
      header: {
        heading: 'Aquário',
        subheading: 'Posted 5h ago',
        profileImage: "/strolls-bc/images-from-cards-bc/aquario-bc.jpg"
      }
    },
    {
      url:
        'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
      header: {
        heading: 'Aquário',
        subheading: 'Posted 32m ago',
        profileImage:
        "/strolls-bc/images-from-cards-bc/aquario-bc.jpg"
      }
    },
    {
      url:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      header: {
        heading: 'Aquário',
        subheading: 'Posted 32m ago',
        profileImage:
        "/strolls-bc/images-from-cards-bc/aquario-bc.jpg"
        },
      type: 'video',
    },
    {
      url:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      type: 'video'
    },
    'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'
  ]

  return (
    <Box>
      {showStories ? (
        <Box style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',  zIndex: 9998 }}>
            <ReactInstaStories
                stories={stories}
                defaultInterval={1500}
                width={window.innerWidth}
                height={window.innerHeight}
                onAllStoriesEnd={handleCloseStories}
                onRequestClose={handleCloseStories}
                style={{ pointerEvents: 'auto' }}
            />
           <IconButton onClick={handleCloseStories} sx={{ position: 'absolute', top: 15, right: 10, zIndex: 9999 }}>
              <CloseIcon sx={{color:'#FFF'}} />
            </IconButton>
        </Box>
      ) : (
        <Box>
          <Typography sx={{ m: 1 }}>Stories</Typography>
          <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', mb: 2, boxShadow: 'none' }}>
              <CardMedia
                component="img"
                image= "/strolls-bc/images-from-cards-bc/aquario-bc.jpg"
                alt=  "image"
                sx={{ borderRadius: "50%", width: 70, height: 70, cursor: 'pointer' }}
                onClick={handleCardClick}
              />
          </Card>
        </Box>
      )}
    </Box>
  )
}
