import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';

const ManageChallengeReportDetail = ({ report }) => {
  const navigate = useNavigate(); 
  const { reportName } = useParams();

  const handleHouseClick = () => {
    navigate('/ManagerMain');
  };

  const handleConfirm = () => {
    navigate('/ManageChallengeReport');
  };

  const handleDelete = () => {
    navigate('/ManageChallengeReport');
  };

  let displayName = reportName ? decodeURIComponent(reportName) : '';
    displayName = displayName.split('님의 신고')[0];

  return (
    <>
      <div className="manage-challenge-report-detail">
        <div className="top-bar">
          <FontAwesomeIcon icon={faHouse} className="icon-house" onClick={handleHouseClick}/>
          <h1 className="title">챌린지 신고 관리</h1>
        </div>
        <hr />
        <div className="report-details">
          <div className="detail-item" style={{ marginTop: '200px' }}>
            <span className="detail-title">신고회원 아이디:</span>
            <span className="detail-content">{displayName}</span>
          </div>
          <div className="detail-item">
            <span className="detail-title">신고 일시:</span>
            <span className="detail-content">2023-10-06</span>
          </div>
          <div className="detail-item">
            <span className="detail-title">신고 카테고리:</span>
            <span className="detail-content"></span>
          </div>
          <div className="detail-item" style={{ marginBottom: '500px' }}>
            <span className="detail-title">신고 내용:</span>
            <span className="detail-content"></span>
          </div>
        </div>
        <hr />
        <div className="buttons">
          <button onClick={handleConfirm} className="confirm-button">신고 승인</button>
          <button onClick={handleDelete} className="delete-button">신고 반려</button>
        </div>
      </div>
      <style>{`
        .manage-challenge-report-detail {
          padding: 20px;
          width: 1000px;
          margin: 0 auto;
        }

        .top-bar {
          display: flex;
          align-items: center;
          position: relative;
        }

        .icon-house {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          font-size: 70px;
          margin-left: 50px;
        }

        .title {
          text-align: center;
          width: 100%;
          font-size: 70px;
          font-weight: bold;
        }

        .report-details {
          margin: 20px 0;
          margin-left: 70px;
          line-height: 1.6;
          font-size: 40px;
        }

        .detail-item {
          margin-bottom: 20px;
        }

        .detail-title {
          font-weight: bold;
          margin-right: 10px;
          font-size: 40px;
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

export default ManageChallengeReportDetail;
