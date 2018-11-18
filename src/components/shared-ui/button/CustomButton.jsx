import React from 'react'
// nodejs library that concatenates classes
// import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import styles from './styles'

const CustomButton = ({ classes, children }) => (
  <Button className={classes.button}
    variant="contained"
  >{children}
  </Button>
)
CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
}

CustomButton.defaultProp = {
  classes: {}
}

export default withStyles(styles)(CustomButton)
