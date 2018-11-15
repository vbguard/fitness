import React from 'react'
// nodejs library that concatenates classes
// import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import styles from './styles'

const CustomButton = ({ classes, children, path }) => (
  <Button className={classes.button}
    variant="contained"
  >
    <Link className={classes.buttonLink}
      to={path}
    >{children}</Link>
  </Button>
)
CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape.isRequired,
  path: PropTypes.string
}

CustomButton.defaultProp = {
  path: null
}
export default withStyles(styles)(CustomButton)
