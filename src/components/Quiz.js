import React, {useState, useContext} from 'react';
import { Questions } from './Helpers/QuestionBank';
import { QuizContext } from './Helpers/Contexts';

export default function Quiz() {

  const [currQuestion, setCurrQuestion] = useState(0)

  const [userAnswer, setUserAnswer] = useState('')

  const {gameState, setGameState, score, setScore} = useContext(QuizContext)


  const nextQuestion = () =>{

    console.log('next====Question========')

    

    if(Questions[currQuestion].answer === userAnswer){

        console.log('correct ans')
        setScore(score + 1)

        
    }

    console.log('score====',score)
        setCurrQuestion(currQuestion + 1)

    
  }

  const finishQuiz = () =>{

    console.log('in finish quiz----------')
    if(Questions[currQuestion].answer === userAnswer){

        console.log('correct ans')
        setScore(score + 1)
    }

    console.log('score====',score)
    setGameState('endScreen')

  }
  return (
    <div className="quiz">
       
       <h2>{Questions[currQuestion].question}</h2>
       <div className="options">
            <button onClick={() => setUserAnswer('A')}>
             {Questions[currQuestion].optionA}
            </button>
           <button onClick={() => setUserAnswer('B')}>
             {Questions[currQuestion].optionB}
            </button>
           <button onClick={() => setUserAnswer('C')}>
             {Questions[currQuestion].optionC}
            </button>
           <button onClick={() => setUserAnswer('D')}>
             {Questions[currQuestion].optionD}
            </button>
       </div>
       <div className="next">
           {currQuestion === Questions.length - 1 ? (

          <button onClick={finishQuiz}>Finish Quiz</button>
          ) : (
            <button onClick={nextQuestion}>Next Question</button>
          )
        }
           
       </div>
    </div>
  );
  
}

