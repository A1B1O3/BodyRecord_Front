import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import Naverlogin from '../components/common/naverLogin';
import { ReactComponent as BodyRecordsvg} from '../asset/BodyRecord.svg';
import {Link}from 'react-router-dom';

function FirstSetting(){
    return (
      <PageWrap>
        
      </PageWrap>
    );

}

const PageWrap = styled.div`
width: 1000px;
height: 100vh;
display:flex;
justify-content:center; 
`

export default FirstSetting;