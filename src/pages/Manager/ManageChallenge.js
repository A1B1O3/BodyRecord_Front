import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ManageChallenge = () => {
  const navigate = useNavigate();
  const challenges = [
    { number: '9', name: '새벽 6시 기상' },
    { number: '8', name: '아침 7시 기상' },
    { number: '7', name: '새벽 5시 기상' },
    { number: '6', name: '새벽 4시 기상' },
    { number: '5', name: '2km 달리기' },
    { number: '4', name: '신고 카테고리' },
    { number: '3', name: '새벽 6시 기상' },
    { number: '2', name: '새벽 5시 기상' },
    { number: '1', name: '아침 7시 기상' },
  ];

  const handleHomeClick = () => {
    navigate('/ManagerMain');
  };

  return (
    <>
      <div className="manage-challenge">
        <div className="top-bar">
        <FontAwesomeIcon icon={faHouse} className="icon-house" onClick={handleHomeClick} />
          <h1 className="title">챌린지 관리</h1>
        </div>
        <div className="list-header">
          <span className="challenge-number">번호</span>
          <span className="challenge-name">현재 생성된 챌린지</span>
        </div>
        <ul className="challenge-list">
          {challenges.map((challenge) => (
            <Link to={`/ManageChallengeDetail/${encodeURIComponent(challenge.name)}`} key={challenge.number}>
              <li className="challenge-item">
                <span className="challenge-number">{challenge.number}</span>
                <span className="challenge-name">{challenge.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <style>{`
        .manage-challenge {
          width: 1000px;
          padding: 20px;
          margin: 0 auto;
        }
        
        .top-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .icon-house {
          font-size: 70px;
          margin-left: 50px;
        }
        
        .title {
          font-size: 70px;
          font-weight: bold;
        }
        
        .challenge-item-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .list-header {
          display: flex;
          justify-content: space-between;
          background-color: lightgrey;
          padding: 10px 20px;
          margin-top: 100px;
          margin-bottom: 0px;
          height: 100px;
          font-size: 30px;
          align-items: center;
        }
        
        .challenge-list {
          list-style-type: none;
          padding: 30px;
          padding-top: 0;
          margin: 0px;
          overflow-y: auto;
          font-size: 30px;
        }
        
        .challenge-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          border-bottom: 1px solid #ccc;
        }
        
        .challenge-number {
          width: 100px;
          height: 100px;
          margin-top: 30px;
          font-size: 40px;
          text-align: left;
        }
        
        .challenge-name {
          flex-grow: 1;
          height: 100px;
          margin-top: 30px;
          font-size: 40px;
          text-align: center;
          margin-right: 400px;
        }
      `}</style>
    </>
  );
};

export default ManageChallenge;