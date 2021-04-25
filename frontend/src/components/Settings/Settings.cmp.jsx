import { useState } from 'react';
import NavBar from '../NavBar';
import FormInput from '../FormInput';
import styles from './Settings.module.scss';

function Settings() {
  const [name, setName] = useState({
    oldName: '',
    newName: '',
  });
  return (
    <>
      <NavBar />
      <div className={styles.settings}>
        <form className={styles.form}>
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
        </form>
      </div>
    </>
  );
}

export default Settings;
