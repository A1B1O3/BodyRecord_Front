import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBarR3 from '../../components/common/TopBarR3';
import styled from 'styled-components';

const RecordBody = () => {
  const navigate = useNavigate();

  const handleSaveClick = () => {
    navigate('/RecordMain');
  };

  const handleExerciseClick = () => {
    navigate('/ModifyRecord');
  };

  const handleBodyClick = () => {
    navigate('/ModifyBody');
  };

  const handleModifyClick = () => {
    navigate('/RecordMain');
  }

  const [weight, setWeight] = useState(70.0);
  const [skeletalMuscle, setSkeletalMuscle] = useState(30.0);
  const [bodyFat, setBodyFat] = useState(20.0);

  const generateOptions = (start, end, step, unit) => {
    const options = [];
    for (let i = start; i <= end; i += step) {
      options.push(`${i.toFixed(1)}${unit}`);
    }
    return options;
  };  

  return (
    <RecordExerciseContainer>
      <TopBarR3 />
      <ButtonsContainer>
        <RecordButton onClick={handleExerciseClick}>운동 기록</RecordButton>
        <BodyButton onClick={handleBodyClick}>신체 기록</BodyButton>
      </ButtonsContainer>
      <HorizontalRule />
      <RecordDetails>
        <Label>체중</Label>
        <DetailsSection>
          <ValueSelector>
            <Select value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))}>
              {generateOptions(70, 200, 0.1, 'kg').map((option, index) => (
                <option key={index} value={option.replace('kg', '')}>{option}</option>
              ))}
            </Select>
          </ValueSelector>
        </DetailsSection>
        <Label>골격근량</Label>
        <DetailsSection>
          <ValueSelector>
            <Select value={skeletalMuscle} onChange={(e) => setSkeletalMuscle(parseFloat(e.target.value))}>
              {generateOptions(30, 100, 0.1, 'kg').map((option, index) => (
                <option key={index} value={option.replace('kg', '')}>{option}</option>
              ))}
            </Select>
          </ValueSelector>
        </DetailsSection>
        <Label>체지방률</Label>
        <DetailsSection>
          <ValueSelector>
            <Select value={bodyFat} onChange={(e) => setBodyFat(parseFloat(e.target.value))}>
              {generateOptions(20, 100, 0.1, '%').map((option, index) => (
                <option key={index} value={option.replace('%', '')}>{option}</option>
              ))}
            </Select>
          </ValueSelector>
        </DetailsSection>
      </RecordDetails>
      <ButtonSection>
        <ModifyButton onClick={handleModifyClick}>수정</ModifyButton>
      </ButtonSection>
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

const BodyButton = styled.button`
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

const RecordButton = styled(BodyButton)`
  margin-right: 10px;
  border: none;
`;

const RecordDetails = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: auto;
  margin-top: 120px;
  margin-bottom: 70px;
`;

const DetailsSection = styled.div`
  margin: 10px 0;
  margin-bottom: 15px;
  text-align: center;
`;

const Label = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const ModifyButton = styled.button`
  padding: 12px 0;
  width: 120px;
  margin: 0 auto;
  border-radius: 20px;
  font-size: 40px;
  font-weight: bold;
  background-color: #6100FF;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ValueSelector = styled.div`
  position: relative;
  margin-bottom: 70px;
  width: 250px;
`;

const Select = styled.select`
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 20px;
  font-size: 40px;
  font-weight: bold;
  width: 100%;
`;

const HorizontalRule = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background-color: #ddd;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export default RecordBody;
