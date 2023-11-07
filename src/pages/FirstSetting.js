import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import Naverlogin from '../components/common/naverLogin';
import { ReactComponent as BodyRecordsvg} from '../asset/BodyRecord.svg';
import {Link}from 'react-router-dom';
import TopBar from '../components/common/TopBar';
import ProfileSetting from '../components/common/ProfileSetting';
import ProfileInput from '../components/common/ProfileInput';
import ConfirmButton from '../components/common/ConfirmButton';


function FirstSetting(){
    return (
      <PageWrap>
        <TopBar/>
        <ProfileImg>
        <img src= "img/Group 25.png" />
        </ProfileImg>
        <ProfileSetting/>
        <ConfirmButton/>
      </PageWrap>
    );
}

const PageWrap = styled.div`
width: 1000px;
height: 100vh;
display:flex;
justify-content:center; 

`

const ProfileImg = styled.div`
width: 500px;
height:500px;
position:absolute;
margin-left:50px;
top:22%;
`



export default FirstSetting;