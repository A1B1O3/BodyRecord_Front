import React, { useState } from 'react';
import './SearchMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SearchMain = () => {
  const [minWeight, setMinWeight] = useState(65);
  const [maxWeight, setMaxWeight] = useState(75);
  const [minMuscleMass, setMinMuscleMass] = useState(0);
  const [maxMuscleMass, setMaxMuscleMass] = useState(35);
  const [minBodyFat, setMinBodyFat] = useState(10);
  const [maxBodyFat, setMaxBodyFat] = useState(20);

  const [ setWeight] = useState(0);

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
    <div className="search-main-container">
      <div className="search-header">
        <div className="search-title">검색하기</div>
        <button className="menu-button">
            <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <hr className="separator" />
      <div className="weight-section details-section">
        <div className="label">체중</div>
        <div className="value-selector">
          <select value={minWeight} onChange={(e) => setMinWeight(parseInt(e.target.value, 10))}>
            {generateOptions(0, 200, 1).map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <span className="wave">~</span>
          <select value={maxWeight} onChange={(e) => setMaxWeight(parseInt(e.target.value, 10))}>
            {generateOptions(0, 200, 1).map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="muscle-mass-section details-section">
      <div className="label">골격근량</div>
        <div className="value-selector">
          <select value={minMuscleMass} onChange={(e) => setMinMuscleMass(parseInt(e.target.value, 10))}>
            {generateOptions(0, 200, 1).map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <span className="wave">~</span>
          <select value={maxMuscleMass} onChange={(e) => setMaxMuscleMass(parseInt(e.target.value, 10))}>
            {generateOptions(0, 200, 1).map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="body-fat-section details-section">
      <div className="label">체지방률</div>
        <div className="value-selector">
          <select value={minBodyFat} onChange={(e) => setMinBodyFat(parseInt(e.target.value, 10))}>
            {generateOptions(0, 200, 1).map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <span className="wave">~</span>
          <select value={maxBodyFat} onChange={(e) => setMaxBodyFat(parseInt(e.target.value, 10))}>
            {generateOptions(0, 200, 1).map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <button className="search-button" onClick={handleSearch}>검색</button>
    </div>
  );
};

export default SearchMain;
