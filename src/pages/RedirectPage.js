import React,{useEffect, useState} from 'react';
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

function RedirectPage() {
    const location = useLocation();

    const Navigate = useNavigate();

    const [accessToken, setAccessToken] = useState('');

    const [isFirst, setIsFirst, setIsNotFirst] = useState('');

    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
    
        const accessCode = urlParams.get('accessToken');

        const refreshCode = urlParams.get('refreshToken');

        const isFirstParam = urlParams.get('isFirst');

        const newUrl = window.location.pathname + window.location.hash;

        //url 삭제
        window.history.replaceState({}, document.title, newUrl);
    
        const storedToken = localStorage.getItem('accessToken');

        const setIsFirst= (isFirstParam === 'true');

        const setIsNotFirst= (isFirstParam === 'false');

        if (storedToken && setIsFirst) {
          setAccessToken(storedToken);

        //회원 아닐시 firstsetting으로 이동
          Navigate('/FirstSetting');
        }

        //회원일 시 Main으로 이동
          else if (storedToken && setIsNotFirst){
            Navigate('/Main');

        } else {
            Navigate('/');
        }

        localStorage.setItem('accessToken', accessCode);
        localStorage.setItem('refreshToken', refreshCode);
        localStorage.setItem('isFist', isFirstParam);
        
      }, []); 


return (
    <PageWrap>
        <div>
            <p>
               리다이렉션중
            </p>
        </div>
    </PageWrap>
)};

  const PageWrap = styled.div`
  width: 1000px;
  height: 100%;
  display:flex;
  justify-content:center; 
  `

export default RedirectPage;