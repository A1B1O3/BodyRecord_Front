import React from 'react';
import styled from 'styled-components';

const UserProfile = ({ username, profileImage }) => (
  <UserProfileWrapper>
    <ProfileImage src={profileImage} alt="프로필 이미지" />
    <Username>{username}</Username>
  </UserProfileWrapper>
);

const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

const Username = styled.span`

`;

export default UserProfile;
