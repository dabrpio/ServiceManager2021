import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { employeeTypes } from '../../../common/dropdownOptions';
import { postEmployee } from '../../../store/data/employees/employees.actions';

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
    if (Object.values(employee).some((e) => e === null || e?.trim() === '')) {
      console.log('employee data is not fully filled');
    } else {
      // temporary
      const { imie, nazwisko, ...data } = employee;
      addEmployee(data);
      handleClose();
    }
  };

  const handleTextFieldChange =
    (name) =>
    ({ target: { value } }) => {
      setEmployee({ ...employee, [name]: value });
    };

  const checkPhoneError = () =>
    ['', null].includes(employee.nrTel)
      ? false
      : !`${employee.nrTel}`.match(/^[0-9]{9}$/g);

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
        <DialogContent dividers>
          <Autocomplete
            size="small"
            fullWidth
            value={
              employee.rodzajUzytkownika
                ? Object.prototype.toString.call(employee.rodzajUzytkownika) ===
                  '[object String]'
                  ? employee.rodzajUzytkownika
                  : `${employee.rodzajUzytkownika}`
                : ''
            }
            options={employeeTypes.map((i) => i.title)}
            getOptionSelected={(option, value) => option.title === value.title}
            onChange={(_, newValue) => {
              setEmployee({ ...employee, rodzajUzytkownika: newValue });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Rodzaj konta"
                style={{ margin: '0 0 8px 0' }}
              />
            )}
            // classes={{ paper: classes.autocomplete }}
          />
          <TextField
            fullWidth
            label="Imie"
            type="text"
            value={employee.imie ?? ''}
            onChange={handleTextFieldChange('imie')}
            style={{ marginTop: 16, marginBottom: 8 }}
            size="small"
          />
          <TextField
            fullWidth
            label="Nazwisko"
            type="text"
            value={employee.nazwisko ?? ''}
            onChange={handleTextFieldChange('nazwisko')}
            style={{ marginTop: 16, marginBottom: 8 }}
            size="small"
          />
          <TextField
            fullWidth
            label="Nr telefonu"
            type="text"
            value={employee.nrTel ?? ''}
            onChange={handleTextFieldChange('nrTel')}
            style={{ marginTop: 16, marginBottom: 8 }}
            size="small"
            error={checkPhoneError()}
          />
          <TextField
            fullWidth
            label="Login"
            type="text"
            value={employee.login ?? ''}
            onChange={handleTextFieldChange('login')}
            style={{ marginTop: 16, marginBottom: 8 }}
            size="small"
          />
          <TextField
            fullWidth
            label="Hasło"
            type="password"
            value={employee.haslo ?? ''}
            onChange={handleTextFieldChange('haslo')}
            style={{ marginTop: 16, marginBottom: 24 }}
            size="small"
          />
        </DialogContent>
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
