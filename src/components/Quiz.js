import React, {useState, useContext, useEffect} from 'react';
import { Questions } from './Helpers/QuestionBank';
import { QuizContext } from './Helpers/Contexts';

export default function Quiz() {

  const [index, setIndex] = useState(0)
  const currQuestion = Questions[index]
  const [selectedAnswer, setSelectedAnswer] = useState('')

  const {gameState, setGameState, result, setResult} = useContext(QuizContext)


  const nextQuestion = () =>{    

    if(currQuestion?.answer === selectedAnswer){
      // setScore(prev => prev + 1)
      setResult((prev) => ({
        ...prev,
        score: prev.score + 5,
        correctAns: prev.correctAns + 1
      }))
    }
    else if(selectedAnswer === '') {
      alert('Please select an answer')
      return
    }
    else if(currQuestion?.answer !== selectedAnswer && selectedAnswer !== null) {
      setResult((prev) => ({
        ...prev,
        wrongAns: prev.wrongAns + 1,
      }))
    }
    if(index === Questions.length - 1) setGameState('endScreen')
    else setIndex(prev => prev + 1)    
  }


  const prevQuestion = () =>{

    setSelectedAnswer(null)    
    index !== 0 && setIndex(prev => prev - 1)    
  }

 

  const checkAnswer = (e,selectedAns) =>{
    // const ss = document.querySelector('ul.options > li.active');
    // if(ss != null) ss.classList.remove('active')
    // e.target.classList.add('active')
    setSelectedAnswer(selectedAns)
  }

  useEffect(() => {
    console.log('index ',index,currQuestion,Questions)
  }, [index])


  return (
    <div className="quiz">       
       <h2>{currQuestion?.question}</h2>
        <ul className='options'>
            {Object.entries(currQuestion?.choices).map(([key, value]) => {
                const lastChar = key.charAt(key.length - 1)
              return  <li className={`${selectedAnswer === lastChar ? 'active' : ''}`}
                         onClick={(e) => checkAnswer(e, lastChar)}>
                            {value}
                      </li>})
            }            
           {/* <li onClick={(e) => checkAnswer(e,'B')}>
             {currQuestion?.optionB}
            </li> */}
        </ul>
       <div className="next">
            <button onClick={prevQuestion} disbled={index === 0}>Back</button>      
            <button onClick={nextQuestion}>{index === Questions.length - 1 ? 'Finish Quiz' : 'Next Question'}</button>          
       </div>
       <div>{(index + 1)+ '/' +Questions?.length}</div>
    </div>
  );  
}

