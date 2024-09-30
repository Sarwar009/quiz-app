import React, { useState, useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';

export default function Quiz() {
  
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currQuestion, setCurrentQuestion] =useState(0);
  const [optionChosen, setoptionChosen] = useState("");

  const nextQuestion = () =>{
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currQuestion + 1); 
  }

  const seeResult = () =>{
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("end"); 
  }

  return (
    <div className='Quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
       <button onClick={() => setoptionChosen('A')}> {Questions[currQuestion].optionA} </button>
       <button onClick={() => setoptionChosen('B')}> {Questions[currQuestion].optionB} </button>
       <button onClick={() => setoptionChosen('C')}> {Questions[currQuestion].optionC} </button>
       <button onClick={() => setoptionChosen('D')}> {Questions[currQuestion].optionD} </button>
      </div>

      {currQuestion == Questions.length -1 ? (
        <button onClick={seeResult}>See Result</button>
      ) : (
        <button onClick={nextQuestion}>Next</button>
      )}
      
    </div>
  )
}
