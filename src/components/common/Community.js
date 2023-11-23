import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect'
import { useState, useRef, useEffect } from "react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommunitySlide from "./CommunitySlide";

const Community = ()=>{

    const settings = {
      dots: true,
      infinite: true,
      prevArrow: false,
      nextArrow: false,
      slidesToShow: 1,
      autoplaySpeed: 100000,
      slidesToScroll: 1,
      autoplay: true
    };
    
    return (
    	<Styled_Slide {...settings}>
       
                
               <CommunitySlide/>
                <div>
               
                </div>
                <div>
               
                </div>
                <div>
              
                </div>
                <div>
             
                </div>
            </Styled_Slide>  
    );
}

export const Styled_Slide = styled(Slider)`
	
    .slick-list{ 
    	width: 900px;
        height: 700px;
        margin: 0 auto;
        margin-top:50px;
        border-radius:30px;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    }
    
    .slick-prev:before, .slick-next:before{ 
        height: 0;
        overflow: hidden;
        position: absolute;
    }
`
   

export default Community 