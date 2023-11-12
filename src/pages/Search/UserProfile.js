import React from 'react';
import './UserProfile.css';

const UserProfile = ({ username, profileImage }) => (
  <div className="user-profile">
    <img src={profileImage} alt="프로필 이미지" className="profile-image" />
    <span className="username">{username}</span>
  </div>
);

export default UserProfile;
