import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import RecordMain from './pages/Record/RecordMain';
import RecordExercise from './pages/Record/RecordExercise';
import RecordBody from './pages/Record/RecordBody';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login />} />
        <Route path='/Main' element={<Main />} />
        <Route path='/RecordMain' element={<RecordMain />} />
        <Route path='/RecordExercise' element={<RecordExercise />} />
        <Route path='/RecordBody' element={<RecordBody />} />
      </Routes>
    </div>
  );
}

export default App;
