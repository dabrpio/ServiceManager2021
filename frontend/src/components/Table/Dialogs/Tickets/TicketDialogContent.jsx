import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import {
  selectDeviceBrandsState,
  selectDeviceModelsState,
} from '../../../../store/data/devices/devices.selectors';

function TicketDialogContent(props) {
  const { classes, ticket, setTicket, deviceModels, deviceBrands } = props;
  const [model, setModel] = useState(
    deviceModels.find((m) => m.model === ticket.model) ?? null
  );
  const [brand, setBrand] = useState(
    deviceBrands.find((b) => b.brand === ticket.marka) ?? null
  );
  const [type, setType] = useState(
    deviceBrands.find((t) => t.type === ticket.rodzaj) ?? null
  );

  const handleDeviceTypeChange = (_, newValue) => {
    setType(newValue);
    setTicket({ ...ticket, rodzaj: newValue?.type ?? null });
  };
  const handleDeviceBrandChange = (_, newValue) => {
    setBrand(newValue);
    setTicket({ ...ticket, marka: newValue?.brand ?? null });
  };
  const handleDeviceModelChange = (_, newValue) => {
    setModel(newValue);
    setTicket({ ...ticket, model: newValue?.model ?? null });
  };

  const useDeviceTypeFilter = (types) => {
    if (model !== null && brand !== null) {
      types = types.filter((t) => t.type === model.type);
    } else if (model !== null) {
      types = types.filter((b) => b.type === model.type);
    } else if (brand !== null) {
      types = types.filter((t) => t.brand === brand.brand);
    }

    return types.filter(
      (device, index, self) =>
        self.findIndex((d) => d.type === device.type) === index
    );
  };

  const useDeviceBrandFilter = (brands) => {
    if (model !== null && type !== null) {
      brands = brands.filter(
        (b) => b.brand === model.brand && b.type === type.type
      );
    } else if (model !== null) {
      brands = brands.filter((b) => b.brand === model.brand);
    } else if (type !== null) {
      brands = brands.filter((b) => b.type === type.type);
    }

    return brands.filter(
      (device, index, self) =>
        self.findIndex((d) => d.brand === device.brand) === index
    );
  };
  const useDeviceModelFilter = (models) => {
    if (brand !== null && type !== null) {
      return models.filter(
        (m) => m.brand === brand.brand && m.type === type.type
      );
    } else if (brand !== null) {
      return models.filter((m) => m.brand === brand.brand);
    } else if (type !== null) {
      return models.filter((m) => m.type === type.type);
    } else return models;
  };

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
          value={type}
          options={useDeviceTypeFilter(deviceBrands)}
          getOptionLabel={(option) => (option.type ? option.type : option)}
          getOptionSelected={(option, value) => option === value}
          onChange={handleDeviceTypeChange}
          renderInput={(params) => (
            <TextField {...params} label="Typ urządzenia" margin="normal" />
          )}
        />
        <Autocomplete
          size="small"
          fullWidth
          value={brand}
          options={useDeviceBrandFilter(deviceBrands)}
          getOptionLabel={(option) => (option.brand ? option.brand : option)}
          getOptionSelected={(option, value) => option === value}
          onChange={handleDeviceBrandChange}
          renderInput={(params) => (
            <TextField {...params} label="Marka" margin="normal" />
          )}
        />
        <Autocomplete
          size="small"
          fullWidth
          value={model}
          options={useDeviceModelFilter(deviceModels).sort(
            (a, b) =>
              -b.brand.localeCompare(a.brand) || -b.model.localeCompare(a.model)
          )}
          groupBy={(option) => (brand ? null : option.brand)}
          getOptionLabel={(option) => (option.model ? option.model : option)}
          getOptionSelected={(option, value) => option === value}
          onChange={handleDeviceModelChange}
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

const mapStateToProps = (state, ownProps) => ({
  deviceModels: selectDeviceModelsState(state),
  deviceBrands: selectDeviceBrandsState(state),
});

export default connect(mapStateToProps, null)(TicketDialogContent);

TicketDialogContent.propTypes = {
  classes: PropTypes.object.isRequired,
  ticket: PropTypes.object.isRequired,
};
