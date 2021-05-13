import { useParams } from 'react-router-dom';
import styles from './Employee.module.scss';

function Employee() {
  let { employeeId } = useParams();

  return (
    <div className={styles.employee}>
      <h3>{employeeId}</h3>
    </div>
  );
}

export default Employee;
