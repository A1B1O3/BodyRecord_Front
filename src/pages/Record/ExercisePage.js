import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const ExercisePage = () => {
  const [exercises, setExercises] = useState([
    { name: '', sets: [{ weight: '', reps: '' }] }
  ]);

  const handleSetChange = (exerciseIndex, setIndex, type, value) => {
    const newExercises = [...exercises];
    newExercises[exerciseIndex].sets[setIndex][type] = value;
    setExercises(newExercises);
  };

  const addSet = (exerciseIndex) => {
    const newExercises = [...exercises];
    newExercises[exerciseIndex].sets.push({ weight: '', reps: '' });
    setExercises(newExercises);
  };

  const removeSet = (exerciseIndex) => {
    const newExercises = [...exercises];
    if (newExercises[exerciseIndex].sets.length > 1) {
      newExercises[exerciseIndex].sets.pop();
    }
    setExercises(newExercises);
  };

  const addExercise = () => {
    setExercises([...exercises, { name: '', sets: [{ weight: '', reps: '' }] }]);
  };

  const removeExercise = (exerciseIndex) => {
    if (exercises.length > 1) {
      const newExercises = exercises.filter((_, index) => index !== exerciseIndex);
      setExercises(newExercises);
    }
  };

  const resetInput = (exerciseIndex) => {
    const newExercises = [...exercises];
    newExercises[exerciseIndex].name = '';
    setExercises(newExercises);
  };

  return (
    <>
      {exercises.map((exercise, exerciseIndex) => (
        <ExerciseContainer key={exerciseIndex}>
          <ExerciseNameGroup>
            <ExerciseNameLabel>운동 이름</ExerciseNameLabel>
            <ExerciseNameInput placeholder="운동 이름" value={exercise.name} onChange={(e) => {
              const newExercises = [...exercises];
              newExercises[exerciseIndex].name = e.target.value;
              setExercises(newExercises);
            }} />
            <IconButton onClick={() => removeExercise(exerciseIndex)}>
              <FontAwesomeIcon icon={faTrash} />
            </IconButton>
          </ExerciseNameGroup>

          <SetWrapper>
            <StaticInput readOnly value="세트" disabled />
            <StaticInput readOnly value="무게" disabled />
            <StaticInput readOnly value="횟수" disabled />
          </SetWrapper>

          {exercise.sets.map((set, setIndex) => (
            <SetWrapper key={setIndex}>
              <SetInput readOnly value={setIndex + 1} />
              <WeightInput value={set.weight} onChange={(e) => handleSetChange(exerciseIndex, setIndex, 'weight', e.target.value)} />
              <RepsInput value={set.reps} onChange={(e) => handleSetChange(exerciseIndex, setIndex, 'reps', e.target.value)} />
            </SetWrapper>
          ))}

          <ButtonGroup>
            <SetButton onClick={() => removeSet(exerciseIndex)}>
              <FontAwesomeIcon icon={faMinus} />
              <span>세트삭제</span>
            </SetButton>
            <SetButton onClick={() => addSet(exerciseIndex)}>
              <FontAwesomeIcon icon={faPlus} />
              <span>세트추가</span>
            </SetButton>
          </ButtonGroup>
        </ExerciseContainer>
      ))}
      <AddExerciseButton onClick={addExercise}>
        <span>⊕ 운동추가</span>
      </AddExerciseButton>
    </>
  );
};

const ExerciseContainer = styled.div`
  width: 800px;
  padding: 30px;
  margin-bottom: 20px;
  margin-top : 10px;
`;

const ExerciseNameGroup = styled.div`
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;

`;

const ExerciseNameLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 30px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 20px;
  margin-right: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const ExerciseNameInput = styled(Input)`
  flex-grow: 1;
  width: 650px;
  height: 70px;
  font-size: 30px;
`;

const StaticInput = styled(Input)`
  margin-top: 10px;
  box-shadow: none;
  font-size: 20px;
`;

const SetInput = styled(Input)`
  width: 50px;
  height: 70px;
  font-size: 30px;
  font-weight: bold;
  margin: 5px;
`;

const WeightInput = styled(Input)`
  width: 250px;
  height: 70px;
  font-size: 20px;
`;

const RepsInput = styled(Input)`
  width: 250px;
  height: 70px;
  font-size: 20px;
`;

const SetWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  gap: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  justify-content: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: black;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 50px;
  margin-left: 30px;
  order: -1;
  font-size: 40px;
`;

const SetButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 30px;
  gap: 30px;
  margin : 10px 10px 10px 10px;
  color: black;
  height: 70px;
  width: auto;
  flex: none;
`;

const AddExerciseButton = styled.button`
  background: none;
  border: 1px solid black;
  color: black;
  font-size: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  margin-top: 10px;
  margin-bottom: 20px;
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