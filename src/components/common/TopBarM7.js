import React from 'react';
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';
import { ReactComponent as Homesvg } from '../../asset/Home.svg';
import { Link } from 'react-router-dom';

class TopBarM7 extends React.Component {
    render(){
        return (
            <Top>
                <Link to="/ManagerMain">
                    <HomeIcon>
                        <Homesvg />
                    </HomeIcon>
                </Link>
                <Title>
                    인증 신고 관리
                </Title>
            </Top>
        );
    }
}

const Top = styled.div`
    display: flex;
    width: 1000px;
    height: 200px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
`;

const HomeIcon = styled(Homesvg)`
    margin-top: 64px;
    margin-left: 30px;
    width: 70px;
    height: 70px;
`;

const Title = styled.span`
    margin-top: 45px;
    margin-left: 200px;
    justify-content: center;
    width: 400px;
    height: 80px;
    font-size: 60px;
    font-weight: bold;
`;

export default TopBarM7;
