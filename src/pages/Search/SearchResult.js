import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './SearchResult.css';
import UserProfile from './UserProfile';
import redSun from '../../asset/redsun.svg';
import suncat from '../../asset/suncat.svg';
import sundog from '../../asset/sundog.svg';

const SearchResult = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/SearchMain');
  };

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
        <div className="user-post">
          <UserProfile username="사용자1" profileImage={redSun} />
        </div>
        <div className="user-post">
          <UserProfile username="사용자2" profileImage={suncat} />
        </div>
        <div className="user-post">
          <UserProfile username="사용자3" profileImage={sundog} />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;