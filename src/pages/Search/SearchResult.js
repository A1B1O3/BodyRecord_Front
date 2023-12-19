import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import UserProfile from './UserProfile';
import redSun from '../../asset/redsun.svg';
import suncat from '../../asset/suncat.svg';
import sundog from '../../asset/sundog.svg';
import picture from '../../asset/picture.png';
import TopBarS2 from '../../components/common/TopBarS2';
import styled from 'styled-components';

const SearchResult = () => {

  const navigate = useNavigate();

  const staticUserPosts = [
    {
      username: '사용자1',
      profileImage: redSun,
      content: '운동시간 : 45분\n레그프레스 3세트 12회\n레그레이즈 3세트 12회\n레그익스텐션 3세트 12회\n인클라인 체스트 프레스 3세트 12회',
    },
    {
      username: '사용자2',
      profileImage: suncat,
      content: '운동시간 : 60분\n러닝 5km\n레그익스텐션 3세트 12회\n인클라인 체스트 프레스 3세트 12회',
    },
    {
      username: '사용자3',
      profileImage: sundog,
      content: (
        <img
          src={picture}
          alt="이미지"
          style={{ Width: '150px', height: '400px' }}
        />
      ),
    },
  ];

  return (
    <StyledSearchResultContainer>
      <TopBarS2 />
      <ContentContainer>
        {staticUserPosts.map((post, index) => (
          <UserPost key={index}>
            <UserContent>
              {typeof post.content === 'string' ? post.content.split('\n').map((line, lineIndex) => {
                const isWorkoutTime = line.includes('운동시간');
                return (
                  <p key={lineIndex} className={isWorkoutTime ? 'workout-time' : ''}>
                    {line}
                  </p>
                );
              }) : post.content}
            </UserContent>
            <UserProfileWrapper>
              <UserProfileImage src={post.profileImage} alt="프로필 이미지" />
              <Username>{post.username}</Username>
            </UserProfileWrapper>
          </UserPost>
        ))}
      </ContentContainer>
    </StyledSearchResultContainer>
  );
};

const StyledSearchResultContainer = styled.div`
  width: 1000px;
  padding: 50px;
  text-align: center;
`;

const ContentContainer = styled.div`
  overflow-y: scroll;
`;

const UserPost = styled.div`
  width: 780px;
  height: 550px; /* 높이를 늘렸습니다. */
  padding: 10px;
  border: none;
  border-radius: 30px;
  margin: 0 auto 10px;
  margin-left: 100px;
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  flex-direction: column;
  align-items: flex-start;
  font-size: 40px; /* 글씨 크기를 크게 조정했습니다. */
`;

const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const UserProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.div`
  font-weight: bold;
`;

const UserContent = styled.p`
  font-size: 30px;
  font-weight:bold;
  margin-left: 80px;
`;

export default SearchResult;