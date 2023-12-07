import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPersonRunning, faTriangleExclamation, faUserGear } from '@fortawesome/free-solid-svg-icons';

const ManagerMain = () => {
  let navigate = useNavigate();

  const ManageMember = () => navigate('/ManageMember');
  const ManageChallenge = () => navigate('/ManageChallenge');
  const ManageChallengeReport = () => navigate('/ManageChallengeReport');
  const ManageCertificateReport = () => navigate('/ManageCertificateReport');
  const ManageChallengeCertificate = () => navigate('/ManageChallengeCertificate');
  const logout = () => navigate('/');

  return (
    <>
      <style>{cssStyles}</style>
      <div className="manager-main">
        <h1 className="title">
          <span className="title-blue">Body</span><span className="title-purple">Record</span>
        </h1>
        <div className="icon-grid">
          <div className="icon-box" onClick={ManageMember}>
            <FontAwesomeIcon icon={faUser} style={{ fontSize: '5rem', marginTop: '50px' }} />
            <p>회원 관리</p>
          </div>
          <div className="icon-box" onClick={ManageChallenge}>
            <FontAwesomeIcon icon={faPersonRunning} style={{ fontSize: '5rem', marginTop: '50px' }} />
            <p>챌린지 관리</p>
          </div>
          <div className="icon-box" onClick={ManageChallengeReport}>
            <FontAwesomeIcon icon={faTriangleExclamation} style={{ fontSize: '5rem', marginTop: '50px' }} />
            <p>챌린지 신고 관리</p>
          </div>
          <div className="icon-box" onClick={ManageCertificateReport}>
            <FontAwesomeIcon icon={faTriangleExclamation} style={{ fontSize: '5rem', marginTop: '50px' }} />
            <p>인증 신고 관리</p>
          </div>
          <div className="icon-box" onClick={ManageChallengeCertificate}>
            <FontAwesomeIcon icon={faUserGear} style={{ fontSize: '5rem', marginTop: '50px' }} />
            <p>챌린지 인증 관리</p>
          </div>
          <div className="icon-box">
          </div>
        </div>
        <button className="logout-button" onClick={logout}>로그아웃</button>
      </div>
    </>
  );
};

const cssStyles = `
.manager-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 1000px;
  margin: 0 auto;
}

.title {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 70px;
  margin-bottom: 50px;
  font-size: 70px;
  font-weight: bold;
}

.title-blue {
  color: #00D1FF;
}

.title-purple {
  color: #6100FF;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(150px, auto);
  align-items: start;
  width: 100%;
  margin-top: 0;
}

.icon-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  cursor: pointer;
  text-align: center;
  width: 100%;
  height: 400px;
}

.icon-box p {
  margin-top: 70px;
  font-size: 50px;
  font-weight: bolder;
}

.logout-button {
  font-size: 25px;
  border: none;
  background-color: white;
  color: grey;
  cursor: pointer;
  margin-top: 200px;
}
`;

export default ManagerMain;
export { cssStyles };
