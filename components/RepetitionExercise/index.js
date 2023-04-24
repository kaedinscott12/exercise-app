import React from "react";
import { useState } from "react";

export default function RepetitionExercise() {
  let [rep, add] = useState(0);
  let reset = () => {
    add(0);
  };

  return (
    <div>
      <p>Exercise Name</p>
      <p>Reps: {rep}</p>
      <button onClick={() => add(rep + 1)}>Complete Rep</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
