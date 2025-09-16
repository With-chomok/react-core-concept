import { useState } from "react";
export default function HandleBall() {
  const [ball, setBall] = useState(0);
  const handleBallCount = () => {
    const updatedBall = ball + 1;
    setBall(updatedBall)
  }
  return (
    <div>
      <h1>All Ball Counter</h1>
      {
        ball > 6 && <h2>Over is Complete</h2>
      }
      <button onClick={handleBallCount}>Ball Count: {ball}</button>
    </div>
  );
}
