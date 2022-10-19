const GameLimits = (props) => {
  return (
    <div>
      Range:{" "}
      <input
        value={props.lowerLimit}
        onChange={props.lowerLimitInputHandler}
        type="number"
        name="lowerRange"
      />{" "}
      to{" "}
      <input
        value={props.upperLimit}
        onChange={props.upperLimitInputHandler}
        type="number"
        name="upperRange"
      />
      <br />
      Time Limit (s):{" "}
      <input
        onChange={props.timeLimitInputHandler}
        value={props.timeLimit}
        type="number"
        name="timeLimit"
        className="mt-3"
      />
      <br />
      Number Of Questions:{" "}
      <input
        onChange={props.numLimitInputHandler}
        value={props.numLimit}
        type="number"
        name="numLimit"
        className="mt-3"
      />
      <br />
      <button onClick={startQuiz} className="mt-3 btn btn-success">
        Start
      </button>
    </div>
  );
};

export default GameLimits;
