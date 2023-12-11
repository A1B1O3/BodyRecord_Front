import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBarS from '../../components/common/TopBarS';
import styled from 'styled-components';

const SearchMain = () => {
  const [minWeight, setMinWeight] = useState(65);
  const [maxWeight, setMaxWeight] = useState(75);
  const [minMuscleMass, setMinMuscleMass] = useState(0);
  const [maxMuscleMass, setMaxMuscleMass] = useState(35);
  const [minBodyFat, setMinBodyFat] = useState(10);
  const [maxBodyFat, setMaxBodyFat] = useState(20);

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/SearchResult');
  };

  const generateOptions = (min, max, step) => {
    const options = [];
    for (let i = min; i <= max; i += step) {
      options.push(parseFloat(i.toFixed(0)));
    }
    return options;
  };

  return (
    <SearchMainContainer>
      <TopBarS />
      <DetailsSection>
        <Label>체중</Label>
        <ValueSelector>
          <Select value={minWeight} onChange={(e) => setMinWeight(parseInt(e.target.value, 10))}>
            {generateOptions(0, 200, 1, 'kg').map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Select>
          <Wave>~</Wave>
          <Select value={maxWeight} onChange={(e) => setMaxWeight(parseInt(e.target.value, 10))}>
            {generateOptions(0, 200, 1, 'kg').map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Select>
        </ValueSelector>
      </DetailsSection>
      <DetailsSection>
        <Label>골격근량</Label>
        <ValueSelector>
          <Select value={minMuscleMass} onChange={(e) => setMinMuscleMass(parseInt(e.target.value, 10))}>
            {generateOptions(0, 200, 1).map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Select>
          <Wave>~</Wave>
          <Select value={maxMuscleMass} onChange={(e) => setMaxMuscleMass(parseInt(e.target.value, 10))}>
            {generateOptions(0, 200, 1, 'kg').map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Select>
        </ValueSelector>
      </DetailsSection>
      <DetailsSection>
        <Label>체지방률</Label>
        <ValueSelector>
          <Select value={minBodyFat} onChange={(e) => setMinBodyFat(parseInt(e.target.value, 10))}>
            {generateOptions(0, 200, 1, '%').map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Select>
          <Wave>~</Wave>
          <Select value={maxBodyFat} onChange={(e) => setMaxBodyFat(parseInt(e.target.value, 10))}>
            {generateOptions(0, 200, 1, '%').map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Select>
        </ValueSelector>
      </DetailsSection>
      <SearchButton onClick={handleSearch}>검색</SearchButton>
    </SearchMainContainer>
  );
};

const SearchMainContainer = styled.div`
  width: 1000px;
  margin: auto;
  padding: 50px;
  text-align: center;
`;

const DetailsSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const Label = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  margin-right: 400px;
`;

const ValueSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Wave = styled.span`
  margin-top: 30px;
  margin-bottom: 50px;
  margin-left: 30px;
  margin-right: 30px;
  font-size: 50px;
`;

const SearchButton = styled.button`
  width: 400px;
  height: 60px;
  background-color: #6100FF;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
  font-size: 30px;
  border-radius: 10px;
  margin-top: 200px;
`;

const Select = styled.select`
  text-align: center;
  width: 200px;
  height: 70px;
  font-size: 35px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 1);
  background-color: white;
`;

export default SearchMain;