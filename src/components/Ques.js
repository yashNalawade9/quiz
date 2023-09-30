import React from "react";
import { useMovieList } from "./FirebaseQues";

function Ques(props) {
  const QuesList = useMovieList();
  const question = QuesList[props.questionCount];
  if (!QuesList.length || !question) {
    return <div>Loading...</div>; // or some other placeholder UI
  }
  const handleChange = (answer) => {
    if (answer === question.Ans) {
      props.update(true);
    } else {
      props.update(false);
    }
  };

  console.log(question);
  const options = [
    question.option1,
    question.option2,
    question.option3,
    question.option4,
  ];
  return (
    <div>
      <p>{question.Ques}</p>
      {options.map((option) => (
        <div>
          <label>
            <input
              type="radio"
              name="option"
              key={option}
              onClick={() => handleChange(option)}
            />
            {option}
          </label>
          <br />
        </div>
      ))}
      {/* <input
        type="radio"
        name="option"
        key={question.option1}
        onClick={() => handleChange(question.option1)}
      />
      <label>{question.option1}</label>
      <br />
      <input
        type="radio"
        name="option"
        key={question.option2}
        onClick={() => handleChange(question.option2)}
      />
      <label>{question.option2}</label>
      <br />
      <input
        type="radio"
        name="option"
        key={question.option3}
        onClick={() => handleChange(question.option3)}
      />
      <label>{question.option3}</label>
      <br />
      <input
        type="radio"
        name="option"
        key={question.option4}
        onClick={() => handleChange(question.option4)}
      />
      <label>{question.option4}</label>
      <br /> */}
    </div>
  );
}

export default Ques;
