import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStop,
  faClock,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import "./TimerPage.css";

const TimerPage = () => {
  const [timeInput, setTimeInput] = useState(0);
  const [time, setTime] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [detailsInput, setDetailsInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [bgColor, setBgColor] = useState("");


  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const toggleTimer = () => {
    if (isActive) {
      setIsActive(false);
      setIsPaused(true);
    } else {
      setIsActive(true);
      setIsPaused(false);
    }
  };

  const stopTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimeInput(0);
    setTime(0);
    setBgColor("");
  };

  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (isActive && time === 0) {
      setIsActive(false);
     
    }
  }, [isActive, time]);

  useEffect(() => {
    const totalSeconds = timeInput * 60; // Convert minutes to seconds
    const halfTime = totalSeconds / 2;
    const quarterTime = totalSeconds * 0.25;

    if (time == 0) {
      setBgColor("none");
    } else if (time <= 5) {
      setBgColor("red");
    } else if (time <= halfTime && time >= quarterTime) {
      setBgColor("green");
    } else if (time <= quarterTime && time >= 5) {
      setBgColor("yellow");
    } else {
      setBgColor("none");
    }
  }, [time, timeInput]);

  return (
    <div className={`timer-page ${bgColor}`}>
      <div className="timer-container">
        <FontAwesomeIcon icon={faClock} className="clock-icon" />
        <div className="timer">{formatTime(time)}</div>
        <div className="timer-controls">
          <button onClick={toggleTimer}>
            <FontAwesomeIcon icon={isActive ? faPause : faPlay} />
          </button>
          <button onClick={stopTimer}>
            <FontAwesomeIcon icon={faStop} />
          </button>
        </div>
      </div>
      <button className="data-entry-icon" onClick={togglePopup}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Set Timer and Details</h2>
            <div className="popup-input">
              <label htmlFor="timeInput">Time (minutes)</label>
              <input
                type="number"
                id="timeInput"
                value={timeInput}
                onChange={(e) => setTimeInput(parseInt(e.target.value))}
              />
            </div>
            <div className="popup-input">
              <label htmlFor="detailsInput">Other Details</label>
              <input
                type="text"
                id="detailsInput"
                value={detailsInput}
                onChange={(e) => setDetailsInput(e.target.value)}
              />
            </div>
            <button
              className="set-timer-button"
              onClick={() => {
                setTime(timeInput * 60); // Convert minutes to seconds
                togglePopup();
              }}
            >
              Set Timer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimerPage;
