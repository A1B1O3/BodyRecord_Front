import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModifyRecord.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faShare } from '@fortawesome/free-solid-svg-icons';
import hammercurl from '../../asset/hammercurl.svg';

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
  };

  const [exerciseName, setExerciseName] = useState('해머컬');
  const [weights, setWeights] = useState(['5kg', '5kg', '8kg']);
  const [reps, setReps] = useState(['12', '10', '8']);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [defaultImage, setDefaultImage] = useState(hammercurl);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="record-exercise">
      <div className="header">
        <button className="back-button" onClick={handleModifyClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <span className="title">기록</span>
        <button className="save-button" onClick={handleSaveClick}>
          수정
        </button>
      </div>
      <hr />
      <div className="buttons">
        <button className="record-button" onClick={handleExerciseClick}>
          운동 기록
        </button>
        <button className="body-button" onClick={handleBodyClick}>
          신체 기록
        </button>
      </div>
      <hr />
      <div className="input-label">
        <div className="exercise-date">2023.11.05</div>
        <div className="exercise-name-input">
          <input
            type="text"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
          />
        </div>
      </div>

      {weights.map((weight, index) => (
        <div key={index} className="sets">
          <div className="input-label2">
            {index === 0 && <label>세트</label>}
            <span>
              <div className="number-box">{index + 1}</div>
            </span>
          </div>

          <div className="input-label2">
            {index === 0 && <label>무게</label>}
            <input
              type="text"
              className="input-field"
              placeholder="무게"
              value={weight}
              onChange={(e) => {
                const updatedWeights = [...weights];
                updatedWeights[index] = e.target.value;
                setWeights(updatedWeights);
              }}
            />
          </div>

          <div className="input-label2">
            {index === 0 && <label>횟수</label>}
            <input
              type="text"
              className="input-field"
              placeholder="횟수"
              value={reps[index]}
              onChange={(e) => {
                const updatedReps = [...reps];
                updatedReps[index] = e.target.value;
                setReps(updatedReps);
              }}
            />
          </div>
        </div>
      ))}

      <span className="exercise-text">운동 시간</span>
      <div className="exercise-time">
        <div className="name-container">
          <input
            type="text"
            className="input-field-time"
            defaultValue="10분 23초"
          />
        </div>
      </div>

      <div className="upload-share-buttons">
        <div className="button-container">
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileInputChange}
          />
          <label htmlFor="fileInput" className="upload-button" onClick={handleFileUpload}>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="선택한 이미지"
                className="selected-image"
              />
            )}
            {!selectedImage && (
              <img
                src={defaultImage}
                alt="기본 이미지"
                className="default-image"
              />
            )}
          </label>
        </div>
        <div className="button-container share-button-container">
          <span className="share-text">공유하기</span>
          <button className="share-button">
            <FontAwesomeIcon icon={faShare} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordBody;
