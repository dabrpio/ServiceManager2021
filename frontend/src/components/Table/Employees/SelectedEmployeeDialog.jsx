import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTicketDialogStyles } from '../styles';

import EmployeeDialogContent from './EmployeeDialogContent';

const SelectedEmployeeDialog = ({ employeeData, closeDialog }) => {
  const [employee, setEmployee] = useState(employeeData);
  const classes = useTicketDialogStyles();

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

  const handleDelete = () => console.log('delete');

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
        <DialogActions classes={{ root: classes.dialogActions }}>
          <div>
            <Button onClick={handleSave} color="primary">
              Zapisz
            </Button>
            <Button onClick={handleClose} color="primary">
              Cofnij
            </Button>
          </div>
          <Button onClick={handleDelete} color="primary">
            Usuń
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
