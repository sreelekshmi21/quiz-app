import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { QuizContext, QuizContextProvider } from './components/Helpers/Contexts';
import './components/quiz.css';


export default function App() {

  // const [gameState, setGameState] = useState('menu')

  // const [result, setResult] = useState({
  //   score: 0,
  //   correctAns: 0,
  //   wrongAns: 0
  // })
  return (
    <div className="app">
       <h1>Quiz App</h1>
       <QuizContextProvider>
         <MainScreen />
       </QuizContextProvider>
    </div>
  );
  
}

