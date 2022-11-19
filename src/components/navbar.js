import React from 'react'
import { AppBar, Toolbar, IconButton, Typography,Stack,Button } from '@mui/material';
import Icon from '../acests/mail_icon.png';
import   './navbar.css';


function navbar  ()  {
    return (
        <>
        <AppBar classname="navbar" position='static' color="transparent">
            <Toolbar >
                <IconButton size="small" edge="start" color="inherit" aria-label='logo'>
                <img src={Icon} alt=" icon" width="109px" height="54.5px"/>
                </IconButton>
                <Typography varient="h6" component='div' sx={{flexGrow:1}} >
                    NinjaMail
                </Typography>
                <Stack direction='row' spacing={3}>
                    <p class="hover-underline-animation"  variant="contained">FEATURES</p>
                    <p class="hover-underline-animation" variant="contained" style={{marginTop:"16px"}} >PRICING</p>
                    <p class="hover-underline-animation" variant="contained" style={{marginTop:"16px"}}>SERVICES</p>
                    <p class="hover-underline-animation" variant="contained" style={{marginTop:"16px"}}>PARTNERS</p>     
                    <Button style={{backgroundColor: '#4BA87D'}} variant="contained"  >SIGN UP FREE</Button>
                </Stack>
           </Toolbar>
        </AppBar>
      
   </>
    )
}

export default navbar;


