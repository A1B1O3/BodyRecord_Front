import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import hammercurl from '../../asset/hammercurl.svg';
import TopBarR3 from '../../components/common/TopBarR3';
import styled from 'styled-components';

const ModifyRecord = () => {
  const navigate = useNavigate();
  const { date, exerciseCode } = useParams();
  const [ModifyRecord, setModifyRecord] = useState(null);
  const accessToken = localStorage.getItem('accessToken');
  
  const fetchData = () => {
    if (!exerciseCode) {
      console.error('exerciseCode is undefined');
      return;
    }

    axios.patch(`http://localhost:8080/exercise/log/1`, {}, {
      headers: {
        'Authorization': ` eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMSIsIm1lbWJlclJvbGUiOiJST0xFX01FTUJFUiIsImlhdCI6MTcwMjcyMzM2OSwiZXhwIjoxNzAyNzM2OTY5fQ.aONoyXQbwkpx3pncdzKig0Hgc-xEvivCa8REaICfyNA`,
      },
    })
    .then(response => {
      setModifyRecord(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log('Error fetching data:', error);
    });
  }; 

  useEffect(() => {
    if (exerciseCode) {
      fetchData();
    }
  }, [exerciseCode]);

  const handleSave = () => {
    alert('수정되었습니다.');
  };

  const handleExerciseClick = () => {
    navigate('/ModiryRecord');
  };

  const handleBodyClick = () => {
    navigate('/ModifyBody');
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
    <RecordExerciseContainer>
      <TopBarR3 />
      <ButtonsContainer>
        <RecordButton onClick={handleExerciseClick}>운동 기록</RecordButton>
        <BodyButton onClick={handleBodyClick}>신체 기록</BodyButton>
      </ButtonsContainer>
      <HorizontalRule />
      <InputLabel>
      <ExerciseDate>{date ? date.split('-').join('.') : '날짜 없음'}</ExerciseDate>
        <ExerciseNameInput>
          <InputField
            type="text"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
          />
        </ExerciseNameInput>
      </InputLabel>

      {weights.map((weight, index) => (
        <SetsContainer key={index}>
          <InputContainer>
            {index === 0 && <SetLabel>세트</SetLabel>}
            <NumberDisplay>{index + 1}</NumberDisplay>
          </InputContainer>

          <InputContainer>
            {index === 0 && <SetLabel>무게</SetLabel>}
            <WeightInput
              type="text"
              placeholder="무게"
              value={weight}
              onChange={(e) => {
                const updatedWeights = [...weights];
                updatedWeights[index] = e.target.value;
                setWeights(updatedWeights);
              }}
            />
          </InputContainer>

          <InputContainer>
            {index === 0 && <SetLabel>횟수</SetLabel>}
            <RepsInput
              type="text"
              placeholder="횟수"
              value={reps[index]}
              onChange={(e) => {
                const updatedReps = [...reps];
                updatedReps[index] = e.target.value;
                setReps(updatedReps);
              }}
            />
          </InputContainer>
        </SetsContainer>
      ))}


      <ExerciseTimeContainer>
        <ExerciseText>운동 시간</ExerciseText>
        <NameContainer>
          <InputFieldTime
            type="text"
            defaultValue="10분 23초"
          />
        </NameContainer>
      </ExerciseTimeContainer>

      <UploadShareButtons>
        <ButtonContainer>
          <FileInput
            type="file"
            id="fileInput"
            ref={fileInputRef}
            onChange={handleFileInputChange}
          />
          <UploadButton htmlFor="fileInput" onClick={handleFileUpload}>
            {selectedImage ? (
              <Image src={selectedImage} alt="선택한 이미지" />
            ) : (
              <Image src={defaultImage} alt="기본 이미지" />
            )}
          </UploadButton>
        </ButtonContainer>
        <ShareButtonContainer>
          <ShareText>공유하기</ShareText>
          <ShareButton>
            <FontAwesomeIcon icon={faShare} />
          </ShareButton>
        </ShareButtonContainer>
      </UploadShareButtons>
      <SaveButtonContainer>
      <SaveButton onClick={handleSave}>수정</SaveButton>
    </SaveButtonContainer>
    </RecordExerciseContainer>
  );
};

const RecordExerciseContainer = styled.div`
  width: 1000px;
  margin: auto;
  padding: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
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

const HorizontalRule = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background-color: #ddd;
`;

const InputLabel = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const ExerciseDate = styled.div`
  text-align: center;
  margin: 0 auto;
  font-size: 40px;
  font-weight: bold;
  color: #6100FF;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const ExerciseNameInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const SetsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  font-size: 35px;
  text-align: center;
  font-weight: bold;
  height: 50px;
  padding: 20px;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.7);
  width: 650px;
  margin: auto;
`;

const NumberDisplay = styled.div`
  background: white;
  text-align: center;
  border: none;
  border-radius: 20px;
  padding: 10px;
  width: 50px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  margin: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.7);
`;

const ExerciseTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const InputFieldTime = styled.input`
  flex: 1;
  padding: 10px;
  width: 650px;
  height: 70px;
  margin-top: 20px;
  border-radius: 30px;
  border: none;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.7);
`;

const UploadShareButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const UploadButton = styled.label`
  background: none;
  cursor: pointer;
  font-size: 50px;
  margin-right: 10px;
`;

const ShareButtonContainer = styled(ButtonContainer)`
  flex-direction: column;
  align-items: center;
`;

const ShareText = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
`;

const ShareButton = styled.button`
  background-color: white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.7);
  border: none;
  padding: 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 40px;
  cursor: pointer;
  border-radius: 50px;
`;

const SetLabel = styled.label`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WeightInput = styled.input`
  width: 250px;
  height: 60px;
  font-size: 30px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 10px;
  margin: 0;
  text-align: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.7);
`;

const RepsInput = styled.input`
  width: 250px;
  height: 60px;
  font-size: 30px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 10px;
  margin: 0;
  text-align: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.7);
`;

const Image = styled.img`
`;

const ExerciseText = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;

const NameContainer = styled.div`
`;

const FileInput = styled.input`
  display: none;
`;

const SaveButtonContainer = styled.div`
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
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

export default ModifyRecord;
