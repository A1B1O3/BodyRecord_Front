import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TopBarP2 from '../../components/common/TopBarP2';

const ProfileModify = () => {
  let navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [exerciseGoal, setExerciseGoal] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [weight, setWeight] = useState('70');
  const [skeletalMuscle, setSkeletalMuscle] = useState('20');
  const [bodyFat, setBodyFat] = useState('30');

  const handleImageEditClick = () => {
    document.getElementById('profile-image-upload').click();
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const goToProfileMain = () => {
    navigate('/ProfileMain');
  };

  const handleModifyClick = () => {
    navigate('/ProfileMain');
  };

  const generateOptions = (start, end, step, unit) => {
    const options = [];
    for (let i = start; i <= end; i += step) {
      options.push(`${i.toFixed(1)}${unit}`);
    }
    return options.map((option, index) => (
      <option key={index} value={option.replace(unit, '')}>{option}</option>
    ));
  };

  return (
    <ProfileModifyContainer>
      <TopBarP2 />
      <ProfileContent>
        <ProfileImageContainer onClick={handleImageEditClick}>
          {profileImage ? (
            <ProfileImage src={profileImage} alt="Profile" />
          ) : (
            <FontAwesomeIcon icon={faUser} size="3x" />
          )}
          <AddImageButton onClick={() => document.getElementById('profile-image-upload').click()}>
            <FontAwesomeIcon icon={faPlus} />
          </AddImageButton>
          <InputFileHidden type="file" id="profile-image-upload" onChange={handleImageChange} />
        </ProfileImageContainer>
      </ProfileContent>

      <FormContainer>
        <FieldSet>
          <TextLabel>닉네임 수정</TextLabel>
          <InputText
            type="text"
            placeholder="새로운 닉네임을 입력해주세요."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </FieldSet>

        <FieldSet>
          <TextLabel>운동목표 수정</TextLabel>
          <SelectDropdown
            value={exerciseGoal}
            onChange={(e) => setExerciseGoal(e.target.value)}
          >
            <option value="" disabled>운동 목표를 선택해주세요.</option>
            <option value="운동목표1번">운동목표1번</option>
            <option value="운동목표2번">운동목표2번</option>
          </SelectDropdown>
        </FieldSet>

        <MetricsContainer>
          <LeftMetric>
            <TextLabel>체중</TextLabel>
            <ValueSelector value={weight} onChange={(e) => setWeight(e.target.value)}>
              {generateOptions(70, 200, 0.1, 'kg')}
            </ValueSelector>
          </LeftMetric>

        <RightMetric>
            <TextLabel>체지방률</TextLabel>
            <ValueSelector value={bodyFat} onChange={(e) => setBodyFat(e.target.value)}>
              {generateOptions(20, 50, 0.1, '%')}
            </ValueSelector>
          </RightMetric>
        </MetricsContainer>

          <FieldSet>
            <TextLabel>골격근량</TextLabel>
            <ValueSelector value={skeletalMuscle} onChange={(e) => setSkeletalMuscle(e.target.value)}>
              {generateOptions(30, 100, 0.1, 'kg')}
            </ValueSelector>
          </FieldSet>

        <ButtonSection>
          <ModifyButton onClick={handleModifyClick}>수정 완료</ModifyButton>
        </ButtonSection>
      </FormContainer>
    </ProfileModifyContainer>
  );
};

const ProfileModifyContainer = styled.div`
  width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`;

const ProfileImageContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-top: 20px;
`;

const AddImageButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const InputFileHidden = styled.input`
  display: none;
`;

const FormContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const FieldSet = styled.div`
  margin-bottom: 20px;
`;

const TextLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  margin-top: 50px;
  font-size: 30px;
  font-weight: bold;
  margin-left: 60px;
`;

const InputText = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  margin-left: 50px;
  margin-top: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 4px;
  font-size: 25px;
`;

const SelectDropdown = styled.select`
  width: 82%;
  padding: 10px;
  font-size: 25px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  margin-left: 50px;
  margin-top: 10px;
  background-color: white;
`;

const ValueSelector = styled.select`
  width: 300px;
  height: 100px;
  padding: 10px;
  font-size: 40px;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 1);
  margin-bottom: 20px;
  text-align: center;
  margin-top: 20px;
  margin-left: 50px;
  background-color: white;
`;

const ButtonSection = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ModifyButton = styled.button`
  background-color: #6200ee;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 15px 30px;
  font-size: 30px;
  cursor: pointer;
  margin-top: 100px;
  width: 500px;
`;

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const LeftMetric = styled(FieldSet)`
  flex: 1;
  align-items: flex-start;
`;

const RightMetric = styled(FieldSet)`
  flex: 1;
  align-items: flex-end;
`;

export default ProfileModify;
