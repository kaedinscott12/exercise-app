import React from "react";
import { useCallback, useEffect, useState } from "react";

//timer from instrc

export default function DurationExercise() {
  let currentTimer = 0;
  let [running, setRunning] = useState(false);
  let [timer, setTimer] = useState(0);
  let updateTimer = useCallback(() => {
    if (running) {
      setTimer((timer) => timer + 10);
    }
  }, [running]);

  useEffect(() => {
    currentTimer = setInterval(updateTimer, 10);
    return () => clearInterval(currentTimer);
  }, [running]);
  let startStop = useCallback(() => {
    setRunning(!running);
    clearInterval(currentTimer);
  }, [running]);
  let reset = useCallback(() => {
    setTimer(0);
  });
  let mins = Math.floor((timer / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  let secs = Math.floor((timer / 1000) % 60)
    .toString()
    .padStart(2, "0");
  let mills = (timer % 1000).toString().padStart(2, "0");

  return (
    <div>
      <p>Exercise Name</p>
      <p>
        Timer: {mins}:{secs}:{mills}
      </p>
      <button onClick={startStop}>{running ? "Pause" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
