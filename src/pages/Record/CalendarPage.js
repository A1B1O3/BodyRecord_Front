import React, { useState } from 'react';
import './CalendarPage.css';

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
    const newSelectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
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
        <div key={`prev-${i}`} className="day prev-month-day">
          {daysInPreviousMonth - startDay + i + 1}
        </div>
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div key={`current-${i}`} 
             className={`day current-month-day ${isSelectedDate(i) ? 'selected' : ''}`}
             onClick={() => handleDayClick(i)}>
          {i}
        </div>
      );
    }
    const nextDaysToAdd = 7 - days.length % 7;
    if(nextDaysToAdd < 7) {
      for (let i = 1; i <= nextDaysToAdd; i++) {
        days.push(
          <div key={`next-${i}`} className="day next-month-day">
            {i}
          </div>
        );
      }
    }
    return days;
  };

  return (
    <div className="calendar-container">
      <div className="month-selector">
        <button onClick={goToPreviousMonth}>&lt;</button>
        <span>
          {`${currentDate.getFullYear()}.${String(currentDate.getMonth() + 1).padStart(2, '0')}`}
        </span>
        <button onClick={goToNextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">
        {['일', '월', '화', '수', '목', '금', '토'].map(dayName => (
          <div key={dayName} className="day-name">{dayName}</div>
        ))}
        {generateCalendar()}
      </div>
    </div>
  );
}

export default CalendarPage;
