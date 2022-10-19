import { Fragment } from "react";

const GameLimits = (props) => {
  return (
    <Fragment>
      <div id="gameLimitCard">
        <div className="row">
          <div className="col-4">
            <div id="rangeCard1">
              <div>
                Range:{" "}
                <input
                  value={props.lowerLimit}
                  onChange={props.lowerLimitInputHandler}
                  type="number"
                  name="lowerRange"
                  className="text-center gameLimitsForm"
                  required
                />{" "}
                to{" "}
                <input
                  value={props.upperLimit}
                  onChange={props.upperLimitInputHandler}
                  type="number"
                  name="upperRange"
                  className="text-center gameLimitsForm mb-3"
                  required
                />
              </div>
              <div>
                Time Limit (s):{" "}
                <input
                  onChange={props.timeLimitInputHandler}
                  value={props.timeLimit}
                  type="number"
                  name="timeLimit"
                  className="text-center gameLimitsForm mb-3"
                  required
                />
              </div>
              <div>
                Number Of Questions:{" "}
                <input
                  onChange={props.numLimitInputHandler}
                  value={props.numLimit}
                  type="number"
                  name="numLimit"
                  className="text-center gameLimitsForm"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              cum iste asperiores. Consequatur quia nihil velit. Ipsa amet
              laudantium voluptates, ipsum odit quam officia, dolore, reiciendis
              dolorem hic repudiandae expedita. ol
            </p>
          </div>
          <div className="col-4">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              cum iste asperiores. Consequatur quia nihil velit. Ipsa amet
              laudantium voluptates, ipsum odit quam officia, dolore, reiciendis
              dolorem hic repudiandae expedita. ol
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={props.startQuiz}
          id="startBtn"
          className="mt-3 btn btn-success"
        >
          Start
        </button>
      </div>
    </Fragment>
  );
};

export default GameLimits;
