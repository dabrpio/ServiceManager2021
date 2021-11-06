import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';

function ClientDialogContent(props) {
  const { client, setClient, newClient } = props;

  const handleTextFieldChange =
    (name) =>
    ({ target: { value } }) => {
      setClient({ ...client, [name]: value });
    };

  const checkPhoneError = () =>
    ['', null].includes(client.nrTel)
      ? false
      : !`${client.nrTel}`.match(/^[0-9]{9}$/g);

  const checkEmailError = () =>
    ['', null].includes(client.eMail)
      ? false
      : !`${client.eMail}`.match(/^.+@.+\..+$/g);

  return (
    <DialogContent dividers>
      <TextField
        fullWidth
        label="Imie"
        type="text"
        value={client.imie ?? ''}
        onChange={handleTextFieldChange('imie')}
        style={{ marginTop: 16, marginBottom: 8 }}
        size="small"
      />
      <TextField
        fullWidth
        label="Nazwisko"
        type="text"
        value={client.nazwisko ?? ''}
        onChange={handleTextFieldChange('nazwisko')}
        style={{ marginTop: 16, marginBottom: 8 }}
        size="small"
      />
      <TextField
        fullWidth
        label="Nr telefonu"
        type="text"
        value={client.nrTel ?? ''}
        onChange={handleTextFieldChange('nrTel')}
        style={{ marginTop: 16, marginBottom: 8 }}
        size="small"
        error={checkPhoneError()}
      />
      <TextField
        fullWidth
        label="Email"
        type="email"
        value={client.eMail ?? ''}
        onChange={handleTextFieldChange('eMail')}
        style={{ marginTop: 16, marginBottom: 8 }}
        size="small"
        error={checkEmailError()}
      />

      {(newClient || client.nazwa) && (
        <>
          <TextField
            fullWidth
            label="Nazwa"
            type="text"
            value={client.nazwa ?? ''}
            onChange={handleTextFieldChange('nazwa')}
            style={{ marginTop: 16, marginBottom: 8 }}
            size="small"
          />

          <TextField
            fullWidth
            label="NIP"
            type="text"
            value={client.nip ?? ''}
            onChange={handleTextFieldChange('nip')}
            style={{ marginTop: 16, marginBottom: 24 }}
            size="small"
          />
        </>
      )}
    </DialogContent>
  );
}

export default ClientDialogContent;

ClientDialogContent.propTypes = {
  client: PropTypes.object.isRequired,
  newClient: PropTypes.bool,
};
