import React, { useState } from "react";
import { CounterStyle } from "./CounterStyle";

export default function Counter({counter,setCounter}) {

  return (
    <CounterStyle>
    <div className="calculator">
      <h2>Vagas:</h2>
      <div className="cell">
        <button
          onClick={() => {
            if (counter > 1) {
              setCounter(counter - 1);
            }
          }}
        >
          -
        </button>
        <div className="value">{counter}</div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
    </CounterStyle>
  );
}
