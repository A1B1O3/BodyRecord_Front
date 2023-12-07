import React, { useState } from 'react';
import CalendarPage from './CalendarPage';
import 'react-calendar/dist/Calendar.css';
import './RecordMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, LabelList } from 'recharts';

const RecordMain = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null); 
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  const handleRecordClick = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      navigate(`/RecordExercise/${formattedDate}`);
    } else {
      alert('날짜를 선택해주세요.');
    }
  };  

  const chartData = [
    { date: '23.01.03', bodyFat: 23.3 },
    { date: '23.02.22', bodyFat: 23.7 },
    { date: '23.04.02', bodyFat: 23.8 },
    { date: '23.09.13', bodyFat: 23.9 },
  ];

  const renderCustomizedLabel = (props) => {
    const { x, y, stroke, value } = props;
    return (
      <text x={x} y={y} dy={-10} fill={stroke} fontSize={12} textAnchor="middle">
        {value}
      </text>
    );
  };

  return (
    <div className="exercise-record-container">
      <div className="header">
        <span className="title">운동기록</span>
        <button className="menu-button">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <hr />

      <CalendarPage onSelectDate={handleDateSelect} />

      <span className="chart-title">체질량 지수 변화</span>
      <div className="chart-container">

          <LineChart width={600} height={300} data={chartData} className="recharts-text">
              <XAxis dataKey="date" stroke="white" />
              <YAxis domain={['auto', 'auto']} stroke="white" />
              <Tooltip labelStyle={{ color: 'white' }} itemStyle={{ color: 'white' }} isAnimationActive={false} />
              <Legend wrapperStyle={{ color: 'white' }} />
              <Line type="monotone" dataKey="bodyFat" stroke="#4CFF5B" strokeWidth={4} dot={{ r: 6, fill: 'white' }}>
                <LabelList dataKey="bodyFat" position="top" fill="white" />
              </Line>
          </LineChart>
      </div>
              
          <button className="record-exercise-button" onClick={handleRecordClick}>
            운동 기록하기
          </button>
        </div>
  );
};

export default RecordMain;
