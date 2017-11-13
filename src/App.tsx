import * as React from 'react'
import './App.css'
import { displayNotification } from './shared/notification'
import * as rp from 'request-promise'

class App extends React.Component {
  constructor() {
    super()

    this.sendNotification = this.sendNotification.bind(this)
    displayNotification({'title': 'Title', 'message': 'The beautiful message'})
  }

  sendNotification() {
    rp.post('http://localhost/api/notify', {
      json: true,
      body: {
        userId: 1
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.sendNotification}>Send me a notification</button>
      </div>
    )
  }
}

export default App
