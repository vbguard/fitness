import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

const HomePage = (props) => {
  const { auth } = props
  if (auth.uid) return <Redirect to="/cabinet" />
  return (
  <>
    <Carousel/>
  </>
  )}
const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(HomePage)
