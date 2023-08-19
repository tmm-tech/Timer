import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function DataPage({ timerData }) {
  return (
    <div className="DataPage">
      <h2>Timer Data</h2>
      <table>
        <thead>
          <tr>
            <th>Time (seconds)</th>
          </tr>
        </thead>
        <tbody>
          {timerData.map((data, index) => (
            <tr key={index}>
              <td>{data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DataPage;
