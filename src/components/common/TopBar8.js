import React from 'react';
import styled from "styled-components";

class TopBar8 extends React.Component {
    render() {
        return (
            <Top>
                <TitleContainer>
                    <Title>프로필</Title>
                </TitleContainer>
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

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 64px;
    margin-left: 100px;
`;

const Title = styled.span`
    font-size: 60px;
    font-weight: bold;
`;

export default TopBar8;
