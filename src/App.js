import React from 'react';
import MainScreen from './components/MainScreen';
import EndScreen from './components/EndScreen';
import Quiz from './components/Quiz';
import './assets/quiz.css'
import { useQuizData } from './context/QuizAppContext';
import useDarkMode from './hooks/useDarkMode';
import { Route } from 'react-router-dom';

export default function App() {

  const {theme, toggleTheme} = useDarkMode()
  const { gameState } = useQuizData()

  const routes = [{
    path: '/account',
    name: 'Account'
  
  },{
    path: '/hotels',
    name: 'HotelList'
  }]

  return (
    <>
    <div className={`app ${theme?.mode === 'dark' ? 'dark-theme' : ''}`}>
      <div className={`${theme?.mode === 'dark' ? 'dark-theme' : ''} main-menu`}> 
        <h1>Quiz App</h1>            
         {gameState === 'menu' ? <MainScreen /> : gameState === 'end' ? <EndScreen /> : <Quiz />} 
         {gameState === 'menu' && <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" 
                   checked={theme?.mode === 'light' ? false : true} onChange={toggleTheme}/>
            <label>Switch Mode({theme?.mode !== 'light' ? 'Dark' : 'Light'})</label>
        </div>}      
      </div>   
    </div>



{/* <Routes>
  {routes?.map((route,index) => (
      <Route path={`/${route?.path}`} element={`<${route?.name} />`} />
  ))}
</Routes> */}
</>
  );  
}

