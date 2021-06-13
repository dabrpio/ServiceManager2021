import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postClient } from '../../../../store/data/clients/clients.actions';
import ClientDialogContent from './ClientDialogContent';

const initialClient = {
  imie: null,
  nazwisko: null,
  nrTel: null,
  eMail: null,
  nazwa: null,
  nip: null,
};

const AddClientDialog = ({ addClient }) => {
  const [client, setClient] = useState(initialClient);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setClient(initialClient);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const { nazwa, nip, ...data } = client;
    if (Object.values(data).some((e) => e === null || `${e}`.trim() === '')) {
      console.log('client data is not fully filled');
    } else {
      addClient(client);
      handleClose();
    }
  };

  return (
    <div>
      <Tooltip title="Nowy klient">
        <IconButton aria-label="add" onClick={() => setOpen(true)}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Nowy klient</DialogTitle>
        <ClientDialogContent
          client={client}
          setClient={setClient}
          newClient={true}
        />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cofnij
          </Button>
          <Button onClick={handleAdd} color="primary">
            Zapisz
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addClient: (data) => dispatch(postClient(data)),
});

export default connect(null, mapDispatchToProps)(AddClientDialog);

AddClientDialog.propTypes = {
  addClient: PropTypes.func.isRequired,
};
