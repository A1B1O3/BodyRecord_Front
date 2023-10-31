import React, { useState } from 'react';
import './RecordMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function RecordMain() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="record-main">
            <div className="header">
                <span className="title">운동기록</span>
                <FontAwesomeIcon icon={faBars} className="menu-icon" />
            </div>
            <hr />
            <div className="calendar-section">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    inline
                />
            </div>
            <div className="bmi-changes-section">
                <h3 className="bmi-title">체질량 지수 변화</h3>
                <div className="bmi-placeholder"></div>
            </div>
            <button className="record-exercise-button">
                운동 기록하기
            </button>
        </div>
    );
}

export default RecordMain;
