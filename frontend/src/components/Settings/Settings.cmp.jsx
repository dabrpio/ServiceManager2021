import { useState } from 'react';
import FormInput from '../FormInput';
import FormButton from '../FormButton';
import { useStyles } from './styles';
import { Box, Typography } from '@material-ui/core';

function Settings() {
  const classes = useStyles();
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
    <div className={classes.root}>
      <Box className={classes.container}>
        <Typography component="h3" className={classes.heading}>
          Ustawienia
        </Typography>
        <form className={classes.form}>
          {/* <fieldset className={classes.form__name}>
            <Typography variant="h5" className={classes.form__heading}>
              ZMIANA NAZWY
            </Typography>
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
          </fieldset> */}
          <Typography variant="h5" className={classes.form__heading}>
            ZMIANA HASŁA
          </Typography>
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
          <FormButton text="ZAPISZ" color_dark={true} inputType="submit" />
        </form>
      </Box>
    </div>
  );
}

export default Settings;
