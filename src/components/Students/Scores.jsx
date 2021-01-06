import React from "react";


const Scores = (props) => {
    return (
      <div>
        {props.scores.map((score) => (
          <p>
              <h3>Dates</h3>
              {score.date}
            <br/>
            <h3>Scores</h3>
            {score.score}
          </p>
        ))}
      </div>
    );
  };

export default Scores;
