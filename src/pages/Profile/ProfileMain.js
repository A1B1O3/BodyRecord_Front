import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import { useNavigate ,Link} from 'react-router-dom'
import TopBarP from '../../components/common/TopBarP';
import styled from 'styled-components';
import Modal from '../../components/common/Modal';
import axios from 'axios';
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


    
  const [imageData, setImageData] = useState('');

  const [profileData, setProfileData] = useState(null);

  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'http://localhost:8080/member/person';

        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // Decode base64 image data
        if (response.data && response.data.data) {
         
        const base64Image = response.data.data.replace(/^data:image\/jpeg;base64,/, '');

        const decodedImage = atob(base64Image);

        setImageData(decodedImage);

        setProfileData(response.data); 

        console.log('API Response:', response.data);
      } else {
        console.error('Unexpected API response structure:', response.data);
      }
    } catch (error) {
      console.error('Error fetching image data:', error);
    }
  };

    fetchData();
  }, []);

  return (
    <Container>
    <TopBarP />
    <ProfileContent>
      <ProfileImage>
        {imageData && imageData.decodedImage ? (
          <img src={`data:image/jpeg;base64,${imageData.decodedImage}`} 
          alt="Profile" 
          style={{ width: '500px', height: '500px', borderRadius: '50%' }} />
        ) : (
          <img src ={'./img/samyook.png'}
          style={{ width: '500px', 
          height: '500px', 
          borderRadius: '100%' ,
          objectFit: "cover"
        }}  />
        )}
      </ProfileImage>
      <ProfileName>
        <h2>{profileData ? profileData.memberNickname : '삼육이'}</h2>
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
        <Link to ={'/ManagerMain'}>
          <Manager>
          <p>관리자</p>
        </Manager>
        </Link>
        <Modal />
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

const Manager = styled.div`
width:300px;
height:100px;
text-decoration-line: none;
font-size:30px;
color:grey;
margin-right:370px;
top:30px;
text-decoration: none;
`

const ProfileContent = styled.div`
width: 100%;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
`;

const ProfileImage = styled.div`
width: 500px;
height: 500px;

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