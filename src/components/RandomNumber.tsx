import React, { useState }from 'react'

interface GameState {
  number: number
}

const Game2: React.FC = () => {
  const initialState: GameState = {
    number: 0
  }
  const [state, setState] = useState(initialState)
  const handleClick = () => {
      const rand = Math.floor(Math.random() * 10)
      setState({ number: rand })
  }

  return (
    <>
      <h4>Your Score Is: {state.number}</h4>
      {state.number === 7 && <h4>You Win!</h4>}
      <button onClick={handleClick}>click!</button>
    </>
  )
}

export default Game2
