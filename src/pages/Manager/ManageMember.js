import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import TopBarM2 from '../../components/common/TopBarM2';
import styled from 'styled-components';

const ManageMember = () => {
  const navigate = useNavigate();
  const members = Array.from({ length: 467 }, (_, index) => 467 - index);

  const handleHouseClick = () => {
    navigate('/ManagerMain');  
  };

  return (
    <ManageMemberContainer>
      <TopBarM2 />
      <CirclesContainer>
        <CircleContainer>
          <Circle>
            <FontAwesomeIcon icon={faUser} size="4x" />
            <SubCircle>5</SubCircle>
          </Circle>
          <CircleText>신규회원</CircleText>
        </CircleContainer>
        <CircleContainer>
          <Circle>
            <FontAwesomeIcon icon={faUserGroup} size="4x" />
            <SubCircle>467</SubCircle>
          </Circle>
          <CircleText>전체회원</CircleText>
        </CircleContainer>
      </CirclesContainer>
      <ListHeader>
        <Number>번호</Number>
        <Nickname>닉네임</Nickname>
      </ListHeader>
      <MemberList>
        {members.map((number) => (
          <ListItem key={number}>
            <Number>{number}</Number>
            <Nickname>닉네임{number}</Nickname>
          </ListItem>
        ))}
      </MemberList>
    </ManageMemberContainer>
  );
};

const ManageMemberContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const CirclesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin-top: 100px;
`;

const CircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 2px solid blue;
`;

const SubCircle = styled.div`
  position: absolute;
  top: 20px;
  right: -10px;
  background-color: #6100FF;
  color: white;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  font-size: 30px;
`;

const CircleText = styled.p`
  padding-top: 10px;
  font-size: 50px;
  font-weight: bolder;
`;

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 0 20px;
  font-size: 50px;
  background-color: lightgrey;
  margin-top: 150px;
  padding: 10px 20px;
`;

const MemberList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-height: 600px;
  overflow-y: auto;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 0 20px;
  font-size: 50px;
  background-color: white;
  margin-top: 30px;
  border-bottom: 1px solid #ccc;
`;

const Number = styled.span`
  font-size: 40px;
  width: 100px;
`;

const Nickname = styled.span`
  font-size: 40px;
  margin-left: 200px;
  text-align: left;
  flex: 1;
`;

export default ManageMember;