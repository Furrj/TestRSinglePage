import { useState } from "react";

const Timer = (props) => {
  const [timeLeft, setTimeLeft] = useState(props.timeLimit);

  const timer = setInterval(() => {
    if (timeLeft > 0) {
      setTimeLeft(timeLeft - 1);
    } else {
      clearInterval(timer);
    }
  }, 1000);

  return <div id="timer">Time left: {timeLeft}</div>;
};

export default Timer;
