// Write your code here.
import {Component} from 'react'

import './index.css'

class Navbar extends Component {
  render() {
    const {navChange, score, topScore} = this.props
    return navChange ? (
      <div className="navbar">
        <div className="container">
          <div className="image-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
              className="logo-image"
            />
            <h1 className="logo-name">Emoji Game</h1>
          </div>
          <div className="score-top-score-container">
            <p className="score">Score: {score}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        </div>
      </div>
    ) : (
      <div className="navbar nav-no-score">
        <div className="image-logo-container image-logo-no-score">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo-image"
          />
          <h1 className="logo-name">Emoji Game</h1>
        </div>
      </div>
    )
  }
}

export default Navbar
