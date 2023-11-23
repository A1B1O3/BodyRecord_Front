import React from 'react';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, LabelList } from 'recharts';
import { useNavigate } from 'react-router-dom';
import './BmiPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const BMI = () => {
  const bmiData = [
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

  const navigate = useNavigate();
  
  const handleModifyClick = () => {
    navigate('/RecordMain');
  };

  return (
    <div className="bmi-container">
      <div className="header">
        <button className="back-button" onClick={handleModifyClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="title">체질량 지수</div>
      </div>
      <hr />
      <span className="chart-title">체질량 지수</span>
      <div className="chart-container">
        <LineChart width={600} height={300} data={bmiData} className="recharts-text">
          <XAxis dataKey="date" stroke="white" />
          <YAxis domain={['auto', 'auto']} stroke="white" />
          <Tooltip labelStyle={{ color: 'white' }} itemStyle={{ color: 'white' }} isAnimationActive={false} />
          <Legend wrapperStyle={{ color: 'white' }} />
          <Line type="monotone" dataKey="bodyFat" stroke="#4CFF5B" strokeWidth={4} dot={{ r: 6, fill: 'white' }}>
            <LabelList dataKey="bodyFat" position="top" fill="white" />
          </Line>
        </LineChart>
      </div>
      <div className="recorded-figures">
      <span className="figures-text">기록한 수치</span>
    </div>
      <table className="record-table">
        <thead>
          <tr>
            <th>날짜</th>
            <th>체중</th>
            <th>골격근량</th>
            <th>체지방률</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23.01.03</td>
            <td>67.3</td>
            <td>28.4</td>
            <td>16.2%</td>
          </tr>
          <tr>
            <td>23.02.22</td>
            <td>68.4</td>
            <td>29.3</td>
            <td>16.7%</td>
          </tr>
          <tr>
            <td>23.04.02</td>
            <td>69.2</td>
            <td>29.5</td>
            <td>16.9%</td>
          </tr>
          <tr>
            <td>23.09.13</td>
            <td>70.6</td>
            <td>30.1</td>
            <td>17.3%</td>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BMI;
