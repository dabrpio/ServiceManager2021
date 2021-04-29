import { useState } from 'react';
import FormButton from '../FormButton';
import FormInput from '../FormInput';
import styles from './Login.module.scss';

function Login() {
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log(nameValue, passwordValue);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.login} onSubmit={handleLoginSubmit}>
        <h1 className={styles.login__heading}>Service Manager 2021</h1>

        <FormInput
          stateValue={nameValue}
          setValue={setNameValue}
          text="nazwa"
          inputType="text"
          error={nameError}
        />
        <p className={styles.error_message}>{nameError}</p>

        <FormInput
          stateValue={passwordValue}
          setValue={setPasswordValue}
          text="hasło"
          inputType="password"
          error={passwordError}
        />
        <p className={styles.error_message}>{passwordError}</p>
        <FormButton text="ZALOGUJ" color_dark={true} inputType="submit" />
      </form>
    </div>
  );
}

export default Login;
