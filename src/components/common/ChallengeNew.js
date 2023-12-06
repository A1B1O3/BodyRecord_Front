import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect'
import { useState, useRef, useEffect } from "react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ChallengeNew = ()=>{

    const settings = {
      dots: true,
      infinite: true,
      Arrow: false,
      slidesToShow: 1,
      autoplaySpeed: 4000,
      slidesToScroll: 1,
      autoplay: true
    };
    
    return (
    	<Styled_Slide {...settings}>
           
               <Slide1>
                    새벽 5시 기상<br/>5KM 달리기
               </Slide1>
                <Slide2>
                   10Km 달리기
                </Slide2>
                <Slide3>
                    20KM 달리기<br/>아침식사 하기
                </Slide3>
                <Slide4>
                   20KM 달리기<br/>아침식사 하기
                </Slide4>
                <Slide5>
                    20KM 달리기<br/>아침식사 하기
                </Slide5>
            </Styled_Slide>  
    );
}

export const Styled_Slide = styled(Slider)`
	
    .slick-list{ 
    	width: 900px;
        overflow:hidden;
        height: 400px;
        margin: 0 auto;
        background-color: black;
        margin-top:50px;
        border-radius:30px;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    }
    
`
const Slide1 = styled.div`
    width:900px;
    height:500px;
    padding:40px;
    font-size:50px;
    color: white;
    font-weight:600;
    background-image:url("img/run-1.png");
`
   
const Slide2 = styled.div`
    width:900px;
    height:500px;
    padding:40px;
    font-size:50px;
    color: white;
    font-weight:600;
    background-image:url("img/run-2.png");
`
   
const Slide3 = styled.div`
    width:900px;
    height:500px;
    padding:40px;
    font-size:50px;
    color: white;
    font-weight:600;
    background-image:url("img/run-3.png");
`
   
const Slide4 = styled.div`
    width:900px;
    height:500px;
    padding:40px;
    font-size:50px;
    color: white;
    font-weight:600;
    background-image:url("img/run-4.png");
`
   
const Slide5 = styled.div`
    width:900px;
    height:500px;
    padding:40px;
    font-size:50px;
    color: white;
    font-weight:600;
    background-image:url("img/run-2.png");
`
   

export default ChallengeNew 