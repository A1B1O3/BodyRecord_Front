import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faShare } from '@fortawesome/free-solid-svg-icons';
import hammercurl from '../../asset/hammercurl.svg';
import TopBarR4 from '../../components/common/TopBarR4';
import styled from 'styled-components';

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
    <RecordExerciseContainer>
      <TopBarR4 />
      <ButtonsContainer>
        <RecordButton onClick={handleExerciseClick}>운동 기록</RecordButton>
        <BodyButton onClick={handleBodyClick}>신체 기록</BodyButton>
      </ButtonsContainer>
      <HorizontalRule />
      <InputLabel>
      <ExerciseDate>2023.11.05</ExerciseDate>
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
    </RecordExerciseContainer>
  );
};

const RecordExerciseContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
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
  align-items: center;
  width: 800px;
  
  input {
    font-size: 35px;
    flex: 1;
    height: 50px;
    padding: 20px;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  }
`;

const SetsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const InputLabel2 = styled.div`
  flex: 1;
`;

const NumberBox = styled.div`
  width: 30px;
  height: 30px;
  padding: 10px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`;

const InputField = styled.input`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`;

const ExerciseTimeContainer = styled.div`
  margin-bottom: 50px;
`;

const InputFieldTime = styled(InputField)`
  flex: 1;
  padding: 10px;
  width: 500px;
  border-radius: 20px;
  text-align: center;
  font-size: 30px;
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
`;

const ShareButton = styled.button`
  background-color: lightgray;
  color: white;
  border: none;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  border-radius: 50px;
`;

const SetLabel = styled.label`
  // Styles for set label
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NumberDisplay = styled.div`
  // Styles for number display
`;

const WeightInput = styled(InputField)`
  // Additional styles specific to weight input, if any
`;

const RepsInput = styled(InputField)`
  // Additional styles specific to reps input, if any
`;

const Image = styled.img`
  // Styles for image
`;

const ExerciseText = styled.div``;
const NameContainer = styled.div``;
const FileInput = styled.div``;

export default RecordBody;
