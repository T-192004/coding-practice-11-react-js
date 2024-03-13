import './Emoji.css'

const Emoji = props => {
  const {item, updateFeedback} = props
  const {name, imageUrl} = item
  const onUpdateFeedback = () => {
    updateFeedback()
  }
  return (
    <li className="emoji-container">
      <img
        className="emoji-img"
        src={imageUrl}
        alt={name}
        onClick={onUpdateFeedback}
      />
      <p className="emoji-name">{name}</p>
    </li>
  )
}

export default Emoji
