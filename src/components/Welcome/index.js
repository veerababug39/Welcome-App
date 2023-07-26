// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  subscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getSubscribe = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const subscribe = this.getSubscribe()

    return (
      <div>
        <div className="main-container">
          <h1 className="main-heading">Welcome</h1>
          <h1 className="heading">Thank you! Happy Learning</h1>
          <button className="button" type="button" onClick={this.subscribe}>
            {subscribe}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
