// Write your code here

import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props
  const registered = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-size"
      />
      <h1 className="status">You have already registered for the event</h1>
    </div>
  )

  const registrationClosed = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yet-to-register"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const registerHere = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing Dance live can often make you fall totally in love with this
        beautiful art form
      </p>
      <button type="button" className="button-register">
        Register Here
      </button>
    </div>
  )
  switch (registrationStatus) {
    case 'REGISTERED':
      return registered()
    case 'YET_TO_REGISTER':
      return registerHere()
    case 'REGISTRATIONS_CLOSED':
      return registrationClosed()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
