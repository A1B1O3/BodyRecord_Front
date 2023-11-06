import React, { useState } from 'react';
import './RecordExercise.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faTrash,
  faPlus,
  faMinus,
  faShare,
  faImage,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const RecordExercise = () => {
  const [isExerciseSelected, setExerciseSelected] = useState(true);
  const [sets, setSets] = useState([{ exerciseName: '', weight: '', reps: '' }]);
  const [exerciseName, setExerciseName] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const navigate = useNavigate();

  const handleSaveClick = () => {
    navigate('/RecordMain');
  };

  const handleAddSet = () => {
    setSets([...sets, { exerciseName: '', weight: '', reps: '' }]);
  };

  const handleRemoveSet = (index) => {
    const updatedSets = [...sets];
    updatedSets.splice(index, 1);
    setSets(updatedSets);
  };

  const handleExerciseClick = () => {
    navigate('/RecordExercise');
  };

  const handleBodyClick = () => {
    navigate('/RecordBody');
  };

  const adjustTime = (field, increment) => {
    if (field === 'hours') {
      setHours(hours + increment);
    } else if (field === 'minutes') {
      setMinutes(minutes + increment);
    }
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
      <div className="buttons-center">
        <button className="record-button" onClick={handleExerciseClick}>운동 기록</button>
        <button className="body-button" onClick={handleBodyClick}>신체 기록</button>
      </div>
      <hr />
      <div className="input-label">
        <label>운동 이름</label>
        <div className="exercise-name-input">
          <input type="text" placeholder="운동 이름" value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
          />
          <FontAwesomeIcon icon={faTrash} onClick={() => setExerciseName('')} />
        </div>
      </div>
      {sets.map((set, index) => (
  <div key={index} className="sets">
    <label>세트</label>
    <div className="input-label2">
      <span>
        <div className="number-box">{index + 1}</div>
      </span>
    </div>

    <div className="input-label2">
      <label>무게</label>
      <input
        type="text"
        value={set.weight}
        onChange={(e) => {
          const updatedSets = [...sets];
          updatedSets[index].weight = e.target.value;
          setSets(updatedSets);
        }}
        className="input-field"
      />
    </div>

    <div className="input-label2">
      <label>횟수</label>
      <input
        type="text"
        value={set.reps}
        onChange={(e) => {
          const updatedSets = [...sets];
          updatedSets[index].reps = e.target.value;
          setSets(updatedSets);
        }}
        className="input-field"
      />
    </div>
  </div>
))}

      <div className="button-section">
        <button className="add-set-button" onClick={handleAddSet}>
          <FontAwesomeIcon icon={faPlus} /> 세트 추가
        </button>
        {sets.length > 1 && (
          <button className="remove-set-button" onClick={() => handleRemoveSet(sets.length - 1)}>
            <FontAwesomeIcon icon={faMinus} /> 세트 삭제
          </button>
        )}
      </div>
      <hr />
    
      <div className="exercise-time">
        <span>운동 시간</span>
        <div className="time-inputs">
          <button className="time-adjust" onClick={() => adjustTime('hours', -1)} disabled={hours <= 0}>-</button>
          <input type="number" value={hours} onChange={(e) => setHours(Math.max(0, parseInt(e.target.value, 10)))} />
          <span className="time-text">시간</span>
          <button className="time-adjust" onClick={() => adjustTime('hours', 1)}>+</button>
        </div>
        <span className="time-text">:</span>
        <div className="time-inputs">
          <button className="time-adjust" onClick={() => adjustTime('minutes', -1)} disabled={minutes <= 0}>-</button>
          <input type="number" value={minutes} onChange={(e) => setMinutes(Math.max(0, parseInt(e.target.value, 10)))} />
          <span className="time-text">분</span>
          <button className="time-adjust" onClick={() => adjustTime('minutes', 1)}>+</button>
        </div>
      </div>

      <div className="upload-share-buttons">
        <div className="button-container">
        <span className="picture-text">사진 업로드</span>
          <button className="upload-button">
            <FontAwesomeIcon icon={faImage} />
          </button>
        </div>
        <div className="button-container">
        <span className="share-text">공유하기</span>
          <button className="share-button">
            <FontAwesomeIcon icon={faShare} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordExercise;
