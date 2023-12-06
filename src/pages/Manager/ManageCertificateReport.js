import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const ManageCertificateReport = () => {
  const navigate = useNavigate();
  let reports = [
    { number: 1, name: '닉네임1 님의 신고' },
    { number: 2, name: '닉네임2 님의 신고' },
    { number: 3, name: '닉네임3 님의 신고' },
    { number: 4, name: '닉네임4 님의 신고' },
    { number: 5, name: '닉네임5 님의 신고' },
    { number: 6, name: '닉네임6 님의 신고' },
    { number: 7, name: '닉네임7 님의 신고' },
  ];

  const handleHomeClick = () => {
    navigate('/ManagerMain');
  };

  reports = reports.sort((a, b) => b.number - a.number);

  return (
    <>
    <div className="manage-report">
      <div className="top-bar">
      <FontAwesomeIcon icon={faHouse} className="icon-house" onClick={handleHomeClick} />
        <h1 className="title">인증 신고 관리</h1>
      </div>
      <div className="report-header">
        <span className="report-number">번호</span>
        <span className="report-category">신고 카테고리</span>
      </div>
      <ul className="report-list">
      {reports.map((report) => (
        <Link to={`/ManageCertificateReportDetail/${encodeURIComponent(report.name)}`} key={report.name}>
            <li className="report-item">
            <span className="report-number">{report.number}</span>
            <span className="report-category">{report.name}</span>
            </li>
        </Link>
      ))}
      </ul>
    </div>
    <style>{`
      .manage-report {
        width: 1000px;
        padding: 20px;
        margin: 0 auto;
      }
      
      .top-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-bottom: 20px;
      }
      
      .icon-house {
        font-size: 70px;
        margin-left: 50px;
      }
      
      .title {
        font-size: 70px;
        font-weight: bold;
      }

      .report-item-link {
        text-decoration: none;
        color: inherit;
        display: block;
      }
      
      .report-header {
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
      
      .report-list {
        list-style-type: none;
        padding: 30px;
        padding-top: 0;
        margin: 0px;
        overflow-y: auto;
        font-size: 30px;
      }
      
      .report-list li {
        display: flex;
        justify-content: space-between;
        padding: 15px 0;
        border-bottom: 1px solid #ccc;
      }

      .report-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
      }
      
      .report-number {
        width: 100px;
        height: 100px;
        margin-top: 30px;
        font-size: 40px;
        text-align: left;
        text-decoration: none;
        color: black;
      }
      
      .report-category {
        flex-grow: 1;
        height: 100px;
        margin-top: 30px;
        font-size: 40px;
        text-align: center;
        margin-right: 400px;
        text-decoration: none;
        color: black;
      }

      .report-list .report-item a {
        text-decoration: none;
        color: black;
      }

      .report-number, .report-category {
        text-decoration: none;
        color: black;
      }

      .report-list .report-item a,
      .report-list .report-item a:link,
      .report-list .report-item a:visited,
      .report-list .report-item a:hover,
      .report-list .report-item a:active {
        text-decoration: none;
        color: black;
      }
      
    `}</style>
    </>
  );
};

export default ManageCertificateReport;
