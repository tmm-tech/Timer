import React from "react";
import { useLocation } from "react-router-dom";
import "./DataPage.css";

function DataPage() {
  const location = useLocation();
  const timerData = location.state?.timerData || [];

  return (
    <div className="DataPage">
      <h2>Timer Data</h2>
      <table>
        <thead>
          <tr>
            <th>Time (Minutes)</th>
            <th>Duration (seconds)</th>
            <th>Details</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {timerData.map((data, index) => (
            <tr key={index}>
              <td>{data.time}</td>
              <td>{data.duration}</td>
              <td>{data.details}</td>
              <td>{data.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataPage;
