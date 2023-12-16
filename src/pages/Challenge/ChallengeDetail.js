import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link}from 'react-router-dom';
import TopBar4 from '../../components/common/TopBar4';
import React, { useState,useEffect } from 'react';
import axios from 'axios';



function ChallengeDetail() {

    const [challengeData, setChallengeData] = useState([]);
    const accessToken = localStorage.getItem('accessToken'); 
   
    useEffect(() => {
      const fetchData = () => {

        axios.get('http://localhost:8080/challenge/1', {
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

    return (
        <PageWrap>
            <TopBar4/>
                <Image>
                    <img src = './img/workout.png' style={{overflow:'hidden'}}/>
                </Image>
            <TitleBox>
            <Title>
            {challengeData.challengeTitle}
            </Title>
            <People>
                <img src = './img/person.png' style={{marginRight:'20px'}} />
                현재 {challengeData.challenge}명
            </People>
            </TitleBox>
            <TimeBox>
                <Time>
                    <img src = './img/date.png' style={{marginRight:'20px'}} /> 챌린지 기간
                </Time>
                <Date>
                    {challengeData.challengeStartdate} ~ {challengeData.challengeEnddate}
                </Date>
            </TimeBox>
            <TodoBox>
                <Todo>
                <img src = './img/new.png' style={{marginRight:'20px'}} /> 챌린지 내용
                    </Todo>
                    <TodoDetail>
                    {challengeData.challengeContent}
                    </TodoDetail>
            </TodoBox>
                <Button>
                    <Link to ="/ChallengeMain">
                        <Text>
                        챌린지 참가하기
                        </Text>
                    </Link>
               </Button>

        </PageWrap>
    );
}

const PageWrap = styled.div`
    width:1000px;
    height:100vh
    flex-direction: column;
    justify-content:center;
`

const Image = styled.div`
    width:1000px;
    height:550px;
    border-radius:20px;
    margin-top:90px;
    overflow:hidden;
`

const Title = styled.div`
    width:700px;
    height:100px;
    margin-top:50px;
    font-size:60px;
    font-weight:800;
    margin-left:80px;
`

const People = styled.div`
    width:500px;
    height:50px;
    margin-top:20px;
    margin-left:80px;
    font-size:40px;
    font-weight:500;
`

const TitleBox = styled.div`
    width:1000px;
    height:300px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
`

const TimeBox = styled.div`
    padding-top:50px;
    width:1000px;
    height:300px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
    box-sizing:border-box;
`

const Time = styled.div`
    width:500px;
    height:50px;
    margin-left:80px;
    font-size:40px;
    font-weight:600;
`

const TodoBox = styled.div`
    padding-top:50px;
    width:1000px;
    height:500px;
    box-sizing:border-box;
`
const Todo = styled.div`
    width:500px;
    height:50px;
    margin-left:80px;
    font-size:40px;
    font-weight:600;
`

const Button = styled.div`
    width:600px;
    height:90px;
    background-color: #6100FF;
    margin-left:200px;
    position: absolute;
    top:90%;
    border-radius:20px;
    padding:20px;
    position:fixed;
    box-sizing:border-box;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Text = styled.div`
    font-size:42px;
    color: white;
    font-weight:800;
    text-align:center;
    text-decoration-line: none;
`

const Date = styled.div`
    width:500px;
    height:50px;
    margin-left:140px;
    font-size:35px;
    font-weight:400;
    margin-top:40px;
`

const TodoDetail = styled.div`
    width:500px;
    height:50px;
    margin-left:140px;
    font-size:35px;
    font-weight:400;
    margin-top:40px;
`

export default ChallengeDetail;
