import * as React from 'react'

import './IndexPage.css'
const logo = require('../../logo.svg')

import BoardPage from '../BoardPage/BoardPage'

class IndexPage extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Prelectron</h2>
                </div>
                    <BoardPage />
            </div>
        )
    }
}

export default IndexPage
