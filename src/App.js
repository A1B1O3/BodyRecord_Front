import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import FirstSetting from './pages/FirstSetting';
import RecordMain from './pages/Record/RecordMain';
import RecordExercise from './pages/Record/RecordExercise';
import RecordBody from './pages/Record/RecordBody';
import ModifyRecord from './pages/Record/ModifyRecord';
import BmiPage from './pages/Record/BmiPage';
import SearchMain from './pages/Search/SearchMain';
import SearchResult from './pages/Search/SearchResult';
import ProfileMain from './pages/Profile/ProfileMain';
import ProfileModify from './pages/Profile/ProfileModify';
import ManagerMain from './pages/Manager/ManagerMain';
import ManageMember from './pages/Manager/ManageMember';
import ManageChallenge from './pages/Manager/ManageChallenge';
import ManageChallengeDetail from './pages/Manager/ManageChallengeDetail';
import ManageChallengeReport from './pages/Manager/ManageChallengeReport';
import ManageChallengeReportDetail from './pages/Manager/ManageChallengeReportDetail';
import ManageCertificateReport from './pages/Manager/ManageCertificateReport';
import ManageCertificateReportDetail from './pages/Manager/ManageCertificateReportDetail';
import ManageChallengeCertificate from './pages/Manager/ManageChallengeCertificate';
import ChallengeAdd from './pages/Challenge/ChallengeAdd';
import ChallengeBar from './pages/Challenge/ChallengeBar';
import ChallengeBox from './pages/Challenge/ChallengeBox';
import ChallengeDetail from './pages/Challenge/ChallengeDetail';
import ChallengeList from './pages/Challenge/ChallengeList';
import ChallengeList2 from './pages/Challenge/ChallengeList2';
import ChallengeMain from './pages/Challenge/ChallengeMain';
import ChallengeName from './pages/Challenge/ChallengeName';
import ChallengeReport from './pages/Challenge/ChallengeReport';

import logo from "./logo.svg";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Main' element={<Main />} />
        <Route path='/FirstSetting' element={<FirstSetting />} />
        <Route path='/RecordMain' element={<RecordMain />} />
        <Route path='/RecordExercise/:date' element={<RecordExercise />} />
        <Route path='/RecordExercise' element={<RecordExercise />} />
        <Route path='/RecordBody' element={<RecordBody />} />
        <Route path='/ModifyRecord' element={<ModifyRecord />} />
        <Route path='/BmiPage' element={<BmiPage />} />
        <Route path='/SearchMain' element={<SearchMain />} />
        <Route path='/SearchResult' element={<SearchResult />} />
        <Route path='/ProfileMain' element={<ProfileMain />} />
        <Route path='/ProfileModify' element={<ProfileModify />} />
        <Route path='/ManagerMain' element={<ManagerMain />} />
        <Route path='/ManageMember' element={<ManageMember />} />
        <Route path='/ManageChallenge' element={<ManageChallenge />} />
        <Route path="/ManageChallengeDetail/:challengeName" element={<ManageChallengeDetail />} />
        <Route path='/ManageChallengeReport' element={<ManageChallengeReport />} />
        <Route path='/ManageChallengeReportDetail/:reportName' element={<ManageChallengeReportDetail />} />
        <Route path="/ManageChallengeDetail/:challengeName" element={<ManageChallengeDetail />} />
        <Route path='/ManageCertificateReport' element={<ManageCertificateReport />} />
        <Route path="/ManageCertificateReportDetail/:reportName" element={<ManageCertificateReportDetail />} />
        <Route path='/ManageChallengeCertificate' element={<ManageChallengeCertificate />} />
        <Route path='/ChallengeAdd' element={<ChallengeAdd />} />
        <Route path='/ChallengeBar' element={<ChallengeBar />} />
        <Route path='/ChallengeBox' element={<ChallengeBox />} />
        <Route path='/ChallengeDetail' element={<ChallengeDetail />} />
        <Route path='/ChallengeList' element={<ChallengeList />} />
        <Route path='/ChallengeList2' element={<ChallengeList2 />} />
        <Route path='/ChallengeMain' element={<ChallengeMain />} />
        <Route path='/ChallengeName' element={<ChallengeName />} />
        <Route path='/ChallengeReport' element={<ChallengeReport />} />

      </Routes>
    </div>
  );
}

export default App;
