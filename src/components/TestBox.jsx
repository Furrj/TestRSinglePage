import { useRef, useState } from "react";

import Questions from "../components/Questions";
import Timer from "../components/Timer";
import ScoreBoard from "./ScoreBoard";

const TestBox = () => {
  //Views
  const [beforeQuiz, setBeforeQuiz] = useState(true);
  const [startedQuiz, setStartedQuiz] = useState(false);
  const [showScore, setShowScore] = useState(false);

  //Game Controls
  const [upperLimit, setUpperLimit] = useState("");
  const [lowerLimit, setLowerLimit] = useState("");
  const [timeLimit, setTimeLimit] = useState(15);
  const [numLimit, setNumLimit] = useState(5);

  //Game Data
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);

  const lowerRangeRef = useRef();
  const upperRangeRef = useRef();

  const toggleStartedQuiz = () => {
    setStartedQuiz(startedQuiz ? false : true);
  };

  const startQuiz = () => {
    setTimeout(() => {
      gameOver();
    }, 1000 * timeLimit);

    generateQuestions(lowerLimit, upperLimit + 1);
    toggleStartedQuiz();
    setBeforeQuiz(false);
  };

  const generateQuestions = (min, max) => {
    const questionList = [];

    for (let i = 0; i < numLimit; i++) {
      const param1 = Math.floor(Math.random() * (max - min)) + min;
      const param2 = Math.floor(Math.random() * (max - min)) + min;

      const question = {
        id: i,
        param1,
        param2,
        correctAnswer: param1 * param2,
        guessed: 0,
        correct: false,
      };

      questionList.push(question);
    }

    setQuestions(questionList);
  };

  const addToScore = () => {
    setScore(score + 1);
  };

  const gameOver = () => {
    setStartedQuiz(false);
    setShowScore(true);
  };

  const addToResults = (question) => {
    setResults((results) => [...results, question]);
  };

  //Input Handlers
  const timeLimitInputHandler = (e) => {
    setTimeLimit(e.target.value);
  };

  const numLimitInputHandler = (e) => {
    setNumLimit(e.target.value);
  };

  const lowerLimitInputHandler = (e) => {
    setLowerLimit(e.target.value);
  };

  const upperLimitInputHandler = (e) => {
    setUpperLimit(e.target.value);
  };

  return (
    <div className="testBox questionsCont">
      {beforeQuiz && (
        <div>
          Range:{" "}
          <input
            value={lowerLimit}
            onChange={lowerLimitInputHandler}
            type="number"
            name="lowerRange"
          />{" "}
          to{" "}
          <input
            value={upperLimit}
            onChange={upperLimitInputHandler}
            type="number"
            name="upperRange"
          />
          <br />
          Time Limit (s):{" "}
          <input
            onChange={timeLimitInputHandler}
            value={timeLimit}
            type="number"
            name="timeLimit"
            className="mt-3"
          />
          <br />
          Number Of Questions:{" "}
          <input
            onChange={numLimitInputHandler}
            value={numLimit}
            type="number"
            name="numLimit"
            className="mt-3"
          />
          <br />
          <button onClick={startQuiz} className="mt-3 btn btn-success">
            Start
          </button>
        </div>
      )}

      {startedQuiz && <Timer timeLimit={timeLimit} />}

      {startedQuiz && (
        <Questions
          questions={questions}
          addToScore={addToScore}
          gameOver={gameOver}
          addToResults={addToResults}
        />
      )}

      {showScore && <ScoreBoard results={results} score={score} />}
    </div>
  );
};

export default TestBox;
