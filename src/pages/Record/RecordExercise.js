import React, { useState } from 'react';
import './RecordExercise.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faTrash, faPlus, faMinus, faShare, faImage } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const RecordExercise = () => {
  const [isExerciseSelected, setExerciseSelected] = useState(true);
  const [sets, setSets] = useState([{ exerciseName: '', weight: '', reps: '' }]);
  const [exerciseName, setExerciseName] = useState('');
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

  const handleBodyClick = () => {
    navigate('/RecordBody');
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
      <div className="buttons-center">
        <button
          className={`record-button ${isExerciseSelected ? 'selected' : ''}`}
          onClick={() => setExerciseSelected(true)}
        >
          운동 기록
        </button>
        <button className="purple-button active" onClick={handleBodyClick}>
          신체 기록
        </button>
      </div>
      <hr />
      <div className="input-label">
        <label>운동 이름</label>
        <div className="exercise-name-input">
          <input
            type="text"
            placeholder="운동 이름"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
          />
          <FontAwesomeIcon icon={faTrash} onClick={() => setExerciseName('')} />
        </div>
      </div>
      {sets.map((set, index) => (
  <div key={index} className="sets">
    <div className="input-label">
      <span>세트 {index + 1}</span>
    </div>
    <div className="input-label">
      <label>무게</label>
      <input
        type="text"
        value={set.weight}
        onChange={(e) => {
          const updatedSets = [...sets];
          updatedSets[index].weight = e.target.value;
          setSets(updatedSets);
        }}
      />
    </div>
    <div className="input-label">
      <label>횟수</label>
      <input
        type="text"
        value={set.reps}
        onChange={(e) => {
          const updatedSets = [...sets];
          updatedSets[index].reps = e.target.value;
          setSets(updatedSets);
        }}
      />
    </div>
    <button className="add-set" onClick={handleAddSet}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
    {sets.length > 1 && (
      <button className="remove-set" onClick={() => handleRemoveSet(index)}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
    )}
  </div>
))}
      <hr />
      <div className="exercise-time">
        <span>운동시간</span>
        <input type="number" placeholder="시간" />
        <input type="number" placeholder="분" />
        <input type="number" placeholder="초" />
      </div>
      <div className="upload-share-buttons">
        <button className="upload-button">
          <FontAwesomeIcon icon={faImage} />
        </button>
        <button className="share-button">
          <FontAwesomeIcon icon={faShare} />
        </button>
      </div>
    </div>
  );
}

export default RecordExercise;
