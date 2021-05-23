import { Container, Typography } from '@material-ui/core';
import { useState } from 'react';
import FormButton from '../FormButton';
import FormInput from '../FormInput';
import { useStyles } from './styles';

function Login() {
  const classes = useStyles();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [loginErrors, setLoginErrors] = useState({
    emailError: '',
    passwordError: '',
  });

  const setLoginInputData = (key, value) => {
    setLoginData({
      ...loginData,
      [key]: value,
    });
  };

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
          <FormInput
            stateValue={loginData.email}
            resetThenSet={setLoginInputData}
            valueKey="email"
            text="email"
            inputType="text"
            error={loginErrors.emailError}
          />
          <FormInput
            stateValue={loginData.password}
            resetThenSet={setLoginInputData}
            valueKey="password"
            text="hasło"
            inputType="password"
            error={loginErrors.passwordError}
          />
          <FormButton text="ZALOGUJ" inputType="submit" loginButton={true} />
        </form>
      </Container>
    </div>
  );
}

export default Login;
