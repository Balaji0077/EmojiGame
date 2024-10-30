// Write your code here.
import {Component} from 'react'

import './index.css'

const WinLose = props => {
  const {winlosescore, playAgain} = props
  const play = () => playAgain()
  if (winlosescore === 12) {
    return (
      <li className="win-lose">
        <div className="win-lose-container">
          <div className="win-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              className="win-lose-img"
              alt="win or lose"
            />
          </div>
          <div className="text-container">
            <h1 className="win-lose-text">You Won</h1>
            <p className="score-winlose">Best Score</p>
            <p className="score-count">{winlosescore}/12</p>
            <button className="play-again-btn" onClick={play}>
              Play Again
            </button>
          </div>
        </div>
      </li>
    )
  }
  return (
    <li className="win-lose">
      <div className="win-lose-container">
        <div className="win-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            className="win-lose-img"
            alt="win or lose"
          />
        </div>
        <div className="text-container">
          <h1 className="win-lose-text">You Lose</h1>
          <p className="score-winlose">Score</p>
          <p className="score-count">{winlosescore}/12</p>
          <button className="play-again-btn" onClick={play}>
            Play Again
          </button>
        </div>
      </div>
    </li>
  )
}

export default WinLose
