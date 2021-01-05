import React from "react";


const Scores = (props) => {
    return (
      <div>
        {props.scores.map((score) => (
          <p >Students Dates: {score.date}
            <br/>
            Student Score: {score.score}
          </p>
        ))}
      </div>
    );
  };

export default Scores;
