import React, { useState }from 'react'

interface GameState {
  score: number
  gameOver: boolean
}

const Game2: React.FC = () => {
  const initialState: GameState = {
    score: 99,
    gameOver: false
  }
  const [state, setState] = useState(initialState)
  const makeTimer = () => {
    setInterval(() => {
      const rand = Math.floor(Math.random() * 10)
      setState({ ...state,  score: rand })
    }, 1000)
  }
  makeTimer()

  return (
    <>
      <h4>Your Score Is: {state.score}</h4>
    </>
  )
}

export default Game2
