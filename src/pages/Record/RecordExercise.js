import React, { useState, useRef, useEffect } from 'react';
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
  const navigate = useNavigate();
  const params = useParams();
  const { date } = params;

  useEffect(() => {
    if (!date) {
      const currentDate = new Date().toISOString().split('T')[0];
      navigate(`/RecordExercise/${currentDate}`);
    }
  }, [date, navigate]);  

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

  return (
    <RecordExerciseContainer>
      <TopBarR2 />
      <ButtonsContainer>
        <RecordButton onClick={handleExerciseClick}>운동 기록</RecordButton>
        <BodyButton onClick={handleBodyClick}>신체 기록</BodyButton>
      </ButtonsContainer>
      <HorizontalRule />
      <DateContainer>
        <h1>{date}</h1>
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
    <ButtonContainer>
      <PictureText>사진 업로드</PictureText>
      <UploadButton htmlFor="fileInput">
        <FontAwesomeIcon icon={faImage} />
        {selectedImage && (
          <img src={selectedImage} alt="Selected preview" style={{ width: '100px', height: '100px' }} />
        )}
      </UploadButton>
    </ButtonContainer>
    <ButtonContainer>
      <ShareText>공유하기</ShareText>
      <ShareButton onClick={handleFileUpload}>
        <FontAwesomeIcon icon={faShare} />
      </ShareButton>
    </ButtonContainer>
  </UploadShareButtons>
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
  margin-top: 50px;
  font-size: 25px;
`;

const TimeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 시간 요소를 가로 중앙에 배치 */
`;

const TimeLabel = styled.div`
  align-self: flex-start; /* 레이블을 컨테이너 왼쪽에 배치 */
  font-size: 20px; /* 레이블의 글씨 크기를 작게 조정 */
  color: #888; /* 글씨 색상을 연하게 조정 */
  margin-bottom: 10px; /* 레이블과 버튼 사이의 여백 */
`;

const TimeInput = styled.input`
  padding: 0 5px;
  font-size: 30px;
  width: 60px; // You can adjust the width as needed
  text-align: center;
  border: none;
  background: transparent;
`;

const TimeBlockContainer = styled.div`
  display: flex;
  justify-content: center; // 내부 요소들 중앙에 배치
  align-items: center;
  gap: 50px; // 분과 초 사이 간격 추가
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
  width: 80px; // Make the buttons wider
  height: 70px; // Make the buttons taller
  padding: 10px;
  font-size: 30px;
`;

const TimeColon = styled.span`
  font-size: 30px;
  padding: 0 5px;
`;

const HorizontalRule = styled.hr`
  width: 100%; // 전체 너비를 사용하도록 설정합니다.
  border: none;
  height: 1px;
  background-color: #ddd; // 선의 색상을 설정합니다.
`;

const UploadShareButtons = styled.div`
  display: flex;
  justify-content: center; // 내부 요소들을 중앙에 배치하여 버튼 사이의 간격을 줄입니다.
  align-items: center;
  width: 100%;
  gap: 250px; // 버튼 사이의 간격을 설정합니다.
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; // 요소들을 수직으로 쌓습니다.
  align-items: center; // 요소들을 가로축 중앙에 배치합니다.
  margin: 0; // 필요에 따라 마진을 조정합니다.
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
  margin: auto; // 버튼을 중앙에 배치
`;

const PictureText = styled.span`
  align-self: flex-start; // 텍스트를 왼쪽 상단에 배치합니다.
  font-size: 20px;
  color: #888;
  margin-bottom: 5px; // 버튼 위에 위치
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
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5); // 그림자 효과 추가
  cursor: pointer;
`;

const ShareText = styled.span`
  align-self: flex-end; // 텍스트를 컨테이너 중앙에 배치
  font-size: 20px;
  color: #888;
  margin-bottom: 5px; // 버튼 위에 위치
`;

export default RecordExercise;
