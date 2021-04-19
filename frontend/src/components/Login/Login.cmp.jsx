import classnames from 'classnames';
import { useState } from 'react';
import styles from './Login.module.scss';

function Login() {
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  return (
    <div className={styles.wrapper}>
      <div className={styles.login}>
        <h1 className={styles.login__heading}>Service Manager 2021</h1>
        <input
          className={classnames(styles.login__input, {
            [styles.error]: nameError,
          })}
          type="text"
          placeholder="Nazwa"
        />
        <p className={styles.error_message}>{nameError}</p>
        <input
          className={classnames(styles.login__input, {
            [styles.error]: passwordError,
          })}
          type="password"
          placeholder="Hasło"
        />
        <p className={styles.error_message}>{passwordError}</p>
        <button className={styles.login__button}>Zaloguj</button>
      </div>
    </div>
  );
}

export default Login;
