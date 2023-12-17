import React from 'react';
import { useMediaQuery } from "react-responsive"
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect'
import { ReactComponent as Backsvg } from '../../asset/Back.svg';
import {Link}from 'react-router-dom';

class TopBarR2 extends React.Component {

    render() {
        return (
            <Top>
                <Link to="/RecordMain">
                    <BackIcon>
                        <Backsvg />
                    </BackIcon>
                </Link>
                <Title>기록하기</Title>
            </Top>
        );
    }
}

const Top = styled.div`
    display: flex;
    align-items: center;
    width: 1000px;
    height: 200px;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: 10px;
        left: 0;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.50);
    }
`;

const BackIcon = styled.div`
    margin-left: 13px;
    margin-bottom: 35px;
    width: 70px;
    height: 70px;
`;

const Title = styled.span`
    margin-left: 290px;
    margin-bottom: 30px;
    width: 364px;
    height: 80px;
    font-size: 60px;
    font-weight: bold;
`;

export default TopBarR2;