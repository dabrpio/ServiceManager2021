import { Hidden, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  deleteTicket,
  putTicket,
} from '../../../../../store/data/tickets/tickets.actions';
import { setAlert } from '../../../../../store/alerts/alerts.actions';
import { useTicketDialogStyles } from '../styles';
import DocsButton from './DocsButton';
import TicketDialogContent from './TicketDialogContent';

const SelectedTicketDialog = ({
  ticketData,
  closeDialog,
  deleteTicket,
  updateTicket,
  showAlert,
}) => {
  const classes = useTicketDialogStyles();
  const [ticket, setTicket] = useState(ticketData);
  const [switchState, setSwitchState] = useState(
    ticket.status === 'done' ? true : false
  );

  const handleChangeSwitchState = (event) => {
    setSwitchState(event.target.checked);
    setTicket({
      ...ticket,
      status: event.target.checked ? 'done' : 'accepted',
    });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const {
      information,
      email,
      beginDate,
      endDate,
      nip,
      companyName,
      idCompany,
      repairCost,
      partsCost,
      ...dataToValidate
    } = ticket;

    if (Object.values(dataToValidate).some((e) => e === null || e === '')) {
      showAlert('Dane zlecenia nie są w pełni uzupełnione.');
    } else {
      if (JSON.stringify(ticketData) !== JSON.stringify(ticket)) {
        updateTicket(ticket);
      }
      closeDialog();
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    closeDialog();
    deleteTicket(ticket.rma);
  };

  return (
    <Dialog
      maxWidth="md"
      open={Object.keys(ticketData).length > 0}
      onClose={closeDialog}
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
        {(ticket.status === 'done' || ticket.status === 'accepted') && (
          <>
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
                <DocsButton classes={classes} ticket={ticket} />
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
          </>
        )}
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
          <Button onClick={closeDialog} color="primary">
            Cofnij
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Zapisz
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTicket: (id) => dispatch(deleteTicket(id)),
  updateTicket: (data) => dispatch(putTicket(data)),
  showAlert: (message) => dispatch(setAlert(message)),
});

export default connect(null, mapDispatchToProps)(SelectedTicketDialog);

SelectedTicketDialog.propTypes = {
  ticketData: PropTypes.object.isRequired,
  closeDialog: PropTypes.func.isRequired,
  deleteTicket: PropTypes.func.isRequired,
  updateTicket: PropTypes.func.isRequired,
};
