import { useState, useContext } from 'react';
import './App.css';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import End from './Components/End';

import { QuizContext } from './Helpers/Contexts';

function App() {

  const [gameState, setGameState] = useState("home");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>

      <QuizContext.Provider value={{ gameState, setGameState, score, setScore}}>
        {gameState === "home" && <Home />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <End />}
      </QuizContext.Provider>

      </div>
  );
}

export default App;
