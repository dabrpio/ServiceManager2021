import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postEmployee } from '../../../../../store/data/employees/employees.actions';
import { setAlert } from '../../../../../store/alerts/alerts.actions';
import EmployeeDialogContent from './EmployeeDialogContent';

const initialEmployee = {
  type: null,
  name: null,
  surname: null,
  login: null,
  password: null,
  phoneNumber: null,
  idCompany: 1,
  companyName: null,
  nip: null,
};

const AddEmployeeDialog = ({ addEmployee, showAlert }) => {
  const [employee, setEmployee] = useState(initialEmployee);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setEmployee(initialEmployee);
  };

  const destructureEmployee = (employee) => {
    if (employee.type === 4) {
      const { idCompany, ...rest } = employee;
      return rest;
    } else {
      const { idCompany, nip, companyName, ...rest } = employee;
      return rest;
    }
  };

  const handleAdd = (event) => {
    event.preventDefault();

    if (
      Object.values(destructureEmployee(employee)).some(
        (e) => e === null || `${e}`.trim() === ''
      )
    )
      showAlert('Dane pracownika nie są w pełni uzupełnione.');
    else {
      addEmployee(employee);
      handleClose();
    }
  };

  return (
    <div>
      <Tooltip title="Nowy pracownik">
        <IconButton aria-label="add" onClick={() => setOpen(true)}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Nowy pracownik</DialogTitle>
        <EmployeeDialogContent
          employee={employee}
          setEmployee={setEmployee}
          newEmployee
        />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cofnij
          </Button>
          <Button onClick={handleAdd} color="primary">
            Zapisz
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addEmployee: (data) => dispatch(postEmployee(data)),
  showAlert: (message) => dispatch(setAlert(message)),
});

export default connect(null, mapDispatchToProps)(AddEmployeeDialog);

AddEmployeeDialog.propTypes = {
  addEmployee: PropTypes.func.isRequired,
};
