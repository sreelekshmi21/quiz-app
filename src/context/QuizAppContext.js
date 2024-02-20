import React, { createContext, useContext, useState } from "react";
  
  export const QuizContext = createContext()

  export const QuizContextProvider = ({children}) =>{
    
    const [gameState, setGameState] = useState('menu')
    const [result, setResult] = useState({
      score: 0,
      correctAns: 0,
      wrongAns: 0
    })
    
    return(
    <QuizContext.Provider value={{gameState, setGameState, result, setResult}}>     
              {children}
    </QuizContext.Provider>
    )
  }

  export const useQuizData = () => {
    const quizDatas = useContext(QuizContext)
    // console.log('quizDatas ',quizDatas)
    if(quizDatas === undefined){
      throw new Error('Undefined Err')
    }
    return quizDatas
  }

  //Theme context
  export const ThemeContext = createContext()

  export const ThemeContextProvider = ({children}) =>{
    const [theme, setTheme] = useState({mode: 'light'})
    
    return(
    <ThemeContext.Provider value={{theme, setTheme}}>     
              {children}
    </ThemeContext.Provider>
    )
  }

  export default function useTheme(){
    return useContext(ThemeContext)    
  }