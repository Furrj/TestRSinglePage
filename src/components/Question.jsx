import { useRef } from "react";

const Question = (props) => {
  const answerRef = useRef();

  const submit = (e) => {
    e.preventDefault();

    if (props.question.correctAnswer === parseInt(answerRef.current.value)) {
      props.addToScore();
      props.question.guessed = parseInt(answerRef.current.value);
      props.question.correct = true;
      props.addToResults(props.question);
    } else {
      props.question.guessed = parseInt(answerRef.current.value);
      props.question.correct = false;
      props.addToResults(props.question);
    }

    props.submit();
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
          <input ref={answerRef} type="number" name="answer" />
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
