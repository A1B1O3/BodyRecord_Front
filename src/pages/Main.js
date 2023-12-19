import React,{useState, useRef, useEffect } from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import Naverlogin from '../components/common/naverLogin';
import { ReactComponent as BodyRecordsvg} from '../asset/BodyRecord.svg';
import {Link}from 'react-router-dom';
import ChallengeNew from '../components/common/ChallengeNew';
import Community from '../components/common/Community';
import Modal from '../components/common/Modal';
import { useNavigate,useLocation  } from 'react-router-dom';
import axios from 'axios';
function Main() {

    const [memberNickname, setMemberNickname] = useState('');
    const accessToken = localStorage.getItem('accessToken'); 

    useEffect(() => {
        fetchData();
      }, []); 

      const fetchData = () => {

        axios.get('http://localhost:3000/member', {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        })
        .then(response => {
            const data = Object.values(response.data);
            setMemberNickname(data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      };

    return (
        <PageWrap>
            <Top>
            <Title>
            <TopBar>
             <BodyRecordsvg />
             </TopBar>
                </Title>
            </Top>
            <Title1>
               신규 챌린지
            </Title1>
            <ChallengeNew/>
            <Title1>
               커뮤니티
            </Title1>
            <Community/>
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
    margin-left: 253px;
    justify-content: center;
`

const Title1 = styled.div`
    margin-left: 60px;
    margin-top: 120px;
    font-size:55px;
    font-weight:800;
    `

export default Main;