import React from 'react'
import Bg from '../acests/Slanted_Green_BG.png'
import Vmg from '../acests/VIDEO _image.png';
import Sls from '../acests/slash_black _img.png';
import sng from '../acests/main/sngl-grl.png';
import ple from '../acests/main/people.png';
import lft from '../acests/main/photo_lft.png';
import mdl from '../acests/main/photo_mdl.png';
import rgt from '../acests/main/photo_rgt.png';
import {Button,Typography, Stack,
    Card,
    CardMedia,
    CardContent,
    CardActions, } from '@mui/material';
import "./main.css";

const main = () => {
    return (
        <>
           
                    <div style={{ backgroundColor: "#E5E5E5", display:"flex", height:"744px" ,width:"auto" }} className="cont">
                            <img src={Sls} alt="img" width="60%" height="90%"
                        style={{ marginLeft: "20px", marginnTop: "10px" ,position: "absolute"}}/>
                            <img src={Vmg} alt="img" width="944px" height="631px" 
                    style={{ marginLeft: "310px", marginTop: "300px", position: "relative",
                    textAlign: "center", float: "left" }}/>
                    <Button style={{ backgroundColor: '#fff', color: "#4BA87D",width: "200px",  height: "65px",
                            fontSize: "21px",textAlign:"center",  marginTop:"820px" ,position: "absolute"}}
                        variant="contained" className="btn" >LEARN NOW</Button>
                <Typography varient="h6" style={{
                    fontFamily: "Playfair Display", fontWeight: 900, fontSize: "60px", color: "#fff"
                ,marginLeft:"32%",marginTop:"490px" ,position: "absolute"}}
                 component='div' sx={{flexGrow:1}} >
                        Reach More Costomers
                    </Typography>
                    </div>
                    <div style={{
                        backgroundImage: `url(${Bg})`,
                        height: "1120px",backgroundSize: 'cover', resize: "both",overflow:"",
                backgroundPosition: 'center', width: "auto", backgroundColor: "#E5E5E5"
            }}>
    <Stack direction='row' style={{display:"flex"}}>
          <Stack direction='row' style={{ width: '170%',marginLeft:"80px",marginTop:"250px" }}>
            <Card sx={{ maxWidth: 345 }} style={{ marginBottom: '81.59px' }}>
              <CardMedia
                component='img'
                height='282.89px'
                width='320px'
                image={sng}
                alt='campaing-img'
              />
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  Launch campaigns but also find new customers. Our unique
                  platform handles campaigns from start to end.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
            <Card
              sx={{ maxWidth: 345 }}
              style={{ marginLeft: '47px', marginTop: '81.59px' }}
            >
              <CardMedia
                component='img'
                height='282.89px'
                width='320px'
                image={ple}
                alt='campaing-img'
              />
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  Start building and sharing with your team today. NinjaMail is
                  renowned for its industry leading team collaboration tools.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Stack>
          <Stack style={{ marginLeft: '47px', marginTop: '400px' }}>
            <h1 >The source for <br/> proven, engaging <br/>email campaigns</h1>
            <p style={{width:"222px",marginRight:"460px"}}>
              Whether you’re a startup, small business, e-commerce store, or
              want to promote your app, NinjaMail has the feature set tailored
              for your business.
            </p>
          </Stack>
        </Stack>

        <Stack
          direction='row'
          style={{ marginTop: '133px', justifyContent: 'space-between' }}
        >
          <img src={lft} alt='client-1' />
          <img src={mdl} alt='client-2' />
          <img src={rgt} alt='client-3' />
        </Stack>
                                
                   </div>
        
           
      </>
  )
}

export default main;
