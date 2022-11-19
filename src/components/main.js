import React from 'react'
import Bg from '../acests/Slanted_Green_BG.png'
import Vmg from '../acests/VIDEO _image.png';
import Sls from '../acests/slash_black _img.png';
import {Button,Typography } from '@mui/material';
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
                        height: "1130px",backgroundSize: 'cover',
                        backgroundPosition: 'center',width:"100vw",backgroundColor: "#E5E5E5" }}>
                                
                   </div>
        
           
      </>
  )
}

export default main;
