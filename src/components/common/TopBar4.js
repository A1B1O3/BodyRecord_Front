import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect'
import { ReactComponent as Backsvg } from '../../asset/Back.svg';
import {Link}from 'react-router-dom';

class TopBar4 extends React.Component {
    render(){
        return (
            <Top>
                <Link to ="/ChallengeList">
                    <BackIcon>
                        <Backsvg/>
                    </BackIcon>
                </Link>
                <Link to = '/ChallengeReport'>
                    <Title>
                        <img src = './img/report.png'/>
                    </Title>
                </Link>
            </Top>
        );
    }
}

const Top = styled.div`
    display:flex;
    width: 1000px;
    height: 200px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
`

const BackIcon = styled.div`
    margin-top: 64px;
    margin-left: 30px;
    width: 70px;
    height: 70px;
`

const Title = styled.div`
    margin-top: 80px;
    margin-left: 790px;
    justify-content: center
    width:100px;
    height:100px;
`

export default TopBar4;