import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 10px;
  text-align: center;
`;

const DotBox = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalendarDot = styled.div`
  margin-top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #f87171;
  border-line:none;
`;

const StyledCalendar = styled(Calendar)`
  border-radius: 30px;
  font-size:40px;
  width:700px;
  border:none;
  height:700px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;


const CalendarPage = () => {
  const [value, onChange] = useState(new Date());
  const dateArr = ["2022. 12. 10."];

  const tileClassName = ({ date }) => {
    const formattedDate = new Date(date).toLocaleDateString("ko", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return dateArr.includes(formattedDate) ? "highlighted-date" : "";
  };


  return (
    <Container>
      <StyledCalendar
        onChange={onChange}
        value={value}
        formatDay={(locale, date) =>
          new Date(date).toLocaleDateString("en-us", {
            day: "2-digit",
          })
        }
        tileContent={({ date, view }) => {
          const exist = dateArr.find(
            (oneDate) =>
              oneDate ===
              String(
                new Date(date).toLocaleDateString("ko", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              )
          );
          return (
            <>
              <DotBox>{exist && <CalendarDot />}</DotBox>
            </>
          );
        }}
        calendarType="US"
        locale="ko-KR"
        tileClassName={tileClassName}
      />
      <h1 className="month-indicator">
        {new Date(value).toLocaleDateString("ko", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </h1>
    </Container>
  );
};

export default CalendarPage;