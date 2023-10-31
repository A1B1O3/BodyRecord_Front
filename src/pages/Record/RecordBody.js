import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecordBody.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const RecordBody = () => {
  const navigate = useNavigate();

  const handleSaveClick = () => {
    navigate('/recordmain');
  };

  const handleExerciseClick = () => {
    navigate('/recordexercise');
  };

  return (
    <div className="record-exercise">
      <div className="header">
        <button className="back-button">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <span>기록하기</span>
        <button className="save-button" onClick={handleSaveClick}>
          저장
        </button>
      </div>
      <hr />
      <div className="buttons">
        <button className="purple-button" onClick={handleExerciseClick}>
          운동기록
        </button>
        <button className="purple-button active">신체기록</button>
      </div>
      <hr />
      <div className="record-details">
        <div className="details-section">
          <span>체중</span>
          <input type="number" step="0.1" />
        </div>
        <div className="details-section">
          <span>골격근량</span>
          <input type="number" step="0.1" />
        </div>
        <div className="details-section">
          <span>체지방률</span>
          <input type="number" step="0.1" />
        </div>
      </div>
      <div className="button-section">
        <button className="purple-button">수정</button>
      </div>
    </div>
  );
}

export default RecordBody;
