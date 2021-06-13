import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useStyles } from './useStyles';

function Login() {
  const classes = useStyles();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [loginErrors] = useState({
    emailError: '',
    passwordError: '',
  });

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log(loginData);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.loginWrapper} maxWidth="sm">
        <form onSubmit={handleLoginSubmit} className={classes.loginForm}>
          <Typography component="h2" className={classes.heading}>
            Service Manager 2021
          </Typography>
          <TextField
            error={loginErrors.emailError.length > 0}
            fullWidth
            label="Email"
            type="text"
            value={loginData.email}
            helperText={loginErrors.emailError}
            onChange={(event) =>
              setLoginData({ ...loginData, email: event.target.value })
            }
            size="small"
            margin="normal"
          />
          <TextField
            error={loginErrors.passwordError.length > 0}
            fullWidth
            label="Hasło"
            type="password"
            value={loginData.password}
            helperText={loginErrors.passwordError}
            onChange={(event) =>
              setLoginData({ ...loginData, password: event.target.value })
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
            Zaloguj
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Login;
