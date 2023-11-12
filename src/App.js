import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import RecordMain from './pages/Record/RecordMain';
import RecordExercise from './pages/Record/RecordExercise';
import RecordBody from './pages/Record/RecordBody';
import SearchMain from './pages/Search/SearchMain';
import SearchResult from './pages/Search/SearchResult';
import logo from "./logo.svg";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login />} />
        <Route path='/Main' element={<Main />} />
        <Route path='/RecordMain' element={<RecordMain />} />
        <Route path='/RecordExercise' element={<RecordExercise />} />
        <Route path='/RecordBody' element={<RecordBody />} />
        <Route path='/SearchMain' element={<SearchMain />} />
        <Route path='/SearchResult' element={<SearchResult />} />
      </Routes>
    </div>
  );
}

export default App;
