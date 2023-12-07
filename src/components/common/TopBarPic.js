import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect'
import { ReactComponent as Backsvg } from '../../asset/Back.svg';
import {Link}from 'react-router-dom';

class TopBarPic extends React.Component {
    render(){
        return (
            <Top>
                <Link to ="/ChallengeMain">
                    <BackIcon>
                        <Backsvg/>
                    </BackIcon>
                </Link>
                    <Title>
                        챌린지 인증하기
                    </Title>
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

const Title = styled.span`
    margin-top: 62px;
    margin-left: 230px;
    justify-content: center
    width:364px;
    height:80px;
    font-size:60px;
    font-weight:bold
`

export default TopBarPic;