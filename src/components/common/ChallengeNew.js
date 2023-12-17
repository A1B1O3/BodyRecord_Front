import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect'
import { useState, useRef, useEffect } from "react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

const ChallengeNew = ()=>{

    const [challengeData, setChallengeData] = useState([]);
    const accessToken = localStorage.getItem('accessToken'); 

   
    useEffect(() => {
      const fetchData = () => {

        axios.get('http://localhost:8080/challenge/new-challenges', {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        })
        .then(response => {
            setChallengeData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('에러', error);
        });
      };
      fetchData(); 
  }, []);

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
               {challengeData.map((challenge, index) => (
        <Slide key={index}  background={`url("img/run${index}.png")`}>
                <p>{challenge.challengeTitle}</p>
        </Slide>
      ))}
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
const Slide = styled.div`
    width:900px;
    height:500px;
    padding:40px;
    font-size:50px;
    color: white;
    font-weight:600;
    background: ${props => props.background || 'black'};
`
   

export default ChallengeNew 