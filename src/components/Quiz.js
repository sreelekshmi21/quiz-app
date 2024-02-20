import React, { useState, useEffect, useRef } from "react";
import { Questions } from "../service/QuestionBank";
import { useQuizData } from "../context/QuizAppContext";

export default function Quiz() {

  const [index, setIndex] = useState(0);
  const currQuestion = Questions[index];
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const prevBtn = useRef({
    prevClk: false,
    optChange: false
  })

  const { setGameState, result,setResult } = useQuizData()

  const nextQuestion = () => {
    console.log("arr.includes(index) next click",selectedAnswer,prevBtn,prevBtn.current,
    selectedAnswer[index], !selectedAnswer[index])
    // setSelectedAnswer('');
      if (currQuestion?.answer === selectedAnswer[index] && prevBtn.current.optChange) {
      // setScore(prev => prev + 1)
      setResult((prev) => ({
        ...prev,
        score: prev.score + 5,
        // correctAns: prev.correctAns + 1,
      }));
    } 
    else if (!selectedAnswer[index]) { 
      alert("Please select an answer");
      return;
    }
    else if (
      currQuestion?.answer !== selectedAnswer[index] &&
      selectedAnswer[index] && prevBtn.current.prevClk && prevBtn?.current.optChange
    ) {
      console.log("wrong ans dec score", selectedAnswer[index],prevBtn.current)
      setResult((prev) => ({
        ...prev,
        score: prev.score !== 5 ? prev.score - 5 : prev.score
      }));
    }
    if (index === Questions.length - 1) setGameState("end");
    else setIndex((prev) => prev + 1);

    prevBtn.current={
      prevClk: false,
      optChange: false
    }
  };

  const prevQuestion = () => {
    // setSelectedAnswer(null);    
    prevBtn.current = {
      optChange: false,
      prevClk: true
    }
    index !== 0 && setIndex((prev) => prev - 1);
  };

  const checkAnswer = (e, selectedAns) => {
    // const ss = document.querySelector('ul.options > li.active');
    // if(ss != null) ss.classList.remove('active')
    // e.target.classList.add('active')
    // setSelectedAnswer(selectedAns);
    if(prevBtn.current.prevClk){
      prevBtn.current = {
         prevClk: true,
         optChange: true
       }
    }
    else{
      prevBtn.current = {
        prevClk: false,
         optChange: true
       }
    }
    
    const arr = [...selectedAnswer]
    if(!arr[index]) arr[index] = selectedAns
    else arr[index] = selectedAns
    console.log("index 11 ww", selectedAnswer);
    setSelectedAnswer(arr);
  };

  useEffect(() => {
    console.log("index score", index, result,currQuestion, Questions);
  }, [index,result]);

  return (
    <>
      <h2>{currQuestion?.question}</h2>
      <ul className="options">
        {Object.entries(currQuestion?.choices).map(([key, value]) => {
          console.log("index vvvbbb", selectedAnswer,selectedAnswer[index]);
          const lastChar = key.charAt(key.length - 1);
          return (
            <li key={key}
                className={`${selectedAnswer[index] === lastChar ? "active" : ""}`}
                onClick={(e) => checkAnswer(e, lastChar)}>
              {value}
            </li>
          );
        })}
        {/* <li onClick={(e) => checkAnswer(e,'B')}>
             {currQuestion?.optionB}
            </li> */}
      </ul>
      <div className="next">
        <button onClick={prevQuestion} disabled={index === 0}>
          Back
        </button>
        <button onClick={nextQuestion}>
          {index === Questions.length - 1 ? "Finish Quiz" : "Next Question"}
        </button>
      </div>
      <div>{index + 1 + "/" + Questions?.length}</div>
    </>
  );
}
