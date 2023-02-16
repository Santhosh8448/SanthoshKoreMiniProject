import './index.css'

const FailurePage = props => {
  const {tryAgain} = props

  const onTryAgain = () => {
    tryAgain()
  }

  return (
    <div className="failure-view">
      <img
        className="failure-img"
        alt="failure view"
        src="https://res.cloudinary.com/dfhxhfcej/image/upload/v1676284670/Movies%20App%20-%20REACTJS/Background-Complete_ncxvft.png"
      />
      <p className="failure-text">Something went wrong. Please try again</p>
      <button onClick={onTryAgain} className="retry-btn" type="button">
        Try Again
      </button>
    </div>
  )
}

export default FailurePage
