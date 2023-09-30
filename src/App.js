import React, { useState, useEffect } from "react";
import "./App.css";
import Ques from "./components/Ques";
import { useMovieList } from "./components/FirebaseQues";

function App() {
  const QuesList = useMovieList();
  const [questionCount, setQuestionCount] = useState(0);
  const total = QuesList.length;
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30); // Timer in seconds

  useEffect(() => {
    // Start the timer when a new question is displayed
    if (questionCount < total) {
      const countdown = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          // When the timer reaches 0, automatically move to the next question
          handleChange();
          update();
        }
      }, 1000);

      // Clean up the interval when the component unmounts or the question changes
      return () => clearInterval(countdown);
    }
  }, [questionCount, timer, total]);

  const handleChange = () => {
    const count = questionCount + 1;
    if (count < total) {
      setQuestionCount(count);
      setTimer(30); // Reset the timer for the next question
    } else {
      setShowScore(true);
    }
  };

  const update = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const restartQuiz = () => {
    setQuestionCount(0);
    setScore(0); // Reset the score
    setShowScore(false);
    setTimer(30); // Reset the timer
  };

  return (
    <div className="App">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {total}
          <br />
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h3>Quiz</h3>
          <h4>Question {`${questionCount + 1}/${total}`}</h4>
          <p>Time Left: {timer} seconds</p>
          <Ques questionCount={questionCount} update={update} />
          <button onClick={handleChange}>Next Question</button>
        </div>
      )}
    </div>
  );
}

export default App;
