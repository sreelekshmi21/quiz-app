import React, {useState, useContext} from 'react';
import { QuizContext } from './Helpers/Contexts';
import { Questions } from './Helpers/QuestionBank';

export default function EndScreen(){

  const {result, setResult,gameState,setGameState} = useContext(QuizContext)  
  
  const restartQuiz = () =>{
     setResult({
       score: 0,
       correctAns: 0,
       wrongAns: 0
     })
     setGameState('menu')
  }

  return (
    <div className="endscreen">
       <h2>Quiz is Over !!  Your RESULT !!!</h2>
       <hr />
       <h3>Your Score: {result?.score} / 25</h3>
       <h3>Correct Answers: {result?.correctAns}</h3>
       <h3>Wrong Answers: {result?.wrongAns}</h3>
       <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
  
}

