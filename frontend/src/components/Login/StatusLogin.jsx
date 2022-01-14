import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { URL } from '../../constants';
import { useStyles } from './styles';
import Status from '../Status';

function StatusLogin() {
  const classes = useStyles();
  const [credentials, setCredentials] = useState({
    rma: '',
    email: '',
  });
  const [loginError, setLoginError] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${URL}/status/${credentials.rma}+${credentials.email}`)
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response;
      })
      .then((res) => res.json())
      .then((data) => setStatus(data))
      .catch(() => setLoginError('Nieprawidłowe dane logowanie'));
  };

  return (
    <div className={classes.root}>
      <Container className={classes.wrapper} maxWidth="xl">
        {status ? (
          <Status status={status} credentials={credentials} />
        ) : (
          <form onSubmit={handleSubmit} className={classes.loginForm}>
            <Typography component="h2" className={classes.heading}>
              Service Manager 2021
            </Typography>
            <Typography component="h4" className={classes.description}>
              Sprawdź status swojego zlecenia.
            </Typography>
            <TextField
              error={loginError.length > 0}
              fullWidth
              label="Email"
              type="text"
              value={credentials.email}
              onChange={(event) => {
                setCredentials({
                  ...credentials,
                  email: event.target.value,
                });
                setLoginError('');
              }}
              size="small"
              margin="normal"
            />
            <TextField
              error={loginError.length > 0}
              fullWidth
              label="RMA"
              type="text"
              value={credentials.rma}
              helperText={loginError}
              onChange={(event) => {
                setCredentials({ ...credentials, rma: event.target.value });
                setLoginError('');
              }}
              size="small"
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              onClick={handleSubmit}
              style={{ marginTop: 26 }}
            >
              Dalej
            </Button>
          </form>
        )}
      </Container>
    </div>
  );
}

export default StatusLogin;
