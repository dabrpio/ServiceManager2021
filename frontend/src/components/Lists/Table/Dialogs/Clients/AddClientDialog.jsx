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
import { setAlert } from '../../../../../store/alerts/alerts.actions';
import { postClient } from '../../../../../store/data/clients/clients.actions';
import ClientDialogContent from './ClientDialogContent';

const initialClient = {
  name: null,
  surname: null,
  phoneNumber: null,
  email: null,
};

const AddClientDialog = ({ addClient, showAlert }) => {
  const [client, setClient] = useState(initialClient);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setClient(initialClient);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (Object.values(client).some((e) => e === null || `${e}`.trim() === '')) {
      showAlert('Dane klienta nie są w pełni uzupełnione.');
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
        <ClientDialogContent client={client} setClient={setClient} />
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
  showAlert: (message) => dispatch(setAlert(message)),
});

export default connect(null, mapDispatchToProps)(AddClientDialog);

AddClientDialog.propTypes = {
  addClient: PropTypes.func.isRequired,
};
