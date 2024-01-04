import React, { createContext } from "react";

  const [gameState, setGameState] = useState('menu')

  const [result, setResult] = useState({
    score: 0,
    correctAns: 0,
    wrongAns: 0
  })
export const QuizContext = createContext()

export const QuizContextProvider = () =>
    <QuizContext.Provider value={{gameState, setGameState, result, setResult}}>

     
              {children}
      </QuizContext.Provider>
