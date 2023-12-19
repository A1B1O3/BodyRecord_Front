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
      autoplaySpeed: 3000,
      slidesToScroll: 1,
      autoplay: true
    };
    
    return (
    	<Styled_Slide {...settings}>
       
                
               <CommunitySlide/>
                <div>
                <PageWrap>
            <Photo>
                <img src = "img/work1.png"/>
                </Photo>
            <Profile>
                <Pic>
                    <img src = "img/face1.png" />
                </Pic>
                <Name>
                김민제 <br/> 
                </Name>
            </Profile>
            </PageWrap>
                </div>
                <div>
                <PageWrap>
            <Photo>
                <img src = "img/work2.png"/>
                </Photo>
            <Profile>
                <Pic>
                    <img src = "img/face2.png" />
                </Pic>
                <Name>
                이한울 <br/> 
                </Name>
            </Profile>
            </PageWrap>
                </div>
                <div>
                <PageWrap>
            <Photo>
                <img src = "img/work3.png"/>
                </Photo>
            <Profile>
                <Pic>
                    <img src = "img/face3.png" />
                </Pic>
                <Name>
                송민주 <br/> 
                </Name>
            </Profile>
            </PageWrap>
                </div>
                <div>
                <PageWrap>
            <Photo>
                <img src = "img/work4.png"/>
                </Photo>
            <Profile>
                <Pic>
                    <img src = "img/pic1.jpg" />
                </Pic>
                <Name>
                김재성 <br/> 
                </Name>
            </Profile>
            </PageWrap>
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
const PageWrap = styled.div`
border-radius:30px;
padding-top:30px;
    width:900px;
    height:700px;
    align-item: center;
`
const Photo = styled.div`
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  overflow:hidden;
  border-radius:30px;
    width:850px;
    height:500px;
    background-color:yellow;
    margin: 0 auto;
`
const Profile = styled.div`
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    box-sizing: border-box;
    padding:20px;
    border-radius:30px; 
    width:850px;
    height:150px;
    margin: 0 auto;
    display:flex;
`

const Pic = styled.div`
overflow:hidden;
    width:100px;
    height:100px;
    border-radius:100px;
    background-color:black;
    object-fit: scale-down

`
const Name = styled.div`
    width:500px;
    height:70px;
    font-size:30px;
    margin-left:20px;
    margin-top:20px;
`

export default Community 