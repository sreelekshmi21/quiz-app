import React from 'react';
import { useQuizData } from '../context/QuizAppContext';

export default function EndScreen(){

  const {result, setResult,setGameState} = useQuizData()
  
  const restartQuiz = () =>{
     setResult({
       score: 0,
       correctAns: 0,
       wrongAns: 0
     })
     setGameState('menu')
  }

  return (
    <>
       <h2>Quiz is Over !!  Your RESULT !!!</h2>
       <hr />
       <h3>Your Score: {result?.score} / 25</h3>
       {/* <h3>Correct Answers: {result?.correctAns}</h3> */}
       {/* <h3>Wrong Answers: {result?.wrongAns}</h3> */}
       <button onClick={restartQuiz}>Restart Quiz</button>
    </>
  );  
}

