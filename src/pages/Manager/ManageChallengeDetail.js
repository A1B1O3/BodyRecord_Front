import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';

const ManageChallengeDetail = () => {
  const navigate = useNavigate();
  const { challengeName } = useParams();

  const handleConfirm = () => {
    navigate('/ManageChallenge');
  };

  const handleDelete = () => {
    navigate('/ManageChallenge');
  };

  const handleHomeClick = () => {
    navigate('/ManagerMain');
  };

  return (
    <>
      <div className="manage-challenge-detail">
        <div className="top-bar">
          <FontAwesomeIcon icon={faHouse} className="icon-house" onClick={handleHomeClick} />
          <h1 className="title">상세 조회 관리</h1>
        </div>
        <hr />
        <div className="challenge-details">
          <p>제목: {challengeName ? decodeURIComponent(challengeName) : ''}</p>
          <p>기간: 2023.10.02 - 2023.10.31</p>
          <p>내용: 챌린지 내용 설명</p>
        </div>
        <hr />
        <div className="buttons">
          <button onClick={handleConfirm} className="confirm-button">확인</button>
          <button onClick={handleDelete} className="delete-button">삭제</button>
        </div>
      </div>
      <style>{`
        .manage-challenge-detail {
          width: 1000px;
          margin: 0 auto;
          padding: 20px;
        }

        .top-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .icon-house {
          font-size: 70px;
          cursor: pointer;
        }

        .title {
          font-weight: bold;
          font-size: 70px;
        }

        .challenge-details {
          font-size: 40px;
          margin: 50px 70px 500px;
          padding: 50px;
        }

        .buttons {
          display: flex;
          justify-content: center;
          padding: 20px;
          gap: 30px;
        }

        .confirm-button, .delete-button {
          width: 150px;
          padding: 10px;
          border: none;
          border-radius: 10px;
          font-size: 30px;
          cursor: pointer;
          margin-top: 300px;
        }

        .confirm-button {
          background-color: #00D1FF;
          color: white;
        }

        .delete-button {
          background-color: #6100FF;
          color: white;
        }
      `}</style>
    </>
  );
};

export default ManageChallengeDetail;
