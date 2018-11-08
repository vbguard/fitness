import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Header from '../Header/Header'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
        </div>
      </Provider>
    )
  }
}

export default App
