import { useState } from 'react';
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

  const setInputSettingsData = (key, value) => {
    if (key in name) {
      setName({
        ...name,
        [key]: value,
      });
    } else if (key in password) {
      setPassword({
        ...password,
        [key]: value,
      });
    }
  };

  return (
    <div className={styles.settings}>
      <form className={styles.form}>
        <fieldset className={styles.form__name}>
          <h2 className={styles.form__heading}>ZMIANA NAZWY</h2>
          <FormInput
            inputType="text"
            stateValue={name.oldName}
            resetThenSet={setInputSettingsData}
            valueKey="oldName"
            text="aktualna nazwa"
          />
          <FormInput
            inputType="text"
            stateValue={name.newName}
            resetThenSet={setInputSettingsData}
            setValue={setName}
            valueKey="newName"
            text="nowa nazwa"
          />
        </fieldset>
        <fieldset className={styles.form__password}>
          <h2 className={styles.form__heading}>ZMIANA HASŁA</h2>
          <FormInput
            inputType="password"
            stateValue={password.oldPassword}
            resetThenSet={setInputSettingsData}
            valueKey="oldPassword"
            text="aktualne hasło"
          />
          <FormInput
            inputType="password"
            stateValue={password.newPassword}
            resetThenSet={setInputSettingsData}
            valueKey="newPassword"
            text="nowe hasło"
          />
          <FormInput
            inputType="password"
            stateValue={password.newPasswordRepeated}
            resetThenSet={setInputSettingsData}
            valueKey="newPasswordRepeated"
            text="powtórz nowe hasło"
          />
        </fieldset>
        <div className={styles.form__button_container}>
          <FormButton text="ZAPISZ" color_dark={true} inputType="submit" />
        </div>
      </form>
    </div>
  );
}

export default Settings;
