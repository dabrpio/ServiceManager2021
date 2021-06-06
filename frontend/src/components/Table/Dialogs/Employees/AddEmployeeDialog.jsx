import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { postEmployee } from '../../../../store/data/employees/employees.actions';
import EmployeeDialogContent from './EmployeeDialogContent';

const initialEmployee = {
  rodzajUzytkownika: null,
  imie: null,
  nazwisko: null,
  login: null,
  haslo: null,
  nrTel: null,
};

const AddEmployeeDialog = ({ addEmployee }) => {
  const [employee, setEmployee] = useState(initialEmployee);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setEmployee(initialEmployee);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (
      Object.values(employee).some((e) => e === null || `${e}`.trim() === '')
    ) {
      console.log('employee data is not fully filled');
    } else {
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
          newEmployee={true}
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
});

export default connect(null, mapDispatchToProps)(AddEmployeeDialog);

AddEmployeeDialog.propTypes = {
  addEmployee: PropTypes.func.isRequired,
};
