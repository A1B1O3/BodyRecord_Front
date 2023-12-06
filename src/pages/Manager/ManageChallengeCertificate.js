import React, { useState } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import TopBar7 from '../../components/common/TopBar7';

const challengeData = [
  { 
    id: 1, 
    number: 7, 
    nickname: 'User7', 
    profileImage: '../../asset/redsun.svg', 
    image: '../../asset/hammercurl.svg' 
  },
  { 
    id: 2, 
    number: 6, 
    nickname: 'User6', 
    profileImage: '../../asset/suncat.svg', 
    image: '../../asset/hammercurl.svg' 
  },
  { 
    id: 3, 
    number: 5, 
    nickname: 'User5', 
    profileImage: '../../asset/redsun.svg', 
    image: '../../asset/hammercurl.svg' 
  },
  { 
    id: 4, 
    number: 4, 
    nickname: 'User4', 
    profileImage: '../../asset/suncat.svg', 
    image: '../../asset/hammercurl.svg' 
  },
];

function ManageChallengeCertificate() {
  const [challenges, setChallenges] = useState(challengeData);
  const removeItem = (id) => {
    setChallenges(challenges.filter(challenge => challenge.id !== id));
  };
  const fetchData = () => {
    
  };

  return (
    <Container>
      <TopBar7 />
      <InfiniteScroll
        dataLength={challengeData.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={<p style={{ textAlign: 'center' }}>더 이상 내용이 없습니다.</p>}
      >
        {challenges.map((challenge, index) => (
          <ChallengeItem key={challenge.id}>
            <ChallengeItemHeader>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Number>{challenge.number}</Number>
                <ProfileImage src={challenge.profileImage} />
                <Nickname>{challenge.nickname}</Nickname>
              </div>
              <DeleteButton onClick={() => removeItem(challenge.id)}>삭제</DeleteButton>
            </ChallengeItemHeader>
            <ChallengeItemBody>
              <ChallengeImage src={challenge.image} />
            </ChallengeItemBody>
          </ChallengeItem>
        ))}
      </InfiniteScroll>
    </Container>
  );
}
const Container = styled.div`
  width: 1000px;
  margin: auto;
`;

const ChallengeItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  border: none;
  overflow: hidden;
`;

const ChallengeItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const ChallengeItemBody = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const Number = styled.span`
  font-size: 1.5rem;
  margin-left: 50px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const Nickname = styled.span`
  font-size: 1.5rem;
`;

const DeleteButton = styled.button`
  background-color: #6100FF;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin-right: 150px;
`;

const ChallengeImage = styled.img`
  width: 90%;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ManageChallengeCertificate;
