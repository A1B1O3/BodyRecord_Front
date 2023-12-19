import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import TopBarM9 from '../../components/common/TopBarM9';
import styled from 'styled-components';
import redSun from '../../asset/redsun.svg';
import suncat from '../../asset/suncat.svg';
import sundog from '../../asset/sundog.svg';
import clock from '../../asset/clock.png';
import exercise from '../../asset/exercise.png';
import picture from '../../asset/picture.png';
import sunrise from '../../asset/sunrise.png';

const challengeData = [
  { 
    id: 1, 
    number: 7, 
    nickname: 'User7', 
    profileImage: redSun,
    image: clock,
  },
  { 
    id: 2, 
    number: 6, 
    nickname: 'User6', 
    profileImage: suncat,
    image: sunrise,
  },
  { 
    id: 3, 
    number: 5, 
    nickname: 'User5', 
    profileImage: sundog,
    image: exercise,
  },
  { 
    id: 4, 
    number: 4, 
    nickname: 'User4', 
    profileImage: redSun,
    image: picture,
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
      <TopBarM9 />
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
  margin-top: 70px;
`;

const ChallengeItemBody = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const Number = styled.span`
  font-size: 50px;
  border: 1px solid lightgrey;
  width: 50px;
  height: 50px; // Added height to match the width for centering
  display: flex; // Added for centering
  align-items: center; // Added for vertical centering
  justify-content: center; // Added for horizontal centering
  background-color: lightgrey;
  margin-right: 15px; // Adjusted margin to space out the elements
  text-align: center; // Added for centering text
  margin-left: 100px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px; // Adjusted margin to space out the elements
`;

const Nickname = styled.span`
  font-size: 35px;
  font-weight: bold;
  margin-right: 15px; // Adjusted margin to space out the elements
`;

const DeleteButton = styled.button`
  background-color: #6100FF;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  margin-right: 100px;
  font-size: 40px;
  font-weight: bold;
`;

const ChallengeImage = styled.img`
  width: 80%;
  max-height: 500px; // Set a maximum height
  height: auto; // Height will scale automatically
  object-fit: cover;
  border-radius: 20px;
`;

export default ManageChallengeCertificate;