import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserGroup, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ManageMember = () => {
  const navigate = useNavigate();
  const members = Array.from({ length: 467 }, (_, index) => 467 - index);

  const handleHouseClick = () => {
    navigate('/ManagerMain');  
  };

  return (
    <>
      <div className="manage-member">
        <div className="top-bar">
          <FontAwesomeIcon icon={faHouse} size="3x" className="icon-left" onClick={handleHouseClick} />
          <h1 className="title">회원 관리</h1>
        </div>
        <hr />
        <div className="circles-container">
          <div className="circle-container">
            <div className="circle">
              <FontAwesomeIcon icon={faUser} size="4x" />
              <div className="sub-circle">5</div>
            </div>
            <p className="circle-text">신규회원</p>
          </div>
          <div className="circle-container">
            <div className="circle">
              <FontAwesomeIcon icon={faUserGroup} size="4x" />
              <div className="sub-circle">467</div>
            </div>
            <p className="circle-text">전체회원</p>
          </div>
        </div>
        <div className="list-header">
          <span className="number">번호</span>
          <span className="nickname">닉네임</span>
        </div>
        <ul className="member-list">
          {members.map((number) => (
            <li key={number}>
              <span className="number">{number}</span>
              <span className="nickname">닉네임{number}</span>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        .manage-member {
          width: 1000px;
          margin: 0 auto;
        }

        .top-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 0 10px;
        }

        .title {
          font-size: 50px;
          font-weight: bold;
        }

        .circles-container {
          display: flex;
          justify-content: space-around;
          padding: 20px;
          margin-top: 100px;
        }

        .circle-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .circle {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border: 2px solid blue;
        }

        .sub-circle {
          position: absolute;
          top: 20px;
          right: -10px;
          background-color: blue;
          color: white;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          font-size: 30px;
        }

        .circle-text {
          padding-top: 10px;
          font-size: 50px;
          font-weight: bolder;
        }

        .list-header, .member-list li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          margin: 0 20px;
          font-size: 50px;
        }

        .list-header {
          background-color: lightgrey;
          margin-top: 150px;
          padding: 10px 20px;
        }

        .member-list li {
          background-color: white;
          margin-top: 30px;
          border-bottom: 1px solid #ccc;
        }

        .member-list {
          list-style-type: none;
          padding: 0;
          max-height: 600px;
          overflow-y: auto;
        }

        .number, .nickname {
          font-size: 40px;
        }

        .nickname {
          margin-left: 200px;
          text-align: left;
          flex: 1;
        }

        .number {
          width: 100px;
        }

        .icon-left {
          margin-top: 30px;
          position: absolute;
          top: 20px;
          left: 30px;
        }

      `}</style>
    </>
  );
};

export default ManageMember;
