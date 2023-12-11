import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TopBarM4 from '../../components/common/TopBarM4';
import styled from 'styled-components';

const ManageChallengeDetail = () => {
  const navigate = useNavigate();
  const { challengeName } = useParams();

  const handleHomeClick = () => {
    navigate('/ManagerMain');
  };

  const handleConfirm = () => {
    navigate('/ManageChallenge');
  };

  const handleDelete = async () => {
    const confirmed = window.confirm('정말로 삭제하시겠습니까?');
    if (confirmed) {
      try {
        const response = await fetch(`/api/challenges/${challengeName}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          alert('삭제되었습니다.');
          navigate('/ManageChallenge');
        } else {
          alert('삭제 실패: ' + response.statusText);
        }
      } catch (error) {
        console.error('삭제 중 에러 발생', error);
        alert('삭제 중 에러 발생: ' + error.message);
      }
    }
  };

  return (
    <ManageChallengeDetailContainer>
      <TopBarM4 />
      <ChallengeDetails>
        <p>제목: {challengeName ? decodeURIComponent(challengeName) : ''}</p>
        <p>기간: 2023.10.02 - 2023.10.31</p>
        <p>내용: 챌린지 내용 설명</p>
      </ChallengeDetails>
      <hr />
      <Buttons>
        <Button confirm onClick={handleConfirm}>확인</Button>
        <Button onClick={handleDelete}>삭제</Button>
      </Buttons>
    </ManageChallengeDetailContainer>
  );
};

const ManageChallengeDetailContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

const ChallengeDetails = styled.div`
  font-size: 40px;
  margin: 50px 70px 500px;
  padding: 50px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 30px;
`;

const Button = styled.button`
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 30px;
  cursor: pointer;
  margin-top: 300px;
  background-color: ${props => props.confirm ? '#00D1FF' : '#6100FF'};
  color: white;
`;

export default ManageChallengeDetail;
