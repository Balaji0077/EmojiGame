// Write your code here.
import './index.css'

const Card = props => {
  const {item, pressed} = props
  const {emojiUrl, id, emojiName} = item
  const emojiPressed = () => pressed(id)
  return (
    <li className="list-card">
      <button className="image-btn list-card" onClick={emojiPressed}>
        <img src={emojiUrl} alt={emojiName} className="image-button" />
      </button>
    </li>
  )
}

export default Card
