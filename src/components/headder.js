import React from 'react'
import girl from '../acests/header/photo-girl.png'
import {Typography}  from '@mui/material';

const headder = () => {
    return (
        <div style={{display:"flex",marginTop:"100px",marginBottom:"100px" }}>
            <div>
                <Typography varient="h6" component='div' sx={{ flexGrow: 1 }} style={{
                    fontWeight: "900", flow: "left", fontSize: "60px",position: "absolute"
                ,marginLeft:"100px",marginTop:"50px", }}>
                    Creat Stunning <br/>Email Bracking
            </Typography>
        </div>
         <div>
              <img src={girl} alt="img" width="721.36px" height="481.19px"
              style={{ marginLeft: "540px", marginnTop: "-36px"  ,flow:"right"}}/>
        </div>
    </div>
  )
}

export default headder