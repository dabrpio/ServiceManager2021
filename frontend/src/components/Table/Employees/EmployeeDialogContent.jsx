import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import { employeeTypes } from '../../../common/dropdownOptions';

function EmployeeDialogContent(props) {
  const { employee, setEmployee, newEmployee } = props;

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
    <DialogContent dividers>
      <Autocomplete
        size="small"
        fullWidth
        value={
          employeeTypes.find(
            (type) => type.titleId === employee.rodzajUzytkownika
          )?.title ?? null
        }
        options={employeeTypes.map((type) => type.title)}
        getOptionSelected={(option, value) => option === value}
        onChange={(_, newValue) => {
          setEmployee({
            ...employee,
            rodzajUzytkownika: employeeTypes.find(
              (type) => type.title === newValue
            )?.titleId,
          });
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

      {newEmployee && (
        <TextField
          fullWidth
          label="Hasło"
          type="password"
          value={employee.haslo ?? ''}
          onChange={handleTextFieldChange('haslo')}
          style={{ marginTop: 16, marginBottom: 24 }}
          size="small"
        />
      )}
    </DialogContent>
  );
}

export default EmployeeDialogContent;

EmployeeDialogContent.propTypes = {
  employee: PropTypes.object.isRequired,
  newEmployee: PropTypes.bool,
};
