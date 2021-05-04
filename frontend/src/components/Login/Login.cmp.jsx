import { useState } from 'react';
import FormButton from '../FormButton';
import FormInput from '../FormInput';
import styles from './Login.module.scss';

function Login() {
  const [loginData, setLoginData] = useState({
    name: '',
    password: '',
  });

  const [loginErrors, setLoginErrors] = useState({
    nameError: '',
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
    <div className={styles.wrapper}>
      <form className={styles.login} onSubmit={handleLoginSubmit}>
        <h1 className={styles.login__heading}>Service Manager 2021</h1>

        <FormInput
          stateValue={loginData.name}
          resetThenSet={setLoginInputData}
          valueKey="name"
          text="nazwa"
          inputType="text"
          error={loginErrors.nameError}
        />
        <p className={styles.error_message}>{loginErrors.nameError}</p>

        <FormInput
          stateValue={loginData.password}
          resetThenSet={setLoginInputData}
          valueKey="password"
          text="hasło"
          inputType="password"
          error={loginErrors.passwordError}
        />
        <p className={styles.error_message}>{loginErrors.passwordError}</p>
        <FormButton text="ZALOGUJ" color_dark={true} inputType="submit" />
      </form>
    </div>
  );
}

export default Login;
