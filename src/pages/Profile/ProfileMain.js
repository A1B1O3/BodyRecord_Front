import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom'
import TopBar8 from '../../components/common/TopBar8';
import styled from 'styled-components';

const ProfileMain = () => {
  let navigate = useNavigate();

  const goToProfileModify = () => {
    navigate('/ProfileModify');
  };

  const goToChallengeMain = () => {
    navigate('/ChallengeMain');
  };

  const logout = () => {
    navigate('/');
  };

  return (
    <Container>
      <TopBar8 />
      <ProfileContent>
        <ProfileImage>
          <ProfileIcon icon={faUser} size="3x" />
        </ProfileImage>
        <ProfileName>
          <h2>닉네임</h2>
        </ProfileName>
        <div className="profile-actions">
          <ProfileActionsButton onClick={goToProfileModify}>
            <FontAwesomeIcon icon={faUserRegular} />
            프로필 수정
          </ProfileActionsButton>
          <ProfileActionsButton onClick={goToChallengeMain}>
            <FontAwesomeIcon icon={faPersonRunning} />
            참여중인 챌린지
          </ProfileActionsButton>
        </div>
      </ProfileContent>
      <Logout onClick={logout}>
        <p>로그아웃</p>
      </Logout>
    </Container>
  );
};


const Container = styled.div`
width: 1000px;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
`;

const ProfileContent = styled.div`
width: 100%;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
`;

const ProfileImage = styled.div`
width: 250px;
height: 250px;
background-color: lightgrey;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;
margin-bottom: 40px;
`;

const ProfileIcon = styled(FontAwesomeIcon)`
color: #000;
`;

const ProfileName = styled.div`
margin-bottom: 150px;
font-weight: bold;
font-size: 30px;
`;

const ProfileActionsButton = styled.button`
margin-bottom: 50px;
border: none;
background-color: white;
font-size: 25px;
font-weight: bold;
display: flex;
align-items: center;
svg {
    margin-right: 30px;
  }
`;

const Logout = styled.div`
text-align: left;
align-self: flex-start;
padding: 20px;
cursor: pointer;
color: grey;
margin-top: auto;
margin-left: 200px;
`;

export default ProfileMain;