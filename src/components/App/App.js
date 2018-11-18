/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react'
import Header from '../Header/Header'
import './App.css'
import appRoutes from '../../routes/AppRoutes'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// import NoPage404 from '../../Views/not-found-page/index'


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
      {/* <Route component={NoPage404} /> */}
    </Switch>
  )
}
class App extends Component {
  constructor(props) {
    super(props)
  }


  // getRoute() {
  //   return this.props.location.pathname
  // }

  render() {
    console.log('app props render: ',this.props)
    return (
      <BrowserRouter>
        <div className="App">
          <Header location={this.props.history}
            match={this.props.match}/>
          {switchRoutes(this.state)}
        </div>
        {/* {this.getRoute() ? (
          <main>
            {switchRoutes(this.state)}
          </main>
        ) : (
          <div>
            <h2>some wrong</h2>
          </div>
        )} */}
      </BrowserRouter>
    )
  }
}

export default App
