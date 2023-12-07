import React, { useState, useRef, useEffect } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';

const RecordExercise = () => {
  const [isExerciseSelected, setExerciseSelected] = useState(true);
  const [sets, setSets] = useState([{ exerciseName: '', weight: '', reps: '' }]);
  const [exerciseName, setExerciseName] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const params = useParams();
  const { date } = params;
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const currentDate = date || new Date().toISOString().split('T')[0];
    setSelectedDate(currentDate);
  }, [date]);  

  const handleSaveClick = () => {
    navigate('/RecordMain');
  };

  const handleAddSet = () => {
    setSets(sets => [...sets, { exerciseName: '', weight: '', reps: '' }]);
  };

  const handleRemoveSet = (index) => {
    setSets(sets => sets.filter((_, idx) => idx !== index));
  };

  const handleAddExercise = () => {
    const newExercise = {
      exerciseName: '',
      sets: [{ weight: '', reps: '' }]
    };
    setSets([...sets, newExercise]);
  };
  
  const handleExerciseClick = () => {
    navigate('/RecordExercise');
  };

  const handleBodyClick = () => {
    navigate('/RecordBody');
  };

  const handleDateSelect = (date) => {
    const timezoneOffset = date.getTimezoneOffset() * 60000;
    const localDate = new Date(date.getTime() - timezoneOffset);
    const dateStr = localDate.toISOString().split('T')[0];
    setSelectedDate(dateStr);
  };  

  const adjustMinutes = (increment) => {
    setMinutes((prevMinutes) => Math.max(0, prevMinutes + increment));
  };

  const adjustSeconds = (increment) => {
    setSeconds((prevSeconds) => {
      let newSeconds = prevSeconds + increment;

      if (newSeconds >= 60) {
        adjustMinutes(1);
        newSeconds = 0;
      } else if (newSeconds < 0) {
        adjustMinutes(-1);
        newSeconds = 59;
      }

      return newSeconds;
    });
  };

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
        <button className="back-button" onClick={() => navigate(-1)} aria-label="뒤로 가기">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <span className="title">기록하기</span>
        <button className="save-button" onClick={handleSaveClick} aria-label="저장">저장</button>
      </div>
      <hr />
      <div className="buttons">
        <button className="record-button" onClick={handleExerciseClick}>운동 기록</button>
        <button className="body-button" onClick={handleBodyClick}>신체 기록</button>
      </div>
      <hr />
      <div className="date">
        <h1>{date}</h1>
      </div>
      <div className="input-label">
        <label>운동 이름</label>
        <div className="exercise-name-input">
          <input type="text" placeholder="운동 이름" value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
          />
          <FontAwesomeIcon icon={faTrash} onClick={() => setExerciseName('')} />
        </div>
      </div>
      <div className="sets-header">
        <div className="header-label">세트</div>
        <div className="header-label">무게</div>
        <div className="header-label">횟수</div>
      </div>

      {sets.map((set, index) => (
        <div key={index} className="set-inputs">
          <div className="set-number">{index + 1}</div>
          <input type="number" className="weight-input" value={set.weight} />
          <input type="number" className="reps-input" value={set.reps} />
        </div>
      ))}

      <div className="button-section">
        <button className="remove-set-button" onClick={() => handleRemoveSet(sets.length - 1)} disabled={sets.length <= 1}>
          <FontAwesomeIcon icon={faMinus} /> 세트 삭제
        </button>
        <button className="add-set-button" onClick={handleAddSet}>
          <FontAwesomeIcon icon={faPlus} /> 세트 추가
        </button>
      </div>
      <div className="exercise-time-container">
      <hr/>
      <div className="exercise-add">
        <button onClick={handleAddExercise}>⊕ 운동 추가</button>
      </div>

      <div className="time-container">
      <div className="time-block">
        <button className="time-adjust" onClick={() => adjustMinutes(-1)} disabled={minutes === 0}>
          <FontAwesomeIcon icon={faMinus} style={{ color: 'black' }} />
        </button>
        <span className="time-text">{minutes} 분</span>
        <button className="time-adjust" onClick={() => adjustMinutes(1)}>
          <FontAwesomeIcon icon={faPlus} style={{ color: 'black' }} />
        </button>
      </div>
      <span className="time-colon">:</span>
      <div className="time-block">
        <button className="time-adjust" onClick={() => adjustSeconds(-1)} disabled={seconds === 0}>
          <FontAwesomeIcon icon={faMinus} style={{ color: 'black' }} />
        </button>
        <span className="time-text">{seconds} 초</span>
        <button className="time-adjust" onClick={() => adjustSeconds(1)}>
          <FontAwesomeIcon icon={faPlus} style={{ color: 'black' }} />
        </button>
      </div>
    </div>
    </div>

      <div className="upload-share-buttons">
        <div className="button-container">
          <span className="picture-text">사진 업로드</span>
          <input type="file" id="fileInput" style={{ display: "none" }} ref={fileInputRef} onChange={handleFileInputChange} />
          <label htmlFor="fileInput" className="upload-button">
            <FontAwesomeIcon icon={faImage} />
            {selectedImage && (
              <img src={selectedImage} alt="선택한 이미지" className="selected-image" />
            )}
          </label>
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
