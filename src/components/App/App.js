/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Header from '../Header/Header'

import './App.css'
import appRoutes from '../../routes/AppRoutes'
import { Switch, Route, Redirect } from 'react-router-dom'

const switchRoutes = () => {
  return (
    <Switch>
      {appRoutes.map((prop, key) => {
        if (prop.redirect)
          return <Redirect from={prop.path}
            key={key}
            to={prop.to}
          />
        return <Route component={prop.component}
          key={key}
          path={prop.path}
        />
      })}
    </Switch>
  )
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileOpen: false
    }
  }

  componentDidMount() {}

  getRoute() {
    return this.props.location.pathname
  }

  render() {
    console.log(this.props.location.pathname)
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          {this.getRoute() ? (
            <main>
              {switchRoutes(this.state)}
            </main>
          ) : (
            <div>
              <h2>some wrong</h2>
            </div>
          )}
        </div>
      </Provider>
    )
  }
}

export default App
