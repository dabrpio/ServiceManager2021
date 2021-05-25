import { Hidden, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  brandTypes,
  deviceTypes,
  modelTypes,
} from '../../../common/dropdownOptions';
import { useDialogStyles } from './useDialogStyles';

const SelectedTicketDialog = ({ ticketData, closeDialog }) => {
  const classes = useDialogStyles();
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
    const { informacje, ...dataToValidate } = ticket;
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

  const handleTextFieldChange =
    (name) =>
    ({ target: { value } }) => {
      setTicket({ ...ticket, [name]: value });
    };

  const checkNumberErrors = (name) =>
    ['', null].includes(ticket[name])
      ? false
      : !`${ticket[name]}`.match(/^[0-9]+$/g);

  const checkPhoneError = () =>
    ['', null].includes(ticket.nrTel)
      ? false
      : !`${ticket.nrTel}`.match(/^[0-9]{9}$/g);

  const checkEmailError = () =>
    ['', null].includes(ticket.eMail)
      ? false
      : !`${ticket.eMail}`.match(/^.+@.+\..+$/g);

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
      <DialogContent dividers classes={{ root: classes.contentWrapper }}>
        <div className={classes.dialogLeft}>
          <DialogContentText classes={{ root: classes.heading }}>
            Informacje o urządzeniu
          </DialogContentText>
          <Autocomplete
            size="small"
            fullWidth
            value={ticket.rodzaj}
            options={deviceTypes.map((i) => i.title)}
            getOptionSelected={(option, value) => option.title === value.title}
            onChange={(_, newValue) => {
              setTicket({ ...ticket, rodzaj: newValue });
            }}
            renderInput={(params) => (
              <TextField {...params} label="Typ urządzenia" margin="normal" />
            )}
          />
          <Autocomplete
            size="small"
            fullWidth
            value={ticket.marka}
            options={brandTypes.map((i) => i.title)}
            getOptionSelected={(option, value) => option.title === value.title}
            onChange={(_, newValue) => {
              setTicket({ ...ticket, marka: newValue });
            }}
            renderInput={(params) => (
              <TextField {...params} label="Marka" margin="normal" />
            )}
          />
          <Autocomplete
            size="small"
            fullWidth
            value={ticket.model}
            options={modelTypes.map((i) => i.title)}
            getOptionSelected={(option, value) => option.title === value.title}
            onChange={(_, newValue) => {
              setTicket({ ...ticket, model: newValue });
            }}
            renderInput={(params) => (
              <TextField {...params} label="Model" margin="normal" />
            )}
          />
          <TextField
            fullWidth
            label="Usterka"
            type="text"
            value={ticket.usterka ?? ''}
            onChange={handleTextFieldChange('usterka')}
            style={{ marginTop: 16, marginBottom: 8 }}
            size="small"
          />
          <div className={classes.costs}>
            <TextField
              fullWidth
              label="Koszt części"
              type="text"
              value={ticket.kosztCzesci ?? ''}
              onChange={handleTextFieldChange('kosztCzesci')}
              style={{ marginTop: 16, marginBottom: 8 }}
              size="small"
              error={checkNumberErrors('kosztCzesci')}
            />
            <TextField
              fullWidth
              label="Koszt naprawy"
              type="text"
              value={ticket.kosztNaprawy ?? ''}
              onChange={handleTextFieldChange('kosztNaprawy')}
              style={{ marginTop: 16, marginBottom: 8 }}
              size="small"
              error={checkNumberErrors('kosztNaprawy')}
            />
          </div>
        </div>
        <div className={classes.dialogRight}>
          <DialogContentText classes={{ root: classes.heading }}>
            Dane klienta
          </DialogContentText>
          <TextField
            fullWidth
            label="Imie"
            type="text"
            value={ticket.imie ?? ''}
            onChange={handleTextFieldChange('imie')}
            style={{ marginTop: 16, marginBottom: 8 }}
            size="small"
          />
          <TextField
            fullWidth
            label="Nazwisko"
            type="text"
            value={ticket.nazwisko ?? ''}
            onChange={handleTextFieldChange('nazwisko')}
            style={{ marginTop: 16, marginBottom: 8 }}
            size="small"
          />
          <TextField
            fullWidth
            label="Nr telefonu"
            type="text"
            value={ticket.nrTel ?? ''}
            onChange={handleTextFieldChange('nrTel')}
            style={{ marginTop: 16, marginBottom: 8 }}
            size="small"
            error={checkPhoneError()}
          />
          <TextField
            fullWidth
            label="Email"
            type="text"
            value={ticket.eMail ?? ''}
            onChange={handleTextFieldChange('eMail')}
            style={{ marginTop: 16, marginBottom: 8 }}
            size="small"
            error={checkEmailError()}
          />
          <TextField
            fullWidth
            label="Dodatkowe informacje"
            type="text"
            value={ticket.informacje ?? ''}
            onChange={handleTextFieldChange('informacje')}
            style={{ marginTop: 16, marginBottom: 8 }}
            size="small"
            // multiline
            // rows={4}
          />
        </div>
      </DialogContent>
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
