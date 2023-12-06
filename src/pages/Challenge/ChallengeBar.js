import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import {Link}from 'react-router-dom';
import TopBar2 from '../../components/common/TopBar2';



function ChallengeBar() {
    return (
     <Bar>
    </Bar>
    );
}

const Bar = styled.div`
    width:800px;
    height:50px;
    background-color:black;
    margin-left:100px;
    border-radius:10px;
    margin-top:50px;
`

export default ChallengeBar;