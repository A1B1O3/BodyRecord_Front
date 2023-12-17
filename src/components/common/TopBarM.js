import React from 'react';
import styled from 'styled-components';

class TopBarM extends React.Component {
    render() {
        return (
            <Top>
                <TitleContainer>
                    <Title>
                        <Body>Body</Body><Record>Record</Record>
                    </Title>
                </TitleContainer>
            </Top>
        );
    }
}

const Top = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
    justify-content: center;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const Title = styled.span`
    font-size: 60px;
    font-weight: bold;
    display: flex;
`;

const Body = styled.span`
    color: #00D1FF;
`;

const Record = styled.span`
    color: #6100FF;
`;

export default TopBarM;
