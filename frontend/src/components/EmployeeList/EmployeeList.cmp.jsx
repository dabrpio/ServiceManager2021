import EmployeeTableRow from '../Table/Employees/EmployeeTableRow';
import withEnhancedTable from '../Table/EnhancedTable';

const EmployeeTable = withEnhancedTable(EmployeeTableRow);

const headCells = [
  {
    id: 'id',
    label: 'ID',
  },
  {
    id: 'login',
    label: 'Nazwa',
  },
  {
    id: 'rodzajUzytkownika',
    label: 'Rodzaj',
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
