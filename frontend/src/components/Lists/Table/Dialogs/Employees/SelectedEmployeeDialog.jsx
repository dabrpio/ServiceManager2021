import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  deleteEmployee,
  putEmployee,
} from '../../../../../store/data/employees/employees.actions';
import { setAlert } from '../../../../../store/alerts/alerts.actions';
import { useTicketDialogStyles } from '../styles';
import EmployeeDialogContent from './EmployeeDialogContent';

const SelectedEmployeeDialog = ({
  employeeData,
  closeDialog,
  updateEmployee,
  deleteEmployee,
  showAlert,
}) => {
  const [employee, setEmployee] = useState(employeeData);
  const classes = useTicketDialogStyles();

  const handleClose = () => {
    closeDialog();
  };

  const handleSave = (event) => {
    event.preventDefault();
    const { companyName, nip, ...dataToVerify } = employee;
    if (Object.values(dataToVerify).some((e) => e === null || e === ''))
      showAlert('Dane pracownika nie są w pełni uzupełnione.');
    else {
      if (JSON.stringify(employeeData) !== JSON.stringify(employee)) {
        updateEmployee(employee);
      }
      handleClose();
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    handleClose();
    deleteEmployee(employee.idEmployee);
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
          Pracownik {employee.idEmployee}
        </DialogTitle>
        <EmployeeDialogContent employee={employee} setEmployee={setEmployee} />
        <DialogActions classes={{ root: classes.dialogActions }}>
          <Button onClick={handleDelete} color="primary">
            Usuń
          </Button>
          <div>
            <Button onClick={handleClose} color="primary">
              Cofnij
            </Button>
            <Button onClick={handleSave} color="primary">
              Zapisz
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateEmployee: (data) => dispatch(putEmployee(data)),
  deleteEmployee: (id) => dispatch(deleteEmployee(id)),
  showAlert: (message) => dispatch(setAlert(message)),
});

export default connect(null, mapDispatchToProps)(SelectedEmployeeDialog);

SelectedEmployeeDialog.propTypes = {
  employeeData: PropTypes.object.isRequired,
  closeDialog: PropTypes.func.isRequired,
  updateEmployee: PropTypes.func.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};
