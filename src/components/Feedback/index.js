// Write your React code here.
import {Component} from 'react'
import Emoji from './Emoji'
import './index.css'

class Feedback extends Component {
  state = {isfeedbackResponsed: false}

  updateFeedback = () => {
    this.setState({isfeedbackResponsed: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isfeedbackResponsed} = this.state
    const feedbackCard = (
      <div className="card-container">
        <h1 className="card-heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachEmoji => (
            <Emoji
              key={eachEmoji.id}
              item={eachEmoji}
              updateFeedback={this.updateFeedback}
            />
          ))}
        </ul>
      </div>
    )
    const thankYouCard = (
      <div className="card-container">
        <img className="love-img" src={loveEmojiUrl} alt="love emoji" />
        <h1 className="card-heading">Thank you</h1>
        <p className="card-description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
    return (
      <div className="bg-container">
        {isfeedbackResponsed ? thankYouCard : feedbackCard}
      </div>
    )
  }
}

export default Feedback
