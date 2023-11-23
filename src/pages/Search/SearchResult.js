// SearchResult.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './SearchResult.css';
import UserProfile from './UserProfile';
import redSun from '../../asset/redsun.svg';
import suncat from '../../asset/suncat.svg';
import sundog from '../../asset/sundog.svg';
import hammercurl from '../../asset/hammercurl.svg';

const SearchResult = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/SearchMain');
  };

  const userPosts = [
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
    <div className="search-result-container">
      <div className="header">
        <div className="back-icon" onClick={handleBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="search-result-title">검색결과</div>
      </div>
      <hr className="separator" />
      <div className="content-container">
        {userPosts.map((post, index) => (
          <div className="user-post" key={index}>
            <div className="user-content">
              {typeof post.content === 'string' ? post.content.split('\n').map((line, lineIndex) => {
                const isWorkoutTime = line.includes('운동시간');
                return (
                  <p key={lineIndex} className={isWorkoutTime ? 'workout-time' : ''}>
                    {line}
                  </p>
                );
              }) : post.content}
            </div>
            <UserProfile username={post.username} profileImage={post.profileImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;