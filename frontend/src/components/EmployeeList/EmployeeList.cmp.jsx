import EmployeeTableRow from '../Table/Rows/EmployeeTableRow';
import withEnhancedTable from '../Table/EnhancedTable';
import PropTypes from 'prop-types';

const EmployeeTable = withEnhancedTable(EmployeeTableRow);

const headCells = [
  {
    id: 'id',
    label: 'ID',
  },
  {
    id: 'rodzajUzytkownika',
    label: 'Rodzaj',
  },
  {
    id: 'login',
    label: 'Nazwa',
  },

  {
    id: 'nrTel',
    label: 'Nr telefonu',
  },
];

function EmployeeList({ employees }) {
  return (
    <EmployeeTable
      headCells={headCells}
      data={employees}
      heading="Pracownicy"
    />
  );
}

export default EmployeeList;

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired,
};
