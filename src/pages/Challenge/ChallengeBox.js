import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link}from 'react-router-dom';
import TopBar2 from '../../components/common/TopBar2';

function ChallengeBox() {
    return (
        <Box>
            <Title>
                오늘의 챌린지
            </Title>
            <Text>
                새벽 5시에 일어나기
            </Text>
            <Text>
                아침먹기
            </Text>
            <Text>
                10KM 러닝
            </Text>
            <Text>
                10시에 취침하기
            </Text>
        </Box>
    );
}

const Box = styled.div`
    width:800px;
    height:600px;
    border-radius:30px;
    margin-left:100px;
    margin-top:80px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const Title = styled.div`
    width:800px;
    height:100px;
    font-size:40px;
    font-weight:800;
    text-align:center;
    background-color:#6100FF;
    color:white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding:25px;
    box-sizing:border-box;
`

const Text = styled.div`
    width:800px;
    height:80px;
    font-size:35px;
    text-align:center;
    padding:15px;
    box-sizing:border-box;
    border-bottom:solid grey 1px;
`

export default ChallengeBox;