import * as React from 'react'
import './App.css'

import * as rp from 'request-promise'

const logo = require('./logo.svg')

class App extends React.Component {
  constructor() {
    super()

    this.sendNotification = this.sendNotification.bind(this)
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <button onClick={this.sendNotification}>Send me a notification</button>
      </div>
    )
  }
}

export default App
