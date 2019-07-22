import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [down, setDown] = useState(1);
  const [ballOn, setBallOn] = useState(15);
  const [qtr, setQtr] = useState(3);
  
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{10-down}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{qtr}</div>
      </div>
      <button className="randomize" onClick={() => {
        setDown(Math.floor(Math.random() * (10-1) + 1))
        setBallOn(Math.floor(Math.random() * (52-1) + 1))
        setQtr(Math.floor(Math.random() * (5-1) + 1))
      }}>Random Stats</button>
    </div>
  );
};

export default BottomRow;
