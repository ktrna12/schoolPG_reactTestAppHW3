import "./App.css";
import React, { useState } from "react";
import Skill from "./components/Skill.jsx";
import data from "./data.js";

function App() {
  const [isShow, setIsShow] = useState(true);
  const [cond, setCond] = useState("all");
  const getData = () => {
    if (cond === "all") {
      return data;
    }
    if (cond === "moreFiftyPercent") {
      return data.filter((i) => i.percent > 50);
    }
    if (cond === "lessFiftyPercent") {
      return data.filter((i) => i.percent < 50);
    }
  };
  return (
    <>
      <div className="button-container">
        <button
          className="myButton"
          onClick={() => {
            setCond("all");
            setIsShow(!isShow);
          }}
        >
          {isShow ? "Показать компетенции" : "Скрыть компетенции"}
        </button>
        {isShow && (
          <>
            <button
              className="myButton"
              onClick={() => {
                setCond("moreFiftyPercent");
                setIsShow(!isShow);
              }}
            >
              Показать компетенции с уровнем изучения больше 50%
            </button>
            <button
              className="myButton"
              onClick={() => {
                setCond("lessFiftyPercent");
                setIsShow(!isShow);
              }}
            >
              Показать компетенции с уровнем изучения меньше 50%
            </button>
          </>
        )}
      </div>
      {!isShow && (
        <ul>
          {getData().map((item, index) => Skill({ key: index, ...item }))}
        </ul>
      )}
    </>
  );
}

export default App;
