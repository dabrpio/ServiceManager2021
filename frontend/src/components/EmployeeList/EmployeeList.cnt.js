import { connect } from 'react-redux';
import { selectEmployeesState } from '../../store/data/employees/employees.selectors';

import EmployeeList from './EmployeeList.cmp';

const mapStateToProps = (state, ownProps) => ({
  employees: selectEmployeesState(state).slice().reverse(),
});

export default connect(mapStateToProps, null)(EmployeeList);
