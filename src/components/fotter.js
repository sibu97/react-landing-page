import React from 'react';
import {Button } from '@mui/material';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


function fotter  ()  {
    return (
    <>
        <div id="ft" style={{ backgroundColor: "#4BA87D", width: "100vw", height: "366px" }}>
        <p style={{
            paddingTop: "82px", marginRight: "248px", marginLeft: "248px", textAlign:"center",
            fontWeight: 800, fontFamily: "Playfair Display", fontSize: "60px",color:"#fff"
        }}>Get started today!</p>
        <Button style={{
            backgroundColor: '#fff', color: "#4BA87D",width: "200px",  height: "65px",
            fontSize: "21px",textAlign:"center",  marginLeft:"40%", 
        }}
            variant="contained"  >PICK A PLAN</Button>
    </div>
        <footer>
            
            <Box>
           
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                   
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box><Link href="/" color="inherit">
                            Contact
                            </Link></Box>
                            <Box><Link href="/" color="inherit">
                            Contact
                            </Link></Box>

                       </Grid>
                    </Grid>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box><Link href="/" color="inherit">
                            Contact
                            </Link></Box>
                            <Box><Link href="/" color="inherit">
                            Contact
                            </Link></Box>

                       </Grid>
                    </Grid>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box><Link href="/" color="inherit">
                            Contact
                            </Link></Box>
                            <Box><Link href="/" color="inherit">
                            Contact
                            </Link></Box>

                       </Grid>
                    </Grid>
                </Container>
            </Box>
            </footer>
            </>
    );
}

export default fotter;