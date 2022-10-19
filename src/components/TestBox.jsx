import { useState } from "react";

import Questions from "../components/Questions";
import Timer from "../components/Timer";
import ScoreBoard from "./ScoreBoard";
import GameLimits from "./GameLimits";

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

  //Game Object Data
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);
  const [operation, setOperation] = useState("+");
  const [name, setName] = useState("");

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

      let correctAnswer = 0;

      switch (operation) {
        case "+":
          correctAnswer = param1 + param2;
          break;
        case "-":
          correctAnswer = param1 - param2;
          break;
        case "x":
          correctAnswer = param1 * param2;
          break;
        case "/":
          correctAnswer = param1 / param2;
          break;
        default:
          return;
      }

      const question = {
        id: i,
        param1,
        param2,
        correctAnswer,
        guessed: 0,
        correct: false,
        operation,
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
    const newValue = parseInt(e.target.value);

    if (isNaN(newValue)) {
      setTimeLimit("");
    } else {
      setTimeLimit(newValue);
    }
  };

  const numLimitInputHandler = (e) => {
    const newValue = parseInt(e.target.value);

    if (isNaN(newValue)) {
      setNumLimit("");
    } else {
      setNumLimit(newValue);
    }
  };

  const lowerLimitInputHandler = (e) => {
    const newValue = parseInt(e.target.value);

    if (isNaN(newValue)) {
      setLowerLimit("");
    } else {
      setLowerLimit(newValue);
    }
  };

  const upperLimitInputHandler = (e) => {
    const newValue = parseInt(e.target.value);

    if (isNaN(newValue)) {
      setUpperLimit("");
    } else {
      setUpperLimit(newValue);
    }
  };

  const operationUpdateHandler = (e) => {
    setOperation(e.target.value);
  };

  const nameInputHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="testBox questionsCont">
      {beforeQuiz && (
        <GameLimits
          upperLimit={upperLimit}
          lowerLimit={lowerLimit}
          timeLimit={timeLimit}
          numLimit={numLimit}
          upperLimitInputHandler={upperLimitInputHandler}
          lowerLimitInputHandler={lowerLimitInputHandler}
          timeLimitInputHandler={timeLimitInputHandler}
          numLimitInputHandler={numLimitInputHandler}
          startQuiz={startQuiz}
          setOperation={operationUpdateHandler}
          setName={nameInputHandler}
        />
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

      {showScore && <ScoreBoard name={name} results={results} score={score} />}
    </div>
  );
};

export default TestBox;
