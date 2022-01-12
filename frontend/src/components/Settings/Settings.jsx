import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useStyles } from './styles';
import { useCommonSettingsStatsStyles } from '../styles';
import { changePassword } from '../../store/data/employees/employees.actions';
import { connect } from 'react-redux';

function Settings({ changePassword }) {
  const classes = { ...useStyles(), ...useCommonSettingsStatsStyles() };
  const initialState = {
    wrongPassword: false,
    notMatchingPasswords: false,
    emptyOldPasword: false,
    emptyNewPassword: false,
  };
  const [error, setError] = useState(initialState);

  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    newPasswordRepeated: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(password);
    if (password.oldPassword.trim() === '') {
      setError({ ...error, emptyOldPasword: true });
    } else {
      if (password.newPassword.trim() === '') {
        setError({ ...error, emptyNewPassword: true });
      } else {
        if (password.newPassword !== password.newPasswordRepeated) {
          setError({ ...error, notMatchingPasswords: true });
        } else {
          changePassword({
            password: password.oldPassword,
            newPassword: password.newPassword,
          });
          // console.log(success);
          // if (!success) {
          //   setError({ ...error, wrongPassword: true });
          // }
        }
      }
    }
  };

  const handleChange = (property, value) => {
    setPassword({ ...password, [property]: value });
    setError(initialState);
  };

  return (
    <Grid className={classes.root}>
      <Paper className={classes.wrapper}>
        <Typography component="h3" variant="h4" className={classes.heading}>
          Ustawienia
        </Typography>
        <Paper
          className={classes.password_change}
          component="form"
          onSubmit={handleSubmit}
        >
          <Typography
            component="h5"
            variant="h6"
            className={classes.form_heading}
          >
            Zmiana hasła
          </Typography>
          <TextField
            fullWidth
            label="Aktualne hasło"
            type="password"
            value={password.oldPassword}
            onChange={(event) =>
              handleChange('oldPassword', event.target.value)
            }
            size="small"
            margin="normal"
            error={error.emptyOldPasword || error.wrongPassword}
            helperText={
              error.emptyOldPasword
                ? 'Aktualne hasło nie może być puste'
                : error.wrongPassword
                ? 'Nieprawidłowe hasło'
                : ''
            }
          />
          <TextField
            fullWidth
            label="Nowe hasło"
            type="password"
            value={password.newPassword}
            onChange={(event) =>
              handleChange('newPassword', event.target.value)
            }
            size="small"
            margin="normal"
            error={error.emptyNewPassword || error.notMatchingPasswords}
            helperText={
              error.emptyNewPassword ? 'Hasło nie może być puste' : ''
            }
          />
          <TextField
            fullWidth
            label="Powtórz nowe hasło"
            type="password"
            value={password.newPasswordRepeated}
            onChange={(event) =>
              handleChange('newPasswordRepeated', event.target.value)
            }
            size="small"
            margin="normal"
            error={error.notMatchingPasswords}
            helperText={error.notMatchingPasswords ? 'Hasła się różnią' : ''}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            style={{ marginTop: 26 }}
          >
            Zapisz
          </Button>
        </Paper>
      </Paper>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  changePassword: (credentials) => dispatch(changePassword(credentials)),
});

export default connect(null, mapDispatchToProps)(Settings);
