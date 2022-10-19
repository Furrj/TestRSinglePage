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

  //Game Data
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);

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
    setTimeLimit(parseInt(e.target.value));
  };

  const numLimitInputHandler = (e) => {
    setNumLimit(parseInt(e.target.value));
  };

  const lowerLimitInputHandler = (e) => {
    setLowerLimit(parseInt(e.target.value));
  };

  const upperLimitInputHandler = (e) => {
    setUpperLimit(parseInt(e.target.value));
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

      {showScore && <ScoreBoard results={results} score={score} />}
    </div>
  );
};

export default TestBox;
