import React from 'react'
import girl from '../acests/header/photo-girl.png'
import { Typography,Button } from '@mui/material';


const headder = () => {
    return (
        <div style={{display:"flex",marginTop:"100px",marginBottom:"100px" }}>
          <div style={{width:"500px",marginLeft:"80px"}} >
              <div>
                <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} style={{
                    fontWeight: "900", flow: "left", fontSize: "60px",position: "absolute"
                ,marginLeft:"110px",marginTop:"50px", fontFamily:" Playfair Display"}}>
                    Creat Stunning <br />Email Campaigns
                    
                    </Typography>
                </div>
                <div  style={{marginLeft:"120px",marginTop:"220px" ,height:"40px",width:"350px", fontfamily:"Raleway" }}>
                    <text>Create and lunch email campaigns that captivate
                    <br/>your customers in ust a few clicks.
                    </text>
                </div>
                <div style={{ display: "flex",position: "absolute", marginLeft: "140px", marginTop: "40px", flexWrap: "wrap",gap:"10px 20px" }}>
                    <div><Button style={{ backgroundColor: '#4BA87D',width:"150px" ,height:"45px",fontFamily:"Raleway",fontWeight:600,fontSize:"21px"}} variant="contained"  >TRY NOW</Button></div>
                    <div><Button style={{backgroundColor: '#fff',width:"150px",height:"45px",color:"#4BA87D",  border:" 2px solid #4BA87D",marginLeft:"60px",fontFamily:"Raleway",fontWeight:600,fontSize:"16.5px"}} variant="contained"  >GET A DEMO</Button></div>
                </div>
         </div>
         <div>
              <img src={girl} alt="img" width="721.36px" height="481.19px"
                    style={{
                        marginRight: "100px", marginnTop: "-36px", flow: "right"
                        ,boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                    }} />
        </div>
    </div>
  )
}

export default headder