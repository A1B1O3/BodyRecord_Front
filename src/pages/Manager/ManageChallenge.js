import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopBarM3 from '../../components/common/TopBarM3';
import styled from 'styled-components';

const ManageChallenge = () => {
  const navigate = useNavigate();
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const challenges = [
    { number: '9', name: '새벽 6시 기상' },
    { number: '8', name: '아침 7시 기상' },
    { number: '7', name: '새벽 5시 기상' },
    { number: '6', name: '새벽 4시 기상' },
    { number: '5', name: '2km 달리기' },
    { number: '4', name: '신고 카테고리' },
    { number: '3', name: '새벽 6시 기상' },
    { number: '2', name: '새벽 5시 기상' },
    { number: '1', name: '아침 7시 기상' },
  ];

  challenges.sort((a, b) => parseInt(b.number) - parseInt(a.number));

  const pageCount = Math.ceil(challenges.length / itemsPerPage);
  const indexOfLastChallenge = currentPage * itemsPerPage;
  const indexOfFirstChallenge = indexOfLastChallenge - itemsPerPage;
  const currentChallenges = challenges.slice(indexOfFirstChallenge, indexOfLastChallenge);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleHomeClick = () => {
    navigate('/ManagerMain');
  };

  return (
    <ManageChallengeContainer>
      <TopBarM3 />
      <ListHeader>
        <ChallengeNumberHeader>번호</ChallengeNumberHeader>
        <ChallengeNameHeader>현재 생성된 챌린지</ChallengeNameHeader>
      </ListHeader>
      <ChallengeList>
        {currentChallenges.map((challenge) => (
          <ChallengeItemLink to={`/ManageChallengeDetail/${encodeURIComponent(challenge.name)}`} key={challenge.number}>
            <ChallengeItem>
              <ChallengeNumber>{challenge.number}</ChallengeNumber>
              <ChallengeName>{challenge.name}</ChallengeName>
            </ChallengeItem>
          </ChallengeItemLink>
        ))}
      </ChallengeList>
      <PageNumberContainer>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((pageNumber) => (
          <PageNumberBox
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            isActive={currentPage === pageNumber}
          >
            {pageNumber}
          </PageNumberBox>
        ))}
      </PageNumberContainer>
    </ManageChallengeContainer>
  );
};

const ManageChallengeContainer = styled.div`
  width: 1000px;
  padding: 20px;
  margin: 0 auto;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: lightgrey;
  padding: 10px 20px;
  margin-top: -15px;
  margin-bottom: 0px;
  height: 100px;
  font-size: 30px;
  align-items: center;
`;

const ChallengeList = styled.ul`
  list-style-type: none;
  padding: 30px;
  padding-top: 0;
  margin: 0px;
  overflow-y: auto;
  font-size: 30px;
`;

const ChallengeItemLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const ChallengeItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const ChallengeNumber = styled.span`
  width: 100px;
  height: 100px;
  margin-top: 30px;
  font-size: 40px;
  text-align: left;
`;

const ChallengeNumberHeader = styled.span`
  width: 100px;
  font-size: 40px;
  text-align: left;
`;

const ChallengeName = styled.span`
  flex-grow: 1;
  height: 100px;
  margin-top: 30px;
  font-size: 40px;
  text-align: center;
  margin-right: 400px;
`;

const ChallengeNameHeader = styled.span`
  flex-grow: 1;
  font-size: 40px;
  text-align: center;
  margin-right: 400px;
`;

const PageNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumberBox = styled.div`
  width: 50px;
  cursor: pointer;
  text-align: center;
  margin: 0 5px;
  padding: 10px;
  font-size: 30px;
  background-color: ${props => props.isActive ? 'darkgrey' : 'lightgrey'};
  &:hover {
    background-color: darkgrey;
  }
`;

export default ManageChallenge;