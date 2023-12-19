import React from 'react';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, LabelList } from 'recharts';
import { useNavigate } from 'react-router-dom';
import TopBarR4 from '../../components/common/TopBarR4';
import styled from 'styled-components';

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
    <BmiContainer>
      <TopBarR4 />
      <ChartTitle>체질량 지수</ChartTitle>
      <ChartContainer>
        <LineChart width={600} height={300} data={bmiData} className="recharts-text">
          <XAxis dataKey="date" stroke="white" />
          <YAxis domain={['auto', 'auto']} stroke="white" />
          <Tooltip labelStyle={{ color: 'white' }} itemStyle={{ color: 'white' }} isAnimationActive={false} />
          <Legend wrapperStyle={{ color: 'white' }} />
          <Line type="monotone" dataKey="bodyFat" stroke="#4CFF5B" strokeWidth={4} dot={{ r: 6, fill: 'white' }}>
            <LabelList dataKey="bodyFat" position="top" fill="white" />
          </Line>
        </LineChart>
      </ChartContainer>
      <RecordedFigures>
        <FiguresText>기록한 수치</FiguresText>
      </RecordedFigures>
      <RecordTable>
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
      </RecordTable>
    </BmiContainer>
  );
};


const BmiContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ChartTitle = styled.div`
  margin-top: 70px;
  margin-right: 550px;
  font-size: 40px;
  font-weight: bold;
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 50px;
  border-radius: 10px;
  margin: auto;
  width: 70%;
  margin-top: 20px;
`;

const RecordedFigures = styled.div`
  text-align: center;
  margin-top: 70px;
`;

const FiguresText = styled.span`
  margin-top: 70px;
  margin-right: 550px;
  font-size: 40px;
  font-weight: bold;
`;

const RecordTable = styled.table`
  width: 80%;
  margin: 20px auto;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;

  th {
    background-color: black;
    color: white;
    padding: 10px;
    font-weight: bolder;
    font-size: 18px;
  }

  td {
    background-color: white;
    color: black;
    text-align: center;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export default BMI;
