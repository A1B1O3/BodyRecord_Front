import React from 'react';
import CalendarPage from './CalendarPage';
import 'react-calendar/dist/Calendar.css';
import './RecordMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  Scatter,
  ReferenceLine,
} from 'recharts';

const RecordMain = () => {
  const navigate = useNavigate();

  const handleRecordClick = () => {
    navigate('/RecordExercise');
  };

  const chartData = [
    { date: '23.01.03', bodyFat: 23.3 },
    { date: '23.02.22', bodyFat: 23.7 },
    { date: '23.04.02', bodyFat: 23.8 },
    { date: '23.09.13', bodyFat: 23.9 },
  ];

  return (
    <div className="exercise-record-container">
      <div className="header">
        <span className="title">운동기록</span>
        <button className="menu-button">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <hr />
      <CalendarPage />
      <div className="chart" style={{ display: 'flex', justifyContent: 'center' }}>
        <LineChart width={500} height={300} data={chartData}>
          <XAxis dataKey="date" />
          <YAxis domain={['auto', 'auto']} />
          <CartesianGrid strokeDasharray="3 3" fill="#000" />
          <Tooltip labelStyle={{ color: 'white' }} itemStyle={{ color: 'white' }} isAnimationActive={false} />
          <Legend />
          <Line type="monotone" dataKey="bodyFat" stroke="#4CFF5B" strokeWidth={4} dot={{ r: 6, fill: 'white' }} />
          <Scatter data={chartData} fill="white">
            {chartData.map((entry, index) => (
              <text
                x={index % 2 === 0 ? 5 : -5}
                y={index % 2 === 0 ? -5 : 15}
                dy={-6}
                fontSize={12}
                fill="white"
                textAnchor={index % 2 === 0 ? 'start' : 'end'}
              >
                {entry.bodyFat}
              </text>
            ))}
          </Scatter>
          <ReferenceLine y={23.5} stroke="red" strokeDasharray="3 3" />
        </LineChart>
      </div>
      <button className="record-exercise-button" onClick={handleRecordClick}>
        운동 기록하기
      </button>
    </div>
  );
};

export default RecordMain;
