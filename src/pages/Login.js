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
          <Link to ="/FirstSetting" >
            <img src = "img/google.png"
            style ={{marginLeft:"20px",
            marginTop:"500px"}} />
          </Link>
        </MainBox>
      </PageWrap>
    );
}

const MainBox = styled.div`
margin-top:30%;
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
height: 100%;
display:flex;
justify-content:center; 
`

const BodyRecord = styled.div`
padding-bottom:500px;
height:95px;

`
export default Login;