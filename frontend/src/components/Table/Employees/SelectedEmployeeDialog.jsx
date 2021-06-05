import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { useState } from 'react';

import EmployeeDialogContent from './EmployeeDialogContent';

const SelectedEmployeeDialog = ({ employeeData, closeDialog }) => {
  const [employee, setEmployee] = useState(employeeData);

  const handleClose = () => {
    closeDialog();
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (Object.values(employee).some((e) => e === null || e === '')) {
      console.log('employee data is not fully filled');
    } else {
      console.log(
        'check for changes, updated:',
        JSON.stringify(employeeData) !== JSON.stringify(employee)
      );

      // updateTicket(ticket);
      handleClose();
    }
  };

  return (
    <div>
      <Dialog
        maxWidth="sm"
        open={Object.keys(employeeData).length > 0}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Pracownik {employee.id}
        </DialogTitle>
        <EmployeeDialogContent employee={employee} setEmployee={setEmployee} />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cofnij
          </Button>
          <Button onClick={handleSave} color="primary">
            Zapisz
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SelectedEmployeeDialog;

SelectedEmployeeDialog.propTypes = {
  employeeData: PropTypes.object.isRequired,
  closeDialog: PropTypes.func.isRequired,
};
