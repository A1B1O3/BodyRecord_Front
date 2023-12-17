import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import UserProfile from './UserProfile';
import redSun from '../../asset/redsun.svg';
import suncat from '../../asset/suncat.svg';
import sundog from '../../asset/sundog.svg';
import hammercurl from '../../asset/hammercurl.svg';
import TopBarS2 from '../../components/common/TopBarS2';
import styled from 'styled-components';

const SearchResult = () => {
  const [searchResult, setSearchResult] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 서버에서 데이터를 가져오는 API 엔드포인트 설정
    const apiUrl = `http://localhost:8080/exercise/log/search/body`;

    const queryParams = new URLSearchParams(location.search);
    const minWeight = queryParams.get('minWeight') || '';
    const maxWeight = queryParams.get('maxWeight') || '';
    const minMuscleMass = queryParams.get('minMuscleMass') || '';
    const maxMuscleMass = queryParams.get('maxMuscleMass') || '';
    const minBodyFat = queryParams.get('minBodyFat') || '';
    const maxBodyFat = queryParams.get('maxBodyFat') || '';

    axios.get(apiUrl, {
      params: {
        minWeight,
        maxWeight,
        minMuscleMass,
        maxMuscleMass,
        minBodyFat,
        maxBodyFat
      },
    })
    .then(response => {
      setSearchResult(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error fetching search:', error.message);
    });
}, [location.search]);





  const handleBack = () => {
    navigate('/SearchMain');
  };

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
          src={hammercurl}
          alt="이미지"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
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
  width: 800px;
  height: 500px;
  padding: 10px;
  border: none;
  border-radius: 30px;
  margin: 0 auto 10px;
  margin-left: 30px;
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
`;

const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const UserProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.div`
  font-weight: bold;
`;

const UserContent = styled.p`
  font-size: 24px;
  &:first-child {
    margin-bottom: 3em;
  }
`;

export default SearchResult;