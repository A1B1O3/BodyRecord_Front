import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link}from 'react-router-dom';
import TopBar3 from '../../components/common/TopBar3';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
function ChallengeList2() {

        const [popularChallenges, setPopularChallenges] = useState([]);
        const accessToken = localStorage.getItem('accessToken'); 

        useEffect(() => {
        const fetchData = () => {
                
            axios.get('http://localhost:8080/challenge/popular-challenges', {
                headers: {
                  'Authorization': `Bearer ${accessToken}`,
                },
              })
              .then(response => {
                  setPopularChallenges(response.data);
                console.log('api 데이터',response.data);
              })
        .catch(error => {
          console.error('에러', error);
        });
      };
      fetchData(); 
  }, []);

    return (
        <PageWrap>
        {popularChallenges.map((challenge, index) => (
        <Link key={index} to ={ `/ChallengeDetail?index=${index}`}>
        <Box key={index}  background={`url("img/run${index}.png")`} 
        >
                <p>{challenge.challengeTitle}</p>
        </Box>
        </Link>
      ))}
        </PageWrap>
        );
    }

    const Box = styled.div`
    border-radius:30px;
    width: 980px;
    font-size:50px;
    font-weight:800;
    color:white;
    padding:30px;
    height: 300px;
    margin: 10px;
    box-sizing:border-box;
    background-size: cover;
    background: ${(props) => props.background};
  `


    const PageWrap = styled.div`
        margin-top:70px;
        width:1000px;
        height:2000px;
        justify-content: center;
    `

    const BoxWrap = styled.div`
        width:900px;
        height:255px;
        display:flex;
        margin-top:20px;
        margin-left:50px;
    `


    export default ChallengeList2;