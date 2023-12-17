import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopBarM5 from '../../components/common/TopBarM5';
import styled from 'styled-components';

const ManageChallengeReport = () => {
  const navigate = useNavigate();
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  let reports = [
    { number: 1, name: '닉네임1 님의 신고' },
    { number: 2, name: '닉네임2 님의 신고' },
    { number: 3, name: '닉네임3 님의 신고' },
    { number: 4, name: '닉네임4 님의 신고' },
    { number: 5, name: '닉네임5 님의 신고' },
    { number: 6, name: '닉네임6 님의 신고' },
    { number: 7, name: '닉네임7 님의 신고' },
  ];

  reports = reports.sort((a, b) => b.number - a.number);

  const pageCount = Math.ceil(reports.length / itemsPerPage);

  const indexOfLastReport = currentPage * itemsPerPage;
  const indexOfFirstReport = indexOfLastReport - itemsPerPage;
  const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleHomeClick = () => {
    navigate('/ManagerMain');
  };

  return (
    <ManageReportContainer>
      <TopBarM5 />
      <ReportHeader>
        <ReportNumber>번호</ReportNumber>
        <ReportCategory>신고 카테고리</ReportCategory>
      </ReportHeader>
      <ReportList>
        {currentReports.map((report) => (
          <ReportItemLink to={`/ManageChallengeReportDetail/${encodeURIComponent(report.name)}`} key={report.name}>
            <ReportItem>
              <ReportNumber>{report.number}</ReportNumber>
              <ReportCategory>{report.name}</ReportCategory>
            </ReportItem>
          </ReportItemLink>
        ))}
      </ReportList>
      <PageNumberContainer>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((pageNumber) => (
          <PageNumberBox
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            isActive={currentPage === pageNumber}
          >
            {pageNumber}
          </PageNumberBox>
        ))}
      </PageNumberContainer>
    </ManageReportContainer>
  );
};

const ManageReportContainer = styled.div`
  width: 1000px;
  padding: 20px;
  margin: 0 auto;
`;

const ReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: lightgrey;
  padding: 10px 20px;
  margin-top: -15px;
  margin-bottom: 0px;
  height: 100px;
  font-size: 30px;
  align-items: center;
`;

const ReportNumber = styled.span`
  width: 120px;
  font-size: 40px;
  text-align: left;
`;

const ReportCategory = styled.span`
  flex-grow: 1;
  font-size: 40px;
  text-align: center;
  margin-right: 300px;
`;

const ReportList = styled.ul`
  list-style-type: none;
  padding: 30px;
  padding-top: 0;
  margin: 0px;
  overflow-y: auto;
  font-size: 40px;
`;

const ReportItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
  border-bottom: 1px solid #ccc;
`;

const ReportItemLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const PageNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumberBox = styled.div`
  width: 50px;
  cursor: pointer;
  text-align: center;
  margin: 0 5px;
  margin-top: 200px;
  padding: 10px;
  font-size: 40px;
  background-color: lightgrey;
`;

export default ManageChallengeReport;
