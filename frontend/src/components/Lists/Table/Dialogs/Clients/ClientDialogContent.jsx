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
    ['', null].includes(client.phoneNumber)
      ? false
      : !`${client.phoneNumber}`.match(/^[0-9]{9}$/g);

  const checkEmailError = () =>
    ['', null].includes(client.email)
      ? false
      : !`${client.email}`.match(/^.+@.+\..+$/g);

  return (
    <DialogContent dividers>
      <TextField
        fullWidth
        label="Imie"
        type="text"
        value={client.name ?? ''}
        onChange={handleTextFieldChange('name')}
        style={{ marginTop: 16, marginBottom: 8 }}
        size="small"
      />
      <TextField
        fullWidth
        label="Nazwisko"
        type="text"
        value={client.surname ?? ''}
        onChange={handleTextFieldChange('surname')}
        style={{ marginTop: 16, marginBottom: 8 }}
        size="small"
      />
      <TextField
        fullWidth
        label="Nr telefonu"
        type="text"
        value={client.phoneNumber ?? ''}
        onChange={handleTextFieldChange('phoneNumber')}
        style={{ marginTop: 16, marginBottom: 8 }}
        size="small"
        error={checkPhoneError()}
      />
      <TextField
        fullWidth
        label="Email"
        type="email"
        value={client.email ?? ''}
        onChange={handleTextFieldChange('email')}
        style={{ marginTop: 16, marginBottom: 8 }}
        size="small"
        error={checkEmailError()}
      />

      {(newClient || client.companyName || client.nip) && (
        <>
          <TextField
            fullWidth
            label="Nazwa"
            type="text"
            value={client.companyName ?? ''}
            onChange={handleTextFieldChange('companyName')}
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
