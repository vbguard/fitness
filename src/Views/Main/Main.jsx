import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Carousel from '../../components/Carousel/Carousel'
import Cabinet from '../Cabinet/Cabinet'
import styles from './styles.css'
// import Home from '../../Pages/home';

// eslint-disable-next-line
class Main extends Component {
  render() {
    const { userStatus } = this.props

    return (
      <div className={styles.main}>
        {userStatus ? <Cabinet /> : <Carousel />}
      </div>
    )
  }
}

Main.propTypes = {
  userStatus: PropTypes.bool.isRequired,
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
