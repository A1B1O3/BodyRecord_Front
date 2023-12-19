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
import ProgressBar from "@ramonak/react-progress-bar";
import { useState, useEffect } from 'react';
import axios from 'axios';

function ChallengeMain() {

    const accessToken = localStorage.getItem('accessToken');

    const [participatingChallenge, setParticipatingChallenge] = useState([]);
    const [achievementRate, setAchievementRate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [additionalData, setAdditionalData] = useState([]);
    
  
    
    useEffect(() => {

      const fetchData = async () => {
        try {
       
          const response = await axios.get('http://localhost:8080/challenge/participating/details', {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          });
  
          setParticipatingChallenge(response.data);
          setLoading(false);
  
          if (response.data.length > 0) {
            const challengeCode = response.data[0].challengeCode; ; 
            console.log('챌린지코드:', challengeCode);

            const achievementRateResponse = await axios.get(`http://localhost:8080/challenge/achievement-rate/${challengeCode}`, {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
              },
            
            });
            
            setAchievementRate(achievementRateResponse.data);
            setLoading(false);
            console.log('달성률:', achievementRateResponse.data);


            const additionalDataResponse = await axios.get(`http://localhost:8080/challenge/${challengeCode}`, {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
              },
            });
  
            setAdditionalData(additionalDataResponse.data);
            setLoading(false);
            console.log('추가내용:', additionalDataResponse.data);
          }
        } catch (error) {
          setLoading(false);
       
          console.error('에러', error);
        }
      };
  
      fetchData();
    }, [accessToken]);
    const challenge = participatingChallenge[0];

    const handleChallengeDelete = async () => {
      window.location.reload();
      try {
        if (participatingChallenge.length > 0) {
        const challengeCode = participatingChallenge[0].challengeCode;
        const challengeDelete = await axios.delete(`http://localhost:8080/challenge/leave/${challengeCode}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });
        }
      } catch (error) {
      }
    };

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
            {loading ? (
        <p>Loading...</p>
      ) : challenge && challenge.challengeTitle ? (
        <>
          <Name>{challenge.challengeTitle} 참여중</Name>
          <Term>기간</Term>
          <Term2>{challenge.challengeStartdate} ~ {challenge.challengeEnddate}</Term2>
          <PgBar>
            <ProgressBar completed={achievementRate}
            width={800}
            height={40}
            bgColor="#25F396"
             />
          </PgBar>
          <Percentage>
          {achievementRate}%
            </Percentage>
            <Text>
                달성
            </Text>
         <Box>
            <Title2>
                {challenge.challengeTitle}
            </Title2>
            <Link to ={`/ChallengeCertification?code=${challenge.challengeCode}`}>
            <Text1 >
                {additionalData.challengeContent}
            </Text1>
            </Link>
         </Box>
        </>
      ) : (
        <Name>챌린지를 참여하고 있지 않습니다.</Name>
      )}
            <Link to = '/ChallengeAdd'>
            <ChallengeAdd>
                챌린지 만들기
            </ChallengeAdd>
            </Link>
            <Link to = '/ChallengeList'>
            <ChallengeList>
                챌린지 참가하기
            </ChallengeList>
            </Link>
            <ChallengeOut onClick={handleChallengeDelete}>
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
    width:600px;
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

const PgBar = styled.div`
    width:800px;
    height:40px;
    margin-left:100px;
    margin-top:40px;
`

const Name = styled.div`
    width:700px;
    height:70px;
    font-size:30px;
    font-weight:700;
    margin-left:100px;
    margin-top:50px;
`

const Box = styled.div`
    width:800px;
    height:300px;
    border-radius:30px;
    margin-left:100px;
    margin-top:80px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const Title2= styled.div`
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

const Text1 = styled.div`
    width:800px;
    height:80px;
    color:black;
    font-size:35px;
    text-align:center;
    padding:15px;
    box-sizing:border-box;
    border-bottom:solid grey 1px;

`
export default ChallengeMain;