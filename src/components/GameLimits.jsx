import { Fragment } from "react";

const GameLimits = (props) => {
  return (
    <Fragment>
      <div id="gameLimitCard">
        Range:{" "}
        <input
          value={props.lowerLimit}
          onChange={props.lowerLimitInputHandler}
          type="number"
          name="lowerRange"
          className="form-control text-center gameLimitsForm"
          required
        />{" "}
        to{" "}
        <input
          value={props.upperLimit}
          onChange={props.upperLimitInputHandler}
          type="number"
          name="upperRange"
          className="form-control text-center gameLimitsForm"
          required
        />
        <br />
        Time Limit (s):{" "}
        <input
          onChange={props.timeLimitInputHandler}
          value={props.timeLimit}
          type="number"
          name="timeLimit"
          className="mt-3 form-control text-center gameLimitsForm"
          required
        />
        <br />
        Number Of Questions:{" "}
        <input
          onChange={props.numLimitInputHandler}
          value={props.numLimit}
          type="number"
          name="numLimit"
          className="mt-3 form-control text-center gameLimitsForm"
          required
        />
        <br />
        <button onClick={props.startQuiz} className="mt-3 btn btn-success">
          Start
        </button>
      </div>
    </Fragment>
  );
};

export default GameLimits;
