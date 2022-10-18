const GameLimits = (props) => {
  return (
    <div>
      Range: <input ref={lowerRangeRef} type="number" name="lowerRange" /> to{" "}
      <input ref={upperRangeRef} type="number" name="upperRange" />
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
  );
};

export default GameLimits;
