import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex,
`
const TimerWrapper = styled.div`
  flex: '1 0 40%'
`

const styles = theme => ({
  root: {
    width: '60%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    color: '#fff'
  },
  table: {
    minWidth: 300,
  },
  tableHead: {
    fontSize: '14px',
    fontFamily: 'Ubuntu',
    color: 'rgb(255, 255, 255)',
    lineHeight: '1.938',
    textAlign: 'center',
    borderBottom: 'none'
  },
  tableCell: {
    color: '#fff'
  }
})
class Exercises extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props
    return (
      <Wrapper>
        <Table classes={{
          root: classes.root,
          table: classes.table
        }}
        >
          <TableHead classes={{
            root: classes.tableHead
          }}
          >
            <TableRow>
              <TableCell classes={{
                root: classes.tableCell
              }}
              >{'Упражнения'}</TableCell>
              <TableCell classes={{
                root: classes.tableCell
              }}
              >{'Количество раз'}</TableCell>
              <TableCell classes={{
                root: classes.tableCell
              }}
              >{'Результат'}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {'some'}
          </TableBody>
        </Table>
        <TimerWrapper>
          {'TIMER!!!'}
        </TimerWrapper>
      </Wrapper>
    )
  }
}

export default  withStyles(styles)(Exercises)
