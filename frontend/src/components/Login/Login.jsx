import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useStyles } from './styles';
import { tryLogin } from '../../store/auth/auth.actions';

function Login({ login }) {
  const classes = useStyles();
  const [loginData, setLoginData] = useState({
    login: '',
    password: '',
  });
  const [loginError, setLoginError] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    login(loginData, setLoginError);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.wrapper} maxWidth="sm">
        <form onSubmit={handleLoginSubmit} className={classes.loginForm}>
          <Typography component="h2" className={classes.heading}>
            Service Manager 2021
          </Typography>
          <TextField
            error={loginError.length > 0}
            fullWidth
            label="Login"
            type="text"
            value={loginData.login}
            onChange={(event) => {
              setLoginData({ ...loginData, login: event.target.value });
              setLoginError('');
            }}
            size="small"
            margin="normal"
          />
          <TextField
            error={loginError.length > 0}
            fullWidth
            label="Hasło"
            type="password"
            value={loginData.password}
            helperText={loginError}
            onChange={(event) => {
              setLoginData({ ...loginData, password: event.target.value });
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
            style={{ marginTop: 26 }}
          >
            Zaloguj
          </Button>
        </form>
      </Container>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (credentials, setLoginError) =>
    dispatch(tryLogin(credentials, setLoginError)),
});

export default connect(null, mapDispatchToProps)(Login);
