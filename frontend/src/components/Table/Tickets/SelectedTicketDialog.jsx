import { Hidden, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import { useState } from 'react';
import TicketDialogContent from './TicketDialogContent';
import { useTicketDialogStyles } from '../styles';
import DocsButton from './DocsButton';

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
    const {
      informacje,
      eMail,
      dataPrzyjecia,
      dataWydania,
      nip,
      nazwa,
      ...dataToValidate
    } = ticket;
    if (Object.values(dataToValidate).some((e) => e === null || e === '')) {
      console.log('ticket is not fully filled:', ticket);
    } else {
      console.log(
        'check for changes, updated:',
        JSON.stringify(ticketData) !== JSON.stringify(ticket)
      );

      // updateTicket(ticket);
      handleClose();
    }
  };

  const handleDelete = () => console.log('delete');

  return (
    <Dialog
      maxWidth="md"
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
        <Hidden smUp>
          <Switch
            color="primary"
            checked={switchState}
            onChange={handleChangeSwitchState}
            name="status"
          />
        </Hidden>

        <Hidden xsDown>
          <div className={classes.titleActions}>
            <DocsButton classes={classes} />
            <FormControlLabel
              classes={{
                root: classes.formControlLabel,
                label: classes.switchLabel,
              }}
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
          </div>
        </Hidden>
      </DialogTitle>
      <TicketDialogContent
        classes={classes}
        ticket={ticket}
        setTicket={setTicket}
      />
      <DialogActions classes={{ root: classes.dialogActions }}>
        <Button onClick={handleDelete} color="primary">
          Usuń
        </Button>
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
