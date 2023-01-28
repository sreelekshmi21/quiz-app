import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { QuizContext } from './components/Helpers/Contexts';
import './components/quiz.css';


export default function App() {

  const [gameState, setGameState] = useState('menu')

  const [score, setScore] = useState(0)
  return (
    <div className="app">
       <h1>Quiz App</h1>
       <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>

      {gameState === 'menu' && <MainMenu />}
      {gameState === 'quiz' && <Quiz />}
      {gameState === 'endScreen' && <EndScreen />}

      </QuizContext.Provider>
    </div>
  );
  
}

