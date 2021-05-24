import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useState } from 'react';
import { connect } from 'react-redux';
import {
  brandTypes,
  deviceTypes,
  modelTypes,
} from '../../../common/dropdownOptions';
import { postTicket } from '../../../store/data/tickets/tickets.actions';

const initialTicket = {
  rodzaj: null,
  marka: null,
  model: null,
  kosztCzesci: null,
  kosztNaprawy: null,
  usterka: null,
  informacje: null,
  imie: null,
  nazwisko: null,
  nrTel: null,
  status: 'oczekiwanie',
};

const useDialogStyles = makeStyles((theme) => ({
  contentWrapper: {
    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'auto',
      columnGap: '5%',
    },
  },
  costs: {
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'auto',
      columnGap: '5%',
    },
  },

  dialogLeft: {},
  dialogRight: {
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
    },
    marginTop: theme.spacing(3),
  },
  heading: {
    color: theme.palette.primary.main,
  },
}));

const AddTicketDialog = ({ addTicket }) => {
  const classes = useDialogStyles();
  const [ticket, setTicket] = useState(initialTicket);
  //   const { addTicketHandler } = props
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setTicket(initialTicket);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const { informacje, ...dataToValidate } = ticket;
    if (Object.values(dataToValidate).some((e) => e === null || e === '')) {
      console.log('ticket is not fully filled');
    } else {
      addTicket(ticket);
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
      : !ticket[name].match(/^[0-9]+$/g);

  const checkPhoneError = () =>
    ['', null].includes(ticket.nrTel)
      ? false
      : !ticket.nrTel.match(/^[0-9]{9}$/g);

  return (
    <div>
      <Tooltip title="Nowe zlecenie">
        <IconButton aria-label="add" onClick={() => setOpen(true)}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Nowe zlecenie</DialogTitle>
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
              getOptionSelected={(option, value) =>
                option.title === value.title
              }
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
              getOptionSelected={(option, value) =>
                option.title === value.title
              }
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
              getOptionSelected={(option, value) =>
                option.title === value.title
              }
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
              label="Dodatkowe informacje"
              type="text"
              value={ticket.informacje ?? ''}
              onChange={handleTextFieldChange('informacje')}
              style={{ marginTop: 16, marginBottom: 8 }}
              size="small"
              multiline
              rows={4}
              classes={{
                root: classes.textarea,
              }}
            />
          </div>
        </DialogContent>
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
  addTicket: (data) => dispatch(postTicket(data)),
});

export default connect(null, mapDispatchToProps)(AddTicketDialog);

// AddTicketDialog.propTypes = {
//   addTicketHandler: PropTypes.func.isRequired,
// };
