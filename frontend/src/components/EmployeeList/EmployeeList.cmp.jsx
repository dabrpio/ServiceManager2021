import { Link, useRouteMatch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { useStyles } from './styles';

function EmployeeList() {
  const classes = useStyles();
  const { url } = useRouteMatch();

  return (
    <div className={classes.root}>
      <Container>
        <h2>Employees</h2>
        <ul>
          <li>
            <Link to={`${url}/employee-id1`}>Employee 1</Link>
          </li>
          <li>
            <Link to={`${url}/employee-id2`}>Employee 2</Link>
          </li>
          <li>
            <Link to={`${url}/employee-id3`}>Employee 3</Link>
          </li>
          <li>
            <Link to={`${url}/new`}>new</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default EmployeeList;
