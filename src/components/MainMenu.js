import React, {useState, useContext} from 'react';
import { QuizContext } from './Helpers/Contexts';

export default function MainMenu() {

  const {gameState, setGameState} = useContext(QuizContext)
   
  return (
    <div className="main-menu">
       <h2>Main Menu</h2>
      {(gameState === 'menu' || gameState === 'endScreen') && <MainScreen />}
      {gameState === 'quiz' && <Quiz />}
       <button onClick={() => {
         setGameState('quiz')
       }}>Start Quiz</button>
    </div>
  );
  
}

