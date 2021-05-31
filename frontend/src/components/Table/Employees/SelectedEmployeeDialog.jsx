import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { employeeTypes } from '../../../common/dropdownOptions';

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
      <Dialog
        maxWidth="sm"
        open={Object.keys(employeeData).length > 0}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Dane pracownika</DialogTitle>
        <DialogContent dividers>
          <Autocomplete
            size="small"
            fullWidth
            // temporary
            value={
              Object.prototype.toString.call(employee.rodzajUzytkownika) ===
              '[object String]'
                ? employee.rodzajUzytkownika
                : `${employee.rodzajUzytkownika}`
            }
            options={employeeTypes.map((i) => i.title)}
            getOptionSelected={(option, value) => option.title === value.title}
            onChange={(_, newValue) => {
              setEmployee({ ...employee, rodzajUzytkownika: newValue });
            }}
            renderInput={(params) => (
              <TextField {...params} label="Rodzaj konta" margin="normal" />
            )}
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
            label="Login"
            type="text"
            value={employee.login ?? ''}
            onChange={handleTextFieldChange('login')}
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
        </DialogContent>
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
