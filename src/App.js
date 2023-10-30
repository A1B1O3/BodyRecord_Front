import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import React, {useEffect} from 'react';


function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/Main' element={<Main></Main>}></Route>
      </Routes>
    </div>
  );
}

export default App;
