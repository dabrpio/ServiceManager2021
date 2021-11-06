import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  deleteClient,
  putClient,
} from '../../../../../store/data/clients/clients.actions';
import { useTicketDialogStyles } from '../styles';
import ClientDialogContent from './ClientDialogContent';

const SelectedClientDialog = (props) => {
  const { clientData, closeDialog, updateClient, deleteClient, deleteError } =
    props;
  const [client, setClient] = useState(clientData);
  const classes = useTicketDialogStyles();

  useEffect(() => {}, [deleteError]);

  const handleClose = () => {
    closeDialog();
  };

  const handleSave = (event) => {
    event.preventDefault();
    const { nazwa, nip, eMail, ...data } = client;
    if (Object.values(data).some((e) => e === null || e === '')) {
      console.log('client data is not fully filled');
    } else {
      if (JSON.stringify(clientData) !== JSON.stringify(client)) {
        updateClient(client);
      }
      handleClose();
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    handleClose();
    deleteClient(client.idKlienta);
  };

  return (
    <>
      <Dialog
        maxWidth="sm"
        open={Object.keys(clientData).length > 0}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Klient {client.idKlienta}
        </DialogTitle>
        <ClientDialogContent client={client} setClient={setClient} />
        <DialogActions classes={{ root: classes.dialogActions }}>
          <div>
            <Button onClick={handleSave} color="primary">
              Zapisz
            </Button>
            <Button onClick={handleClose} color="primary">
              Cofnij
            </Button>
          </div>
          <Button onClick={handleDelete} color="primary">
            Usuń
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateClient: (data) => dispatch(putClient(data)),
  deleteClient: (id) => dispatch(deleteClient(id)),
});

export default connect(null, mapDispatchToProps)(SelectedClientDialog);

SelectedClientDialog.propTypes = {
  clientData: PropTypes.object.isRequired,
  closeDialog: PropTypes.func.isRequired,
};
