import React from 'react';
import {Button,Typography } from '@mui/material';
import { Stack,Box} from '@mui/material'
import Icon from '../acests/mail_icon.png';
import brands1 from '../acests/brands/Image1.png';
import brands2 from '../acests/brands/Image 2.png';
import brands3 from '../acests/brands/Quest 3.png';
import brands4 from '../acests/brands/Image 4.png';
import brands5 from '../acests/brands/Image5.png';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                // bgcolor: (theme) => 
                //     (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                // color: (theme) => 
                //     (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                // border: '1px solid',
                // borderColor: (theme) =>
                //     theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                // borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}




function fotter  ()  {
    return (
        <>
        <div style={{hight:"400px",position:"relevant",margin:"100px"}} >
             <div> <Typography varient="h6" component='div' sx={{ flexGrow: 1 }}
                  style={{
                    position: "relative", textAlign: " center",
                    fontFamily: "Playfair Display", fontWeight: 600, fontSize: "40px"
                    }}>
                    Learn how others are reaching their <br />
                     audience easier than ever before.        
                 </Typography>
                </div>
                <div style={{display:"flex" ,gap:"40px", justifyContent: "center",alignItems: "center"}}>
                    <div style={{marginTop:"36px"}}><input placeholder="Enter your email" style={{width:"220px",height:"35px",border:" 2px solid #4BA87D"}} />
                        <p  style={{marginTop:"2px",color:'#4BA87D',marginLeft:"20px"}}>Thanks Email received</p>
                    </div>
                    <div><Button style={{ backgroundColor: '#4BA87D',width:"195px" ,height:"55px",fontFamily:"Raleway",fontWeight:600,fontSize:"21px"}} variant="contained"  >
                    JOIN OUR LIST</Button>
                    </div>
                </div>
                <div> <Typography varient="h6" component='div' sx={{ flexGrow: 1 }}
                  style={{
                    position: "relative", textAlign: " center",
                    fontFamily: "Playfair Display", fontWeight: 600, fontSize: "40px"
                    }}>
                    All the best brands <br />
                     alread use us.        
                 </Typography>
                </div>
        <div style={{ width: '100%' }}>
        <Box sx={{display: 'flex', justifyContent: "center",  flexDirection: 'row', p: 1, m: 1 }}>
                        
                <Item><img src={brands1} alt="i1"/></Item>
                <Item><img src={brands2} alt="i1"/></Item>
                 <Item><img src={brands3} alt="i1" /></Item>
                 <Item><img src={brands4} alt="i1" /></Item>
                 <Item><img src={brands5} alt="i1"/></Item>
            </Box>
        </div>
                
            
            
     </div>
 

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