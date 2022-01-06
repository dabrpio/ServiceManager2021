import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useStyles } from './styles';
import { useCommonSettingsStatsStyles } from '../styles';

function Settings() {
  const classes = { ...useStyles(), ...useCommonSettingsStatsStyles() };

  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    newPasswordRepeated: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(password);
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
              setPassword({ ...password, oldPassword: event.target.value })
            }
            size="small"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Nowe hasło"
            type="password"
            value={password.newPassword}
            onChange={(event) =>
              setPassword({ ...password, newPassword: event.target.value })
            }
            size="small"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Powtórz nowe hasło"
            type="password"
            value={password.newPasswordRepeated}
            onChange={(event) =>
              setPassword({
                ...password,
                newPasswordRepeated: event.target.value,
              })
            }
            size="small"
            margin="normal"
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

export default Settings;
