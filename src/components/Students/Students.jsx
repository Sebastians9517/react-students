import React from "react";
import Scores from '../Students/Scores'

const Students = (props) => {
    return (
      <div>
        {props.students.map((student) => (
          <p>
            Student:  {student.name} <br/>
            Bio:  {student.bio}
            <Scores scores={student.scores} />
          </p>
        ))}
      </div>
    );
}

export default Students;
