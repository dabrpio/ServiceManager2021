import { useState } from 'react';
import NavBar from '../NavBar';
import FormInput from '../FormInput';
import FormButton from '../FormButton';
import styles from './Settings.module.scss';

function Settings() {
  const [name, setName] = useState({
    oldName: '',
    newName: '',
  });

  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    newPasswordRepeated: '',
  });
  return (
    <>
      <NavBar />
      <div className={styles.settings}>
        <form className={styles.form}>
          <fieldset className={styles.form__name}>
            <h2 className={styles.form__heading}>ZMIANA NAZWY</h2>
            <FormInput
              inputType="text"
              stateValue={name}
              setValue={setName}
              valueKey="oldName"
              text="aktualna nazwa"
            />
            <FormInput
              inputType="text"
              stateValue={name}
              setValue={setName}
              valueKey="newName"
              text="nowa nazwa"
            />
          </fieldset>
          <fieldset className={styles.form__password}>
            <h2 className={styles.form__heading}>ZMIANA HASŁA</h2>
            <FormInput
              inputType="password"
              stateValue={password}
              setValue={setPassword}
              valueKey="oldPassword"
              text="aktualne hasło"
            />
            <FormInput
              inputType="password"
              stateValue={password}
              setValue={setPassword}
              valueKey="newPassword"
              text="nowe hasło"
            />
            <FormInput
              inputType="password"
              stateValue={password}
              setValue={setPassword}
              valueKey="newPasswordRepeated"
              text="powtórz nowe hasło"
            />
          </fieldset>
          <div className={styles.form__button_container}>
            <FormButton text="ZAPISZ" color_dark={true} />
          </div>
        </form>
      </div>
    </>
  );
}

export default Settings;
