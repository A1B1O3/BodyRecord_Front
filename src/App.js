import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import React, {useEffect} from 'react';
import First from './pages/FirstSetting';
import RecordMain from './pages/Record/RecordMain';
import RecordExercise from './pages/Record/RecordExercise';
import RecordBody from './pages/Record/RecordBody';
import logo from "./logo.svg";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import SearchMain from './pages/Search/SearchMain';
import ChallengeMain from './pages/Challenge/ChallengeMain';
import ChallengeList from './pages/Challenge/ChallengeList';
import ChallengeDetail from './pages/Challenge/ChallengeDetail';
import ChallengeReport from './pages/Challenge/ChallengeReport';
import ChallengeAdd from './pages/Challenge/ChallengeAdd';
import ChallengeCam from './pages/Challenge/ChallengeCam';
import ChallengePic from './pages/Challenge/ChallengePic';
import ProfileMain from './pages/Profile/ProfileMain';
import RedirectPage from './pages/RedirectPage';

function App () {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/Main' element={<Main/>} />
      <Route path='/FirstSetting' element={<First/>} />
      <Route path='/RecordMain' element={<RecordMain />} />
      <Route path='/RecordExercise' element={<RecordExercise />} />
      <Route path='/RecordBody' element={<RecordBody />} />
      <Route path='/SearchMain' element={<SearchMain />} />
      <Route path='/ChallengeMain' element={<ChallengeMain />} />
      <Route path='/ChallengeList' element={<ChallengeList />} />
      <Route path='/ChallengeDetail' element={<ChallengeDetail />} />
      <Route path='/ChallengeReport' element={<ChallengeReport />} />
      <Route path='/ChallengeAdd' element={<ChallengeAdd />} />
      <Route path='/ChallengeCam' element={<ChallengeCam />} />
      <Route path='/ChallengePic' element={<ChallengePic />} />
      <Route path='/ProfileMain' element={<ProfileMain />} />
      <Route path="/auth/oauth2/success" element={<RedirectPage />} />
      </Routes>
    </div>
  );
}

export default App;
