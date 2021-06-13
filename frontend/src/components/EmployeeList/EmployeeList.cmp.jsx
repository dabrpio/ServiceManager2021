import PropTypes from 'prop-types';
import React from 'react';
import withEnhancedTable from '../Table/EnhancedTable';
import EmployeeTableRow from '../Table/Rows/EmployeeTableRow';

const EmployeeTable = withEnhancedTable(EmployeeTableRow);

const headCells = [
  {
    id: 'rodzajUzytkownika',
    label: 'Rodzaj',
  },
  {
    id: 'imie',
    label: 'Imie',
  },
  {
    id: 'nazwisko',
    label: 'Nazwisko',
  },
  {
    id: 'nrTel',
    label: 'Nr telefonu',
    smUp: true,
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
