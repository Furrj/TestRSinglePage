import { useState, useEffect } from "react";

const Timer = (props) => {
  const [timeLeft, setTimeLeft] = useState(props.timeLimit);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((timeLeft) => timeLeft - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return <h3 id="timer">Time left: {timeLeft}</h3>;
};

export default Timer;
