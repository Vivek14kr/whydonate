import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
    let navigate = useNavigate();

  return (
   
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography style={{textAlign:"left"}} variant="h6"  component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button onClick={()=>{
            navigate("/login")
          }} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Home