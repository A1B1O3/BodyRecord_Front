import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CalendarPage = ({ onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    onSelectDate(date);
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDayClick = (day) => {
    const newSelectedDate = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), day));
    setSelectedDate(newSelectedDate);
    onSelectDate(newSelectedDate);
  };
  
  const isSelectedDate = (day) => {
    return selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === currentDate.getMonth();
  };

  const generateCalendar = () => {
    const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const days = [];
    const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    const daysInPreviousMonth = previousMonth.getDate();
    for (let i = 0; i < startDay; i++) {
      days.push(
        <Day key={`prev-${i}`} className="prev-month-day">
          {daysInPreviousMonth - startDay + i + 1}
        </Day>
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <Day key={`current-${i}`} 
             className={`current-month-day ${isSelectedDate(i) ? 'selected' : ''}`}
             onClick={() => handleDayClick(i)}>
          {i}
        </Day>
      );
    }

    const nextDaysToAdd = 7 - days.length % 7;
    if (nextDaysToAdd < 7) {
      for (let i = 1; i <= nextDaysToAdd; i++) {
        days.push(
          <Day key={`next-${i}`} className="next-month-day">
            {i}
          </Day>
        );
      }
    }
    return days;
  };

  return (
    <CalendarContainer>
      <MonthSelector>
        <FontAwesomeIcon icon={faChevronLeft} onClick={goToPreviousMonth} />
        <span>
          {`${currentDate.getFullYear()}.${String(currentDate.getMonth() + 1).padStart(2, '0')}`}
        </span>
        <FontAwesomeIcon icon={faChevronRight} onClick={goToNextMonth} />
      </MonthSelector>
      <CalendarGrid>
        {['일', '월', '화', '수', '목', '금', '토'].map(dayName => (
          <DayName key={dayName}>{dayName}</DayName>
        ))}
        {generateCalendar()}
      </CalendarGrid>
    </CalendarContainer>
  );
}

const CalendarContainer = styled.div`
  background: white;
  border-radius: 50px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
  padding: 30px;
  font-size: 25px;
  width: 850px;
  height: 800px;
  margin: 100px auto 0;
`;

const MonthSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 50px;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

const DayName = styled.div`
  text-align: center;
  font-weight: 900;
  font-size: 45px;
  padding: 20px 0;
  margin-top: 30px;
`;

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 900;
  font-size: 30px;
  padding: 20px 0;

  &.prev-month-day, &.next-month-day {
    color: #cccccc;
    font-weight: 800;
  }

  &.selected {
    border-radius: 50%;
    color: white;
    background-color: #6100FF;
    width: 70px;
    height: 30px;
    margin: 0 auto;
  }
`;

export default CalendarPage;
