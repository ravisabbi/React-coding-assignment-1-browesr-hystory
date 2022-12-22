import './index.css'

const HystoryItem = props => {
  const {hystoryDetails, onDeleteItem} = props
  const {timeAccessed, title, logoUrl, domainUrl, id} = hystoryDetails

  const deleteItem = () => {
    onDeleteItem(id)
  }

  return (
    <li className="hystory-item">
      <div className="text-container">
        <p className="time-accessed">{timeAccessed}</p>
        <div className="logo-container">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <div className="title-domain-container">
            <p className="title">{title}</p>
            <p className="domainUrl">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button type="button" onClick={deleteItem} testId="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HystoryItem
