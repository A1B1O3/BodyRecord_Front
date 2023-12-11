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
    justify-content: center; // 가운데 정렬을 위해 추가
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; // 상단 바 전체를 가운데로 정렬하기 위해 추가
    width: 100%; // 전체 너비를 사용하도록 변경
    height: 100%; // 컨테이너 높이를 Top과 같게 설정
`;

const Title = styled.span`
    font-size: 60px;
    font-weight: bold;
    display: flex; // span 내부의 요소들을 flexbox로 정렬하기 위해 추가
`;

const Body = styled.span`
    color: #00D1FF; // 하늘색
`;

const Record = styled.span`
    color: #6100FF; // 보라색
`;

export default TopBarM;
