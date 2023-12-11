import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPersonRunning, faTriangleExclamation, faUserGear } from '@fortawesome/free-solid-svg-icons';
import TopBarM from '../../components/common/TopBarM';
import styled from 'styled-components';

const ManagerMain = () => {
  let navigate = useNavigate();

  const ManageMember = () => navigate('/ManageMember');
  const ManageChallenge = () => navigate('/ManageChallenge');
  const ManageChallengeReport = () => navigate('/ManageChallengeReport');
  const ManageCertificateReport = () => navigate('/ManageCertificateReport');
  const ManageChallengeCertificate = () => navigate('/ManageChallengeCertificate');
  const logout = () => navigate('/');

  return (
    <ManagerMainContainer>
      <TopBarM />
        <IconGrid>
          <IconBox onClick={ManageMember}>
            <FontAwesomeIcon icon={faUser} size="5x" />
            <IconText>회원 관리</IconText>
          </IconBox>
          <IconBox onClick={ManageChallenge}>
            <FontAwesomeIcon icon={faPersonRunning} size="5x" />
            <IconText>챌린지 관리</IconText>
          </IconBox>
          <IconBox onClick={ManageChallengeReport}>
            <FontAwesomeIcon icon={faTriangleExclamation} size="5x" />
            <IconText>챌린지 신고 관리</IconText>
          </IconBox>
          <IconBox onClick={ManageCertificateReport}>
            <FontAwesomeIcon icon={faTriangleExclamation} size="5x" />
            <IconText>인증 신고 관리</IconText>
          </IconBox>
          <IconBox onClick={ManageChallengeCertificate}>
            <FontAwesomeIcon icon={faUserGear} size="5x" />
            <IconText>챌린지 인증 관리</IconText>
          </IconBox>
          <IconBox />
        </IconGrid>
      <LogoutButton onClick={logout}>로그아웃</LogoutButton>
    </ManagerMainContainer>
  );
};

const ManagerMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 1000px;
  margin: 0 auto;
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(150px, auto);
  align-items: start;
  width: 100%;
  margin-top: 0;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  cursor: pointer;
  text-align: center;
  width: 100%;
  height: 400px;
`;

const IconText = styled.p`
  margin-top: 70px;
  font-size: 50px;
  font-weight: bolder;
`;

const LogoutButton = styled.button`
  font-size: 25px;
  border: none;
  background-color: white;
  color: grey;
  cursor: pointer;
  margin-top: 200px;
`;

export default ManagerMain;