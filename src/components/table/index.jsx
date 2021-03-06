import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SimpleModalWrapped from '../modal';
import img1 from '../images/sport/1.jpg';
// import img2 from '../images/sport/2.jpg';
// import img3 from '../images/sport/3.jpg';
// import img4 from '../images/sport/4.jpg';
import img5 from '../images/sport/5o.jpg';
import img6 from '../images/sport/6v.jpg';
import img7 from '../images/sport/7pm.jpg';
import img8 from '../images/sport/8mnpl.jpg';
import img9 from '../images/sport/9p.jpeg';
import img10 from '../images/sport/10sls.jpg';
// import img11 from '../images/sport/11.jpg';
// import img12 from '../images/sport/12.jpg';
import img13 from '../images/sport/13planka.png';

// import  './style.css'

const CustomTableCell = withStyles(() => ({
  head: {
    fontSize: 13.93,
    padding: 0,
    textAlign: 'center',
    backgroundColor: '#231f20',
    borderBlockEndColor: '#231f20',
  },
  body: {
    fontSize: 8.95,
    borderBlockEndColor: '#231f20',
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: 344,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 344,
    align: 'center',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#231f20',
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#383425',
    },
  },
});

let id = 0;
function createData(name, numberOfTimes, result, image) {
  id += 1;
  return { id, name, numberOfTimes, result, image };
}

const rows = [
  createData('Разминка', '2 мин', '02:04', <SimpleModalWrapped img={img1} />),
  createData(
    'Бег на месте',
    '2 мин',
    '02:01',
    <SimpleModalWrapped img={img1} />,
  ),
  createData(
    'Класическое приседание',
    '20 мин',
    '02:04',
    <SimpleModalWrapped img={img1} />,
  ),
  createData('Отжимание', '10', '02:04', <SimpleModalWrapped img={img5} />),
  createData('Выпады', '20', '02:04', <SimpleModalWrapped img={img6} />),
  createData(
    'Прыжки с махами',
    '30',
    '02:04',
    <SimpleModalWrapped img={img7} />,
  ),
  createData(
    'Махи ногами в положении лежа на спине',
    '30',
    '02:04',
    <SimpleModalWrapped img={img8} />,
  ),
  createData('Прес', '40', '02:04', <SimpleModalWrapped img={img9} />),
  createData(
    'Скручивание (лежа на спине)',
    '30',
    '02:04',
    <SimpleModalWrapped img={img10} />,
  ),
  createData('Планка', '23с', '02:04', <SimpleModalWrapped img={img13} />),
  createData(
    'Бег на месте',
    '10 мин',
    '02:04',
    <SimpleModalWrapped img={img1} />,
  ),
  createData('Растяжка', '5 мин', '02:04', <SimpleModalWrapped img={img1} />),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell style={{ color: '#ffffff', width: '114.33px' }}>
              Упражнения
            </CustomTableCell>
            <CustomTableCell style={{ color: '#ffffff' }} numeric>
              Количество раз
            </CustomTableCell>
            <CustomTableCell style={{ color: '#ffffff', padding: '0' }} numeric>
              Результат
            </CustomTableCell>
            <CustomTableCell numeric>Фото</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell
                style={{
                  color: '#ffffff',
                  padding: '0',
                  align: 'center',
                }}
                component="th"
                scope="row"
              >
                <center>{row.name}</center>
              </CustomTableCell>
              <CustomTableCell
                style={{
                  color: '#ffffff',
                  padding: '0',
                }}
                numeric
              >
                <center>{row.numberOfTimes}</center>
              </CustomTableCell>
              <CustomTableCell
                style={{
                  color: '#ffffff',
                  padding: '0',
                }}
                numeric
              >
                <center>{row.result}</center>
              </CustomTableCell>
              <CustomTableCell
                style={{
                  background: '#231f20',
                  borderBlockEndColor: '#231f20',
                  padding: '0',
                }}
                numeric
              >
                <center>{row.img}</center>
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(CustomizedTable);
