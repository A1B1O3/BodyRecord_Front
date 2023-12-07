import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
      <ProfileModifyHeader>
        <BackButton onClick={goToProfileMain}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </BackButton>
        <HeaderTitle>프로필 수정</HeaderTitle>
      </ProfileModifyHeader>

      <ProfileContent>
        <ProfileImageContainer onClick={handleImageEditClick}>
          {profileImage ? (
            <ProfileImage src={profileImage} alt="Profile" />
          ) : (
            <FontAwesomeIcon icon={faUser} size="3x" />
          )}
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

        <CenteredContent>
          <FieldSet>
            <TextLabel>체중</TextLabel>
            <ValueSelector value={weight} onChange={(e) => setWeight(e.target.value)}>
              {generateOptions(70, 200, 0.1, 'kg')}
            </ValueSelector>
          </FieldSet>

          <FieldSet>
            <TextLabel>골격근량</TextLabel>
            <ValueSelector value={skeletalMuscle} onChange={(e) => setSkeletalMuscle(e.target.value)}>
              {generateOptions(30, 100, 0.1, 'kg')}
            </ValueSelector>
          </FieldSet>

          <FieldSet>
            <TextLabel>체지방률</TextLabel>
            <ValueSelector value={bodyFat} onChange={(e) => setBodyFat(e.target.value)}>
              {generateOptions(20, 50, 0.1, '%')}
            </ValueSelector>
          </FieldSet>
        </CenteredContent>

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

const ProfileModifyHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  flex-direction: column;
`;

const HeaderTitle = styled.h1`
  font-size: 40px;
  text-align: center;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 10px;
  font-size: 40px;
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  margin-top: 30px;
  font-size: 16px;
  font-weight: bold;
  margin-left: 50px;
`;

const InputText = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  margin-left: 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SelectDropdown = styled.select`
  width: 82%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  margin-left: 50px;
`;

const ValueSelector = styled.select`
  width: 150px;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  border-radius: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.7);
  margin-bottom: 20px;
  text-align: center;
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
  font-size: 18px;
  cursor: pointer;
`;

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default ProfileModify;
