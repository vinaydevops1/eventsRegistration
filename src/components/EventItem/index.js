// Write your code here
import './index.css'

const EventItem = props => {
  const {eachItem, onClickEvent} = props
  const {imageUrl, name, location, id} = eachItem

  const onClickEventItem = () => {
    onClickEvent(id)
  }

  return (
    <li className="event-content">
      <button type="button" onClick={onClickEventItem} className="button-style">
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
