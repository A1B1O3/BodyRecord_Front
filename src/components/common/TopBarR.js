import React from 'react';
import styled from "styled-components";

class TopBarR extends React.Component {
    render() {
        return (
            <Top>
                <TitleContainer>
                    <Title>운동기록</Title>
                </TitleContainer>
            </Top>
        );
    }
}

const Top = styled.div`
    display: flex;
    width: 1000px;
    height: 200px;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: 30px;
        left: 0;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.50);
    }
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-left: 60px;
`;

const Title = styled.span`
    align-self: flex-start;
    font-size: 60px;
    font-weight: bolder;
`;

export default TopBarR;
