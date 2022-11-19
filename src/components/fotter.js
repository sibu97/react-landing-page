import React from 'react';
import {Button,Typography } from '@mui/material';


import { Stack } from '@mui/material'
import Icon from '../acests/mail_icon.png';
// import { spacing } from '@mui/system';




function fotter  ()  {
    return (
    <>
        <div id="ft" style={{ backgroundColor: "#4BA87D", width: "auto", height: "366px" }}>
        <p style={{
            paddingTop: "82px", marginRight: "248px", marginLeft: "248px", textAlign:"center",
                    fontWeight: 800, fontFamily: "Playfair Display", fontSize: "60px", color: "#fff"}}>
                    Get started today!</p>
        <Button style={{ backgroundColor: '#fff', color: "#4BA87D",width: "200px",  height: "65px",
                      fontSize: "21px",textAlign:"center",  marginLeft:"40%"}}
                       variant="contained" >PICK A PLAN</Button>
                
            </div>
            
            <footer style={{
                display: "flex", gap: "40px", align:"center",marginTop:"50px",marginBottom:"50px",
                marginRight: "256px",fontFamily:"Raleway",fontWeight:"700",fontSize:"19px"
            }}>
                <div style={{display:"flex",marginLeft:"228px" ,float:"left"}}>
                <img src={Icon} alt=" icon" width="109px" height="54.5px"/>
                <Typography varient="h6" component='div' sx={{ flexGrow: 1 }}
                style={{fontweight:900,fontSize:"40px",fontFamily:"Raleway"}}    >
                    NinjaMail
                </Typography>
                </div>
            
          <Stack spacing={0} className='fontColor'>
                       <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        Features</Typography>
                        <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        Pricing</Typography>
                        <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        Services</Typography>
                        <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        Partners</Typography>
          </Stack>
          <Stack spacing={0}>
          <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        About Us</Typography>
                        <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        Tutorials</Typography>
                        <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        Resources</Typography>
                        <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        Help Center</Typography>
                        <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        Templates</Typography>
                    <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        Case Studies</Typography>
          </Stack>
          <Stack spacing={0}>
          <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        Medium</Typography>
                        <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        Twitter</Typography>
                        <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        Facebook</Typography>
                        <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        Instagram</Typography>
                        <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        Linkedin</Typography>
          </Stack>
          <Stack spacing={0}>
                       <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        Contact Us</Typography>
                        <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        Slack</Typography>
                        <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} >
                        jobs</Typography>
                        
                </Stack>
               
            </footer>
            <hr style={{ width: "80%", height: "2%" }}></hr>
            <div style={{display :"flex",justifContent: "spaceBetween"}}>
                        <div style={{marginLeft:"250px"}}><h4>NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All rights reserved.</h4></div>
                        <div style={{marginLeft:"50px"}}><h4>Terms & Conditions</h4></div>
                        <div style={{marginLeft:"50px"}}><h4> Privacy Policy</h4></div>
            </div>
        </>
    );
}

export default fotter;