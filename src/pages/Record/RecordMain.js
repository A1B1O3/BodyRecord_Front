import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CalendarPage from './CalendarPage';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, LabelList } from 'recharts';
import TopBarR from '../../components/common/TopBarR';
import styled from 'styled-components';
import Modal from '../../components/common/Modal';

const RecordMain = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  const checkForExistingData = (formattedDate) => {

    return false;
  };

   const chartData = [
    { date: '23.01.03', bodyFat: 23.3 },
    { date: '23.02.22', bodyFat: 23.7 },
    { date: '23.04.02', bodyFat: 23.8 },
    { date: '23.09.13', bodyFat: 23.9 },
  ];


  const handleRecordClick = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      const hasExistingData = checkForExistingData(formattedDate);
  
      // const newExerciseRecord = {
      //   exerciseName: '운동명',
      //   exerciseWeight: 0,
      //   exerciseCount: 0,
      //   exerciseTime: '00:00:00',
      //   exerciseImagePath: '',
      //   exerciseShare: false,
      //   exerciseDate: formattedDate,
      //   imgFile: null,
      // };
  
    // const accessToken = localStorage.getItem('accessToken');
    // if (!accessToken) {
    //   alert('인증 토큰이 없습니다. 로그인이 필요합니다.');
    //   return;
    // }

    // axios.post('http://localhost:8080/exercise/log', newExerciseRecord, {
    //   headers: {
    //     'Authorization': `Bearer ${accessToken}`,
    //     // 'Content-Type': 'multipart/form-data', // 파일을 보내지 않으면 이 헤더는 필요 없음
    //     'Content-Type': 'application/json', // JSON 콘텐츠 타입으로 변경
    //   },
    // })
    // .then(response => {
    //   // 성공적으로 등록된 경우
    //   console.log('운동 기록이 성공적으로 등록되었습니다:', response.data);
    // })
    // .catch(error => {
    //   // 등록 중 에러 발생한 경우
    //   console.error('운동 기록 등록 중 에러 발생:', error);
    // });

    
    
    const route = hasExistingData ? `/ModifyRecord/${formattedDate}` : `/RecordExercise/${formattedDate}`;
    navigate(route);
  } else {
    alert('날짜를 선택해주세요.');
  }
};
  
  const handleChartContainerClick = () => {
    navigate('/BmiPage');
  };

  const renderCustomizedLabel = (props) => {
    const { x, y, stroke, value } = props;
    return (
      <text x={x} y={y} dy={-10} fill={stroke} fontSize={12} textAnchor="middle">
        {value}
      </text>
    );
  };


  return (
    <ExerciseRecordContainer>
      <TopBarR />
      <CalendarPage onSelectDate={handleDateSelect} />
      <ChartTitle>체질량 지수 변화</ChartTitle>
      <ChartContainer onClick={handleChartContainerClick}>
        <LineChart width={800} height={500} data={chartData}>
              <XAxis dataKey="date" stroke="white" />
              <YAxis domain={['auto', 'auto']} stroke="white" />
              <Tooltip labelStyle={{ color: 'white' }} itemStyle={{ color: 'white' }} isAnimationActive={false} />
              <Legend wrapperStyle={{ color: 'white' }} />
              <Line type="monotone" dataKey="bodyFat" stroke="#4CFF5B" strokeWidth={4} dot={{ r: 6, fill: 'white' }}>
                <LabelList dataKey="bodyFat" position="top" fill="white" />
              </Line>
        </LineChart>
        </ChartContainer>
      <RecordExerciseButton onClick={handleRecordClick}>
        운동 기록하기
      </RecordExerciseButton>
      <Modal />
    </ExerciseRecordContainer>
  );
};

const ExerciseRecordContainer = styled.div`
  width: 1000px;
  padding: 50px;
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 20px;
  border-radius: 10px;
  margin: auto;
  width: fit-content;
  margin-top: 20px;
`;

const ChartTitle = styled.span`
  font-weight: bolder;
  font-size: 50px;
  margin-top: 100px;
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
  display: block;
`;

const RecordExerciseButton = styled.button`
  display: block;
  width: 800px;
  height: 110px;
  border-radius: 20px;
  padding: 20px;
  background-color: #6100FF;
  color: white;
  border: none;
  align-items: center;
  cursor: pointer;
  font-size: 45px;
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
  margin-top: 70px;
`;

export default RecordMain;