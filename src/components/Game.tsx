import React, { useState }from 'react'

interface GameState {
  score: number
  gameOver: boolean
}

const initialState: GameState = {
  score: 0,
  gameOver: false
}

const Game: React.FC = () => {
  const [state, setState] = useState(initialState)
  return (
    <>
      <h4>Your Score Is: {state.score}</h4>
    </>
  )
}

export default Game
