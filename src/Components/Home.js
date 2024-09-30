import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts';

export default function Home() {

    const { gamestate, setGameState } = useContext(QuizContext);
    

  return (
    <div className='Home'>
      <button
      onClick={() => {
        setGameState("quiz");
      }}>
        Start Quiz
      </button>
    </div>
  )
}
