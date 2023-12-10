import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import styled from "styled-components";
import style from './DatePicker.css';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div style={{width:'1000px',height:'200px',marginTop:'150px'}}>
      <h2 style={{fontSize:'40px',marginLeft:'170px'}}>챌린지 기간</h2>
      <div style={{width:'500px',height:'100px',textAlign:'center',display:'flex',marginLeft:'170px'
    ,fontSize:'30px'}}>

        <SDatePicker 
        locale={ko}
        minDate={new Date()}
        dateFormat="yyyy년 MM월 dd일"
        selected={startDate} 
        onChange={(date) => setStartDate(date)} />
       <div 
       style={{marginLeft:'0px'}}
       ><img src = "./img/arrow-down.png"/>
        </div>
        <RDatePicker 
        locale={ko}
        minDate={new Date()}
        dateFormat="yyyy년 MM월 dd일"
        selected={endDate} 
        onChange={(date) => setEndDate(date)} />
             <div 
       ><img src = "./img/arrow-down.png"/>
        </div>
      </div>
      <div style={{fontSize:'25px',marginLeft:'170px'}}>

          {startDate && endDate
            ? `선택한 날짜: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
            : '날짜를 선택해 주세요'}

      </div>
    </div>
  );
};

const SDatePicker = styled(DatePicker)`
    width:200px;
    height:50px;
    border-top:none;
    border-left:none;
    border-right:none;
    botder-bottom:1px solid black;
    font-size:25px;
`

const RDatePicker = styled(DatePicker)`
    width:200px;
    height:50px;
    margin-left:100px;
    border-top:none;
    border-left:none;
    border-right:none;
    botder-bottom:1px solid black;
    font-size:25px;
`

export default DateRangePicker;