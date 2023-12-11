import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom'
import TopBarP from '../../components/common/TopBarP';
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

  const [profileData, setProfileData] = useState(null);

  const fetchProfileData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/profile');
      const data = await response.json();
      setProfileData(data);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <Container>
    <TopBarP />
    <ProfileContent>
      <ProfileImage>
        {profileData && profileData.profileImage ? (
          <img src={profileData.profileImage} alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
        ) : (
          <ProfileIcon icon={faUser} size="3x" />
        )}
      </ProfileImage>
      <ProfileName>
        <h2>{profileData ? profileData.nickname : '닉네임'}</h2>
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
  }

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
margin-bottom: 20px;
`;

const ProfileIcon = styled(FontAwesomeIcon)`
color: #000;
`;

const ProfileName = styled.div`
margin-bottom: 175px;
font-weight: bold;
font-size: 45px;
`;

const ProfileActionsButton = styled.button`
margin-bottom: 70px;
border: none;
background-color: white;
font-size: 40px;
font-weight: bold;
display: flex;
align-items: center;
svg {
    margin-right: 40px;
  }
`;

const Logout = styled.div`
text-align: left;
align-self: flex-start;
padding: 20px;
cursor: pointer;
color: grey;
font-size: 30px;
margin-top: 200px;
margin-left: 150px;
`;

export default ProfileMain;