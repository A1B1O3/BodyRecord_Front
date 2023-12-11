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

    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
    
        const accessCode = urlParams.get('accessToken');
    

        localStorage.setItem('accessToken', accessCode);
        const newUrl = window.location.pathname + window.location.hash;
        window.history.replaceState({}, document.title, newUrl);
    
 
        const storedToken = localStorage.getItem('accessToken');

        if (storedToken) {
          setAccessToken(storedToken);

          Navigate('/Main');
        }
          else{
            Navigate('/');
        }
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