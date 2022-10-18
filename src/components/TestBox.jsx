import { useRef, useState } from "react";

import Questions from "../components/Questions";
import Timer from "../components/Timer";
import ScoreBoard from "./ScoreBoard";

const TestBox = () => {
  const [beforeQuiz, setBeforeQuiz] = useState(true);
  const [startedQuiz, setStartedQuiz] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);
  const [timeLimit, setTimeLimit] = useState(0);

  const lowerRangeRef = useRef();
  const upperRangeRef = useRef();
  const timeLimitRef = useRef();

  const toggleStartedQuiz = () => {
    setStartedQuiz(startedQuiz ? false : true);
  };

  const startQuiz = () => {
    setTimeLimit(parseInt(timeLimitRef.current.value));

    const lower = parseInt(lowerRangeRef.current.value);
    const upper = parseInt(upperRangeRef.current.value) + 1;

    setTimeout(() => {
      gameOver();
    }, 1000 * parseInt(timeLimitRef.current.value));

    generateQuestions(lower, upper);
    toggleStartedQuiz();
    setBeforeQuiz(false);
  };

  const generateQuestions = (min, max) => {
    const questionList = [];

    for (let i = 0; i < 3; i++) {
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

  return (
    <div className="testBox questionsCont">
      {beforeQuiz && (
        <div>
          Select Range:{" "}
          <input ref={lowerRangeRef} type="number" name="lowerRange" /> to{" "}
          <input ref={upperRangeRef} type="number" name="upperRange" />
          <br />
          Select Time Limit (s):{" "}
          <input ref={timeLimitRef} type="number" name="timeLimit" id="" />
          <button onClick={startQuiz} className="mt-3">
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
