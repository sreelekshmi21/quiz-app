import React, {useState, useContext} from 'react';
import { QuizContext } from './Helpers/Contexts';
import { Questions } from './Helpers/QuestionBank';

export default function EndScreen(){

  const {score,setScore,gameState,setGameState} = useContext(QuizContext)  
  
  const restartQuiz = () =>{

     console.log('restart quiz==========')

     setScore(0)
     setGameState('menu')


  }

  return (
    <div className="endscreen">
       <h2>Quiz is Over !!</h2>
       <h3>Your Score: {score} / {Questions.length}</h3>
       <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
  
}

