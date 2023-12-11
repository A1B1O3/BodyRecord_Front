import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TopBarM6 from '../../components/common/TopBarM6';
import styled from 'styled-components';

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
      <ManageChallengeReportDetailContainer>
        <TopBarM6 />
        <ReportDetails>
          <DetailItem style={{ marginTop: '200px' }}>
            <DetailTitle>신고회원 아이디:</DetailTitle>
            <DetailContent>{displayName}</DetailContent>
          </DetailItem>
          <DetailItem>
            <DetailTitle>신고 일시:</DetailTitle>
            <DetailContent>2023-10-06</DetailContent>
          </DetailItem>
          <DetailItem>
            <DetailTitle>신고 카테고리:</DetailTitle>
            <DetailContent></DetailContent>
          </DetailItem>
          <DetailItem style={{ marginBottom: '500px' }}>
            <DetailTitle>신고 내용:</DetailTitle>
            <DetailContent></DetailContent>
          </DetailItem>
        </ReportDetails>
      <Separator />
      <Buttons>
        <ConfirmButton onClick={handleConfirm}>신고 승인</ConfirmButton>
        <DeleteButton onClick={handleDelete}>신고 반려</DeleteButton>
      </Buttons>
    </ManageChallengeReportDetailContainer>
  );
};
      
const ManageChallengeReportDetailContainer = styled.div`
  padding: 20px;
  width: 1000px;
  margin: 0 auto;
`;

const Separator = styled.hr`
  margin-top: 20px;
`;

const ReportDetails = styled.div`
  margin: 20px 0;
  margin-left: 70px;
  line-height: 1.6;
  font-size: 40px;
`;

const DetailItem = styled.div`
  margin-bottom: 20px;
`;

const DetailTitle = styled.span`
  font-weight: bold;
  margin-right: 10px;
  font-size: 40px;
`;

const DetailContent = styled.span`
  font-size: 40px;
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
  color: white;
`;

const ConfirmButton = styled(Button)`
  background-color: #00D1FF;
`;

const DeleteButton = styled(Button)`
  background-color: #6100FF;
`;

export default ManageChallengeReportDetail;