import classnames from 'classnames';
import { useState } from 'react';
import FormButton from '../FormButton';
import FormInput from '../FormInput';
import styles from './Login.module.scss';

function Login() {
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [nameError, setNameError] = useState('mm');
  const [passwordError, setPasswordError] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log(nameValue, passwordValue);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.login} onSubmit={handleLoginSubmit}>
        <h1 className={styles.login__heading}>Service Manager 2021</h1>
        {/* <input
          className={classnames(styles.login__input, {
            [styles.error]: nameError,
          })}
          type="text"
          value={nameValue}
          onChange={(event) => setNameValue(event.target.value)}
          placeholder="Nazwa"
          required
        /> */}
        <FormInput
          stateValue={nameValue}
          setValue={setNameValue}
          text="nazwa"
          inputType="text"
        />
        <p className={styles.error_message}>{nameError}</p>
        {/* <input
          className={classnames(styles.login__input, {
            [styles.error]: passwordError,
          })}
          type="password"
          value={passwordValue}
          onChange={(event) => setPasswordValue(event.target.value)}
          placeholder="Hasło"
          required
        /> */}
        <FormInput
          stateValue={passwordValue}
          setValue={setPasswordValue}
          text="hasło"
          inputType="password"
        />
        <p className={styles.error_message}>{passwordError}</p>
        <FormButton text="ZALOGUJ" color_dark={true} type="submit" />
      </form>
    </div>
  );
}

export default Login;
