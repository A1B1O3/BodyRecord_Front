import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faMinus, faPlus, faImage } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import TopBarR2 from '../../components/common/TopBarR2';
import styled from 'styled-components';
import ExercisePage from './ExercisePage';

const RecordExercise = () => {
  const [sets, setSets] = useState([{ exerciseName: '', weight: '', reps: '' }]);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [saveConfirmation, setSaveConfirmation] = useState('');
  const navigate = useNavigate();
  const params = useParams();
  const { date } = params;

  const [exerciseRecords, setExerciseRecords] = useState(null);
      

  const accessToken = localStorage.getItem('accessToken');
  console.log('Access Token:', accessToken);

  useEffect(() => {

  const postExerciseLog = (exerciseData) => {
    const apiUrl = 'http://localhost:8080/exercise/log';
    
    axios.post(apiUrl, exerciseData, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log('Exercise log created:', response.data);

    })
    .catch(error => {
      console.error('Error creating exercise log:', error);
    });
  };
}, []);


  
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

  const handleExerciseClick = () => {
    navigate('/RecordExercise');
  };

  const handleBodyClick = () => {
    navigate('/RecordBody');
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

  const handleShare = () => {
    // 공유 로직 구현
  };

  const handleSave = () => {
    // TODO: Implement your save logic here
    // For example, you might want to send a POST request to your backend to save the data

    // After saving, alert the user
    alert('저장되었습니다.');
  };

  const formatDate = (dateString) => {
    if (!dateString) {
      return '날짜 없음';
    }
    return dateString.replace(/-/g, '.');
  };
    

  return (
    <RecordExerciseContainer>
      <TopBarR2 />
      <ButtonsContainer>
        <RecordButton onClick={handleExerciseClick}>운동 기록</RecordButton>
        <BodyButton onClick={handleBodyClick}>신체 기록</BodyButton>
      </ButtonsContainer>
      <HorizontalRule />
      <DateContainer>
        <h1>{formatDate(date)}</h1>
      </DateContainer>
      <ExercisePage sets={sets} setSets={setSets} />
      <TimeContainer>
      <TimeLabel>운동 시간</TimeLabel>
      <TimeBlockContainer>
        <TimeBlock>
          <TimeAdjustButton onClick={() => adjustMinutes(-1)} disabled={minutes === 0}>
            <FontAwesomeIcon icon={faMinus} />
          </TimeAdjustButton>
          <TimeInput
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
          />
          <TimeAdjustButton onClick={() => adjustMinutes(1)}>
            <FontAwesomeIcon icon={faPlus} />
          </TimeAdjustButton>
        </TimeBlock>
        <TimeColon>:</TimeColon>
        <TimeBlock>
          <TimeAdjustButton onClick={() => adjustSeconds(-1)} disabled={seconds === 0}>
            <FontAwesomeIcon icon={faMinus} />
          </TimeAdjustButton>
          <TimeInput
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(Number(e.target.value))}
          />
          <TimeAdjustButton onClick={() => adjustSeconds(1)}>
            <FontAwesomeIcon icon={faPlus} />
          </TimeAdjustButton>
        </TimeBlock>
      </TimeBlockContainer>
    </TimeContainer>
    <UploadShareButtons>
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileInputChange}
        id="fileInput"
      />
      <ButtonContainer>
        <PictureText>사진 업로드</PictureText>
        <UploadButton htmlFor="fileInput" onClick={handleFileUpload}>
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" style={{ width: '100%', height: '100%', borderRadius: '20%' }} />
          ) : (
            <FontAwesomeIcon icon={faImage} />
          )}
        </UploadButton>
      </ButtonContainer>

      <ShareButtonContainer>
        <ShareText>공유하기</ShareText>
        <ShareButton onClick={handleShare}>
          <FontAwesomeIcon icon={faShare} />
        </ShareButton>
      </ShareButtonContainer>
    </UploadShareButtons>

    <SaveButtonContainer>
      <SaveButton onClick={handleSave}>저장</SaveButton>
    </SaveButtonContainer>
    </RecordExerciseContainer>
  );
};

const RecordExerciseContainer = styled.div`
  width: 1000px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const RecordButton = styled.button`
  width: 400px;
  height: 100px;
  background: white;
  color: #6100FF;
  border: none;
  font-size: 40px;
  font-weight: 1000;
  padding: 10px;
  border-radius: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 5px solid #6100FF;
  margin-right: 10px;
`;

const BodyButton = styled(RecordButton)`
  margin-left: 10px;
  border: none;
`;

const DateContainer = styled.div`
  color: #6100FF;
  text-align: center;
  margin-top: 20px;
  font-size: 25px;
`;

const TimeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeLabel = styled.div`
  align-self: flex-start;
  font-size: 20px;
  color: #888;
  margin-bottom: 10px;
`;

const TimeInput = styled.input`
  padding: 0 5px;
  font-size: 30px;
  width: 60px;
  text-align: center;
  border: none;
  background: transparent;
`;

const TimeBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const TimeBlock = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  margin: 0 5px;
  font-size: 30px;
  font-weight: bold;
`;

const TimeAdjustButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 80px;
  height: 70px;
  padding: 10px;
  font-size: 30px;
`;

const TimeColon = styled.span`
  font-size: 30px;
  padding: 0 5px;
`;

const HorizontalRule = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background-color: #ddd;
`;

const UploadButton = styled.label`
  width: 230px;
  height: 230px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
  cursor: pointer;
  margin: auto;
`;

const PictureText = styled.span`
  align-self: flex-start;
  font-size: 20px;
  color: #888;
  margin-bottom: 5px;
  margin-top: 50px;
`;

const ShareButton = styled.button`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const ShareText = styled.span`
  align-self: flex-end;
  font-size: 20px;
  color: #888;
  margin-bottom: 5px;
`;

const UploadShareButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  margin-left: 200px;
`;

const ShareButtonContainer = styled(ButtonContainer)`
  margin-top: 40px;
  margin-right: 260px;
`;

const SaveButton = styled.button`
  width: 200px;
  height: 80px;
  background-color: #6100FF;
  color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 20px;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 50px;
`;

export default RecordExercise;
