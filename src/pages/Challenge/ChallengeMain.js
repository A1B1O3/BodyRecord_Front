import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link}from 'react-router-dom';
import TopBar2 from '../../components/common/TopBar2';
import ChallengeBar from './ChallengeBar';
import ChallengeBox from './ChallengeBox';
import ChallengeName from './ChallengeName';
import Modal from '../../components/common/Modal';


function ChallengeMain() {
    return (
        <PageWrap>
            <Top>
                <Title>
                챌린지
                </Title>
            </Top>
            <Title1>
               나의 챌린지
            </Title1>
            <ChallengeName/>
            <Term>
                기간
            </Term>
            <Term2>
                2023.11.01-2023.11.10
            </Term2>
            <ChallengeBar/>
            <Percentage>
                50%
            </Percentage>
            <Text>
                달성
            </Text>
            <ChallengeBox/>
            <Link to = '/ChallengeAdd'>
            <ChallengeAdd>
                첼린지 추가하기
            </ChallengeAdd>
            </Link>
            <Link to = '/ChallengeList'>
            <ChallengeList>
                챌린지 참가하기
            </ChallengeList>
            </Link>
            <ChallengeOut>
                챌린지 탈퇴하기
            </ChallengeOut>
            <Modal/>
        </PageWrap>
    );
}

const PageWrap = styled.div`
    width: 1000px;
    height: 100vh;
    flex-direction: column;
    justify-content:center;
`

const TopBar = styled.div`
    height:95px;
`

const Top = styled.div`
    display:flex;
    width: 1000px;
    height: 200px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
`

const Title = styled.span`
    margin-top: 62px;
    margin-left: 100px;
    justify-content: center
    width:364px;
    height:80px;
    font-size:60px;
    font-weight:bold
`

const Title1 = styled.div`
    margin-left: 100px;
    margin-top: 120px;
    font-size:50px;
    font-weight:800;
    `

const Term = styled.div`
    width:100px;
    height:50px;
    font-size:40px;
    font-weight:800;
    margin-left: 100px;
    margin-top:30px;
`

const Term2 = styled.div`
    width:500px;
    font-size:40px;
    height:50px;
    font-weight:800;
    margin-top: 20px;
    margin-left: 100px;
`

const ChallengeAdd = styled.div`
    width:600px;
    height:90px;
    background-color:purple;
    border-radius:20px;
    margin-right:20px;
    margin-top:100px;
    background-color:#6100FF;
    margin-left:200px;
    font-size:40px;
    color: white;
    font-weight:800;
    text-align:center;
    padding:20px;
    box-sizing:border-box;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const ChallengeList = styled.div`
    width:600px;
    height:90px;
    background-color:purple;
    border-radius:20px;
    margin-right:20px;
    margin-top:70px;
    background-color:#0074FF;
    margin-left:200px;
    font-size:40px;
    color: white;
    font-weight:800;
    text-align:center;
    padding:20px;
    box-sizing:border-box;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const ChallengeOut = styled.div`
    width:600px;
    height:90px;
    background-color:purple;
    border-radius:20px;
    margin-right:20px;
    margin-top:70px;
    background-color:black;
    margin-left:200px;
    font-size:40px;
    color: white;
    font-weight:800;
    text-align:center;
    padding:20px;
    box-sizing:border-box;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const Percentage = styled.div`
    width:100px;
    height:50px;
    margin-left: 100px;
    margin-top:30px;
    font-size:40px;
    font-weight:800;
`

const Text = styled.div`
    width:100px;
    height:50px;
    margin-left: 800px;
    position: relative;
    top:-50px;
    font-size:40px;
    font-weight:800;
    text-align:center;
`


export default ChallengeMain;