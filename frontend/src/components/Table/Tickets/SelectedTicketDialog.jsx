import { Hidden, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';
import { useState } from 'react';
import TicketDialogContent from './TicketDialogContent';
import { useTicketDialogStyles } from '../styles';

const SelectedTicketDialog = ({ ticketData, closeDialog }) => {
  const classes = useTicketDialogStyles();
  const [ticket, setTicket] = useState(ticketData);
  const [switchState, setSwitchState] = useState(
    ticket.status === 'zrobione' ? true : false
  );

  const handleClose = () => {
    closeDialog();
  };

  const handleChangeSwitchState = (event) => {
    setSwitchState(event.target.checked);
    setTicket({
      ...ticket,
      status: event.target.checked ? 'zrobione' : 'oczekiwanie',
    });
  };

  const handleSave = (event) => {
    event.preventDefault();
    const { informacje, eMail, dataPrzyjecia, dataWydania, ...dataToValidate } =
      ticket;
    if (Object.values(dataToValidate).some((e) => e === null || e === '')) {
      console.log('ticket is not fully filled');
    } else {
      console.log(
        'check for changes, updated:',
        JSON.stringify(ticketData) !== JSON.stringify(ticket)
      );

      // updateTicket(ticket);
      handleClose();
    }
  };

  return (
    <Dialog
      maxWidth="sm"
      open={Object.keys(ticketData).length > 0}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle
        disableTypography
        id="form-dialog-title"
        classes={{ root: classes.dialogTitle }}
      >
        <Typography component="h2" variant="h6">
          Zlecenie {ticket.rma}
        </Typography>
        <FormControlLabel
          classes={{ root: classes.switchLabel }}
          control={
            <Switch
              color="primary"
              checked={switchState}
              onChange={handleChangeSwitchState}
              name="status"
            />
          }
          label={switchState ? 'Zrobione' : 'W naprawie'}
          labelPlacement="start"
        />
      </DialogTitle>
      <TicketDialogContent
        classes={classes}
        ticket={ticket}
        setTicket={setTicket}
      />
      <DialogActions classes={{ root: classes.dialogActions }}>
        <div>
          <Hidden xsDown>
            <Button color="primary">Dokument przyjęcia</Button>
            <Button color="primary">Gwarancja</Button>
          </Hidden>
        </div>
        <div>
          <Button onClick={handleClose} color="primary">
            Cofnij
          </Button>
          <Button onClick={handleSave} color="primary">
            Zapisz
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default SelectedTicketDialog;

SelectedTicketDialog.propTypes = {
  ticketData: PropTypes.object.isRequired,
  closeDialog: PropTypes.func.isRequired,
};
