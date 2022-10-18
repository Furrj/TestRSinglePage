import { useState, Fragment } from "react";

import Question from "./Question";

const Questions = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questionList = [];

  const changeCurrentQuestion = () => {
    if (currentQuestion < questionList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      props.gameOver();
    }
  };

  for (let q of props.questions) {
    questionList.push(
      <Question
        key={q.id}
        question={q}
        submit={changeCurrentQuestion}
        addToScore={props.addToScore}
        addToResults={props.addToResults}
      />
    );
  }

  return <Fragment>{questionList[currentQuestion]}</Fragment>;
};

export default Questions;
