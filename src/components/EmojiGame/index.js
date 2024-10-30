import {Component} from 'react'
import './index.css'
import Navbar from '../NavBar'
import Card from '../EmojiCard'
import WinLose from '../WinOrLoseCard'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
class EmojiGame extends Component {
  state = {
    navScoreDisplay: true,
    emojisClicked: [],
    score: 0,
    topScore: 0,
    emojiDisplay: true,
  }

  emojiClicked = unique => {
    const {
      emojisClicked,
      score,
      totalScore,
      emojiDisplay,
      navScoreDisplay,
    } = this.state
    if (emojisClicked.includes(unique)) {
      return this.setState({emojiDisplay: false, navScoreDisplay: false})
    }
    return this.setState(prevState => {
      if (prevState.score === 11) {
        return this.setState({
          emojiDisplay: false,
          score: 12,
          navScoreDisplay: false,
        })
      }
      return {
        score: prevState.score + 1,
        emojisClicked: [...emojisClicked, unique],
      }
    })
  }

  startPlay = () => {
    const {
      score,
      topScore,
      emojiDisplay,
      navScoreDisplay,
      emojisClicked,
    } = this.state
    if (score > topScore) {
      return this.setState({
        emojiDisplay: true,
        navScoreDisplay: true,
        topScore: score,
        score: 0,
        emojisClicked: [],
      })
    }
    return this.setState({
      emojiDisplay: true,
      navScoreDisplay: true,
      score: 0,
      emojisClicked: [],
    })
  }

  render() {
    const {emojisList} = this.props
    const {navScoreDisplay, score, emojiDisplay, topScore} = this.state
    const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)
    return (
      <div className="home-container">
        <Navbar navChange={navScoreDisplay} score={score} topScore={topScore} />
        <ul className="Emojis-list">
          {emojiDisplay ? (
            shuffledEmojisList().map(each => (
              <Card
                item={each}
                key={each.emojiName}
                pressed={this.emojiClicked}
              />
            ))
          ) : (
            <WinLose winlosescore={score} playAgain={this.startPlay} />
          )}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
