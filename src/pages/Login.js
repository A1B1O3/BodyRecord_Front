import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import Naverlogin from '../components/common/naverLogin';
import { ReactComponent as BodyRecordsvg} from '../asset/BodyRecord.svg';
import {Link}from 'react-router-dom';

function Login(){
    return (
      <PageWrap>
        <MainBox>
          <BodyRecord>
            <BodyRecordsvg />
          </BodyRecord>
          <Link to ='Main' >
            <Naverlogin/>
            </Link>
           <Kakaologin>
              <img src= "img/kakaologin.png" />
           </Kakaologin>
        </MainBox>
      </PageWrap>
    );

}

const MainBox = styled.div`
margin-top:50%;
width: 600px;
height: 1000px;
background-color:pnk;
`

const Kakaologin = styled.div`
width: 600px;
height:90px;
`

const PageWrap = styled.div`
width: 1000px;
height: 100vh;
display:flex;
justify-content:center; 
`

const BodyRecord = styled.div`
padding-bottom:500px;
height:80px;
background-color:yellow;
`
export default Login;
