import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';

export default function End() {

  const { score, setScore, setGameState } =useContext(QuizContext);

  const restart = () => {
    setScore(0);
    setGameState("home")
  }

  return (
    <div className='End'>
      <h1>Quiz Finished</h1>
      <h3>{score} / {Questions.length}</h3>
      <button onClick={restart}>Restart</button>
    </div>
  )
}
