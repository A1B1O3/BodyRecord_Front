import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link}from 'react-router-dom';
import TopBar2 from '../../components/common/TopBar2';



function ChallengeName() {
    return (
     <Name>
        박준식 님의 챌린지 참여중
     </Name>
    );
}

const Name = styled.div`
    width:700px;
    height:70px;
    font-size:30px;
    font-weight:700;
    margin-left:100px;
    margin-top:50px;
`

export default ChallengeName;