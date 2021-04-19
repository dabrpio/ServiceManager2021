import { Link, useRouteMatch } from 'react-router-dom';

function EmployeeList() {
  let { url } = useRouteMatch();

  return (
    <div>
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
    </div>
  );
}

export default EmployeeList;
