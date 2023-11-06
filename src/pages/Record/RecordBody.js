import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecordBody.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const RecordBody = () => {
  const navigate = useNavigate();

  const handleSaveClick = () => {
    navigate('/RecordMain');
  };

  const handleExerciseClick = () => {
    navigate('/RecordExercise');
  };

  const handleBodyClick = () => {
    navigate('/RecordBody');
  };

  const handleModifyClick = () => {
    navigate('/RecordMain');
  }

  const [weight, setWeight] = useState(70.0);
  const [skeletalMuscle, setSkeletalMuscle] = useState(30.0);
  const [bodyFat, setBodyFat] = useState(20.0);

  const generateOptions = (start, end, step) => {
    const options = [];
    for (let i = start; i <= end; i += step) {
      options.push(i.toFixed(1));
    }
    return options;
  };

  return (
    <div className="record-exercise">
      <div className="header">
        <button className="back-button">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <span className="title">기록하기</span>
        <button className="save-button" onClick={handleSaveClick}>저장</button>
      </div>
      <hr />
      <div className="buttons">
        <button className="exercise-button" onClick={handleExerciseClick}>운동기록</button>
        <button className="body-record-button" onClick={handleBodyClick}>신체기록</button>
      </div>
      <hr />
      <div className="record-details">
        <div className="details-section">
          <span>체중</span>
          <div className="value-selector">
            <select value={weight} onChange={(e) => setWeight(parseFloat(e.target.value).toFixed(1))}>
              {generateOptions(0, 200, 0.1).map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="details-section">
          <span>골격근량</span>
          <div className="value-selector">
            <select value={skeletalMuscle} onChange={(e) => setSkeletalMuscle(parseFloat(e.target.value).toFixed(1))}>
              {generateOptions(0, 100, 0.1).map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="details-section">
          <span>체지방률</span>
          <div className="value-selector">
            <select value={bodyFat} onChange={(e) => setBodyFat(parseFloat(e.target.value).toFixed(1))}>
              {generateOptions(0, 100, 0.1).map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="button-section">
        <button className="modify-button" onClick={handleModifyClick}>수정</button>
      </div>
    </div>
  );
};

export default RecordBody;
