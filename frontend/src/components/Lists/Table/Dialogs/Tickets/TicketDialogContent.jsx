import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  selectDeviceBrandsState,
  selectDeviceModelsState,
} from '../../../../../store/data/devices/devices.selectors';
import { useDeviceData } from './useDeviceData';

const filter = createFilterOptions();

function TicketDialogContent(props) {
  const { classes, ticket, setTicket, deviceModels, deviceBrands } = props;
  const {
    model,
    setModel,
    brand,
    setBrand,
    type,
    setType,
    deviceTypeFilter,
    deviceBrandFilter,
    deviceModelFilter,
  } = useDeviceData(deviceBrands, deviceModels, ticket);

  const handleDeviceTypeChange = (_, newValue) => {
    if (typeof newValue === 'string') {
      setType({
        type: newValue,
      });
      setTicket({ ...ticket, type: newValue ?? null });
    } else if (newValue && newValue.inputValue) {
      setType({
        type: newValue.inputValue,
      });
      setTicket({ ...ticket, type: newValue.inputValue ?? null });
    } else {
      setType(newValue);
      setTicket({ ...ticket, type: newValue?.type ?? null });
    }
  };

  const handleDeviceBrandChange = (_, newValue) => {
    if (typeof newValue === 'string') {
      setBrand({
        brand: newValue,
      });
      setTicket({ ...ticket, brand: newValue ?? null });
    } else if (newValue && newValue.inputValue) {
      setBrand({
        brand: newValue.inputValue,
      });
      setTicket({ ...ticket, brand: newValue.inputValue ?? null });
    } else {
      setBrand(newValue);
      setTicket({ ...ticket, brand: newValue?.brand ?? null });
    }
  };

  const handleDeviceModelChange = (_, newValue) => {
    if (typeof newValue === 'string') {
      setModel({
        model: newValue,
      });
      setTicket({ ...ticket, model: newValue ?? null });
    } else if (newValue && newValue.inputValue) {
      setModel({
        model: newValue.inputValue,
      });
      setTicket({ ...ticket, model: newValue.inputValue ?? null });
    } else {
      const type_brand = newValue
        ? deviceBrands.find(
            (i) => i.brand === newValue.brand && i.type === newValue.type
          )
        : null;

      setModel(newValue);
      setBrand((oldBrand) => type_brand ?? oldBrand);
      setType((oldType) => type_brand ?? oldType);

      setTicket({
        ...ticket,
        model: newValue?.model ?? null,
        brand: type_brand ? type_brand?.brand : ticket.brand,
        type: type_brand ? type_brand?.type : ticket.type,
      });
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
      : !`${ticket[name]}`.match(/^[0-9]+\.{0,1}[0-9]*$/g);

  const checkPhoneError = () =>
    ['', null].includes(ticket.phoneNumber)
      ? false
      : !`${ticket.phoneNumber}`.match(/^[0-9]{9}$/g);

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
          freeSolo
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          value={type}
          options={deviceTypeFilter(deviceBrands)}
          getOptionLabel={(option) => {
            if (typeof option === 'string') {
              return option;
            }
            if (option.inputValue) {
              return option.type;
            }
            return option.type;
          }}
          getOptionSelected={(option, value) => option.type === value.type}
          onChange={handleDeviceTypeChange}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            if (params.inputValue !== '') {
              filtered.push({
                inputValue: params.inputValue,
                type: `Dodaj "${params.inputValue}"`,
              });
            }
            return filtered;
          }}
          renderInput={(params) => (
            <TextField {...params} label="Typ urządzenia" margin="normal" />
          )}
        />
        <Autocomplete
          size="small"
          fullWidth
          freeSolo
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          value={brand}
          options={deviceBrandFilter(deviceBrands)}
          getOptionLabel={(option) => {
            if (typeof option === 'string') {
              return option;
            }
            if (option.inputValue) {
              return option.brand;
            }
            return option.brand;
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            if (params.inputValue !== '') {
              filtered.push({
                inputValue: params.inputValue,
                brand: `Dodaj "${params.inputValue}"`,
              });
            }
            return filtered;
          }}
          getOptionSelected={(option, value) => option.brand === value.brand}
          onChange={handleDeviceBrandChange}
          renderInput={(params) => (
            <TextField {...params} label="Marka" margin="normal" />
          )}
        />
        <Autocomplete
          size="small"
          fullWidth
          freeSolo
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          value={model}
          options={deviceModelFilter(deviceModels).sort(
            (a, b) =>
              -b.brand.localeCompare(a.brand) || -b.model.localeCompare(a.model)
          )}
          groupBy={(option) => (brand ? null : option.brand)}
          getOptionLabel={(option) => {
            if (typeof option === 'string') {
              return option;
            }
            if (option.inputValue) {
              return option.model;
            }
            return option.model;
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            if (params.inputValue !== '') {
              filtered.push({
                inputValue: params.inputValue,
                model: `Dodaj "${params.inputValue}"`,
              });
            }
            return filtered;
          }}
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
          value={ticket.glitch ?? ''}
          onChange={handleTextFieldChange('glitch')}
          style={{ marginTop: 16, marginBottom: 8 }}
          size="small"
        />
        <div className={classes.costs}>
          <TextField
            fullWidth
            label="Koszt części"
            type="text"
            value={ticket.partsCost ?? ''}
            onChange={handleTextFieldChange('partsCost')}
            style={{ marginTop: 16, marginBottom: 8 }}
            size="small"
            error={checkNumberErrors('partsCost')}
          />
          <TextField
            fullWidth
            label="Koszt naprawy"
            type="text"
            value={ticket.repairCost ?? ''}
            onChange={handleTextFieldChange('repairCost')}
            style={{ marginTop: 16, marginBottom: 8 }}
            size="small"
            error={checkNumberErrors('repairCost')}
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
          value={ticket.name ?? ''}
          onChange={handleTextFieldChange('name')}
          style={{ marginTop: 16, marginBottom: 8 }}
          size="small"
        />
        <TextField
          fullWidth
          label="Nazwisko"
          type="text"
          value={ticket.surname ?? ''}
          onChange={handleTextFieldChange('surname')}
          style={{ marginTop: 16, marginBottom: 8 }}
          size="small"
        />
        <TextField
          fullWidth
          label="Nr telefonu"
          type="text"
          value={ticket.phoneNumber ?? ''}
          onChange={handleTextFieldChange('phoneNumber')}
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
          value={ticket.information ?? ''}
          onChange={handleTextFieldChange('information')}
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
