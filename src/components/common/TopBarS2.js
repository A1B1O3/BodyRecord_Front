import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect'
import { ReactComponent as Backsvg } from '../../asset/Back.svg';
import {Link}from 'react-router-dom';

class TopBarS2 extends React.Component {
    render() {
        return (
            <Top>
                <Link to="/SearchMain">
                    <BackIcon>
                        <Backsvg/>
                    </BackIcon>
                </Link>
                <Title>검색결과</Title>
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
    margin-top: 24px;
    margin-left: -12px;
    width: 70px;
    height: 70px;
`

const Title = styled.span`
    margin-top: 24px;
    margin-left: 320px;
    justify-content: center
    width:364px;
    height:80px;
    font-size:60px;
    font-weight:bold;
`

export default TopBarS2;