import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function TopBar() {
  return (
    <AppBar position="fixed" sx={{height:30}}>
      <Toolbar style={{ margin: 'auto', height:30 }}>
        <Typography variant="h8" style={{ margin: 'auto', height:40 }}>
            Concierge Virtual
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
