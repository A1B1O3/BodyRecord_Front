import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const ExercisePage = ({ sets, setSets }) => {

  const handleAddSet = (index) => {
    const newSets = [...sets];
    newSets.splice(index + 1, 0, { ...newSets[index], setNumber: newSets[index].setNumber + 1, weight: '', reps: '' });
    setSets(newSets);
  };

  const handleAddExercise = () => {
    setSets([...sets, { exerciseName: '', setNumber: 1, weight: '', reps: '' }]);
  };

  const handleRemoveSet = (index) => {
      const newSets = sets.filter((_, idx) => idx !== index);
      setSets(newSets);
  };

  const handleChange = (index, field, value) => {
      const newSets = sets.map((set, idx) => {
          if (idx === index) {
              return { ...set, [field]: value };
          }
          return set;
      });
      setSets(newSets);
  };

  const handleClearExerciseName = (index) => {
      handleChange(index, 'exerciseName', '');
  };

  return (
    <>
      {sets.map((set, index) => (
        <React.Fragment key={index}>
          {(index === 0 || set.exerciseName !== sets[index - 1].exerciseName) && (
            <ExerciseNameContainer>
              <ExerciseInput
                type="text"
                placeholder="운동 이름"
                value={set.exerciseName}
                onChange={(e) => handleChange(index, 'exerciseName', e.target.value)}
              />
              <FontAwesomeIcon icon={faTrash} size="2x" onClick={() => handleClearExerciseName(index)} />
            </ExerciseNameContainer>
          )}

          <SetDetailsContainer>
            <div>
              <InputLabel>세트</InputLabel>
              <SetNumber>{set.setNumber}</SetNumber>
            </div>
            <div>
              <InputLabel>무게</InputLabel>
              <WeightInput
                type="number"
                placeholder="무게"
                value={set.weight}
                onChange={(e) => handleChange(index, 'weight', e.target.value)}
              />
            </div>
            <div>
              <InputLabel>횟수</InputLabel>
              <RepsInput
                type="number"
                placeholder="횟수"
                value={set.reps}
                onChange={(e) => handleChange(index, 'reps', e.target.value)}
              />
            </div>
          </SetDetailsContainer>

          {(index === sets.length - 1 || sets[index + 1].exerciseName !== set.exerciseName) && (
            <ActionButtonContainer>
              <RemoveSetButton onClick={() => handleRemoveSet(index)}>
                <FontAwesomeIcon icon={faMinus} size="lg" />
                세트 삭제
              </RemoveSetButton>
              <AddSetButton onClick={() => handleAddSet(index)}>
                <FontAwesomeIcon icon={faPlus} size="lg" />
                세트 추가
              </AddSetButton>
            </ActionButtonContainer>
          )}
        </React.Fragment>
      ))}

      <AddExerciseButton onClick={handleAddExercise}>⊕ 운동 추가</AddExerciseButton>
    </>
  );
};

const SetLabel = styled.label``;
const WeightLabel = styled.label``;
const RepsLabel = styled.label``;

const LabelsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
`;

const InputLabel = styled.label`
  font-size: 20px;
  text-align: center;
  display: block;
  margin-bottom: 5px;
  color: #aaa;
`;

const ExerciseNameLabel  = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 10px;
  font-size: 20px;
  margin-right: 430px;
`;

const SetNumberLabel = styled.div`
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
  flex: 1;
`;

const SetContainer = styled.div`
  margin-bottom: 20px;
`;

const SetDetailsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`;

const ExerciseNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  `;

const ExerciseInput = styled.input`
  flex: 1;
  margin-right: 10px;
  width: 500px;;
  height: 80px;
  font-size: 30px;
  text-align: center;
  color: lightgrey;
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`;

const SetNumber = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 5px;
  width: 100px;
  height: 50px;
`;

const WeightInput = styled.input`
  width: calc(33% - 20px);
  text-align: center;
  margin-bottom: 5px;
  width: 100px;
  height: 50px;
`;

const RepsInput = styled.input`
  width: calc(33% - 20px);
  text-align: center;
  margin-bottom: 5px;
  width: 100px;
  height: 50px;
`;

const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;

const RemoveSetButton = styled.button`
  width: 250px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  border: none;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
  font-size: 30px;
`;

const AddSetButton = styled(RemoveSetButton)`
`;

const AddExerciseButton = styled.button`
  width: 200px;
  border: 1px solid #ccc;
  padding: 10px 20px;
  margin-top: 30px;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 400px;
    background-color: #ccc;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    left: -400px;
  }

  &::after {
    right: -400px;
  }
`;

export default ExercisePage;