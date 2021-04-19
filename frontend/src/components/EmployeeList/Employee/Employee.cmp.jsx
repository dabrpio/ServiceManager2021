import { useParams } from 'react-router-dom';

function Employee() {
  let { employeeId } = useParams();

  return (
    <div>
      <h3>{employeeId}</h3>
    </div>
  );
}

export default Employee;
