import React, { useState } from "react";
import { CounterStyle,Button } from "./CounterStyle";

export default function Counter({counter,setCounter}) {

  return (
    <CounterStyle>
    <div className="calculator">
      <h2>Vagas:</h2>
      <div className="cell">
        <Button
          onClick={() => {
            if (counter > 1) {
              setCounter(counter - 1);
            }
          }}
        >
          -
        </Button>
        <div className="value">{counter}</div>
        <Button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </Button>
      </div>
    </div>
    </CounterStyle>
  );
}
