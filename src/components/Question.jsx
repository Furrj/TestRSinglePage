import { useState } from "react";

const Question = (props) => {
  const [answer, setAnswer] = useState("");

  const answerHandler = (e) => {
    setAnswer(parseInt(e.target.value));
  };

  const submit = () => {
    if (props.question.correctAnswer === answer) {
      props.addToScore();
      props.question.guessed = answer;
      props.question.correct = true;
      props.addToResults(props.question);
    } else {
      props.question.guessed = answer;
      props.question.correct = false;
      props.addToResults(props.question);
    }

    props.submit();
  };

  const keyDownHandler = (e) => {
    if (e.code === "Enter") {
      submit();
    } else return;
  };

  return (
    <div className="card question m-3">
      <div className="card-body">
        <div className="card-text">
          {props.question.param1} X {props.question.param2}
        </div>
        <hr />
        <div className="card-text">
          <label htmlFor="answer">Answer</label>
          <br />
          <input
            autoFocus
            onChange={answerHandler}
            value={answer}
            type="number"
            name="answer"
            onKeyDown={keyDownHandler}
            className="form-control"
          />
          <br />
          <button className="mt-2" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
