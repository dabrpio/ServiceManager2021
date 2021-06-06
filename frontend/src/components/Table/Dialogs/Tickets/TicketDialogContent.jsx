import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import {
  brandTypes,
  deviceTypes,
  modelTypes,
} from '../../../../common/dropdownOptions';

function TicketDialogContent(props) {
  const { classes, ticket, setTicket } = props;

  const handleTextFieldChange =
    (name) =>
    ({ target: { value } }) => {
      setTicket({ ...ticket, [name]: value });
    };

  const checkNumberErrors = (name) =>
    ['', null].includes(ticket[name])
      ? false
      : !`${ticket[name]}`.match(/^[0-9]+\.{0,1}[0-9]*$/g);

  const checkPhoneError = () =>
    ['', null].includes(ticket.nrTel)
      ? false
      : !`${ticket.nrTel}`.match(/^[0-9]{9}$/g);

  const checkEmailError = () =>
    ['', null].includes(ticket.eMail)
      ? false
      : !`${ticket.eMail}`.match(/^.+@.+\..+$/g);

  return (
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
          getOptionSelected={(option, value) => option === value}
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
          getOptionSelected={(option, value) => option === value}
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
          getOptionSelected={(option, value) => option === value}
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
  );
}

export default TicketDialogContent;

TicketDialogContent.propTypes = {
  classes: PropTypes.object.isRequired,
  ticket: PropTypes.object.isRequired,
};
