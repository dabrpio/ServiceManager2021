import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectDeviceBrandsState } from '../../../../../store/data/devices/devices.selectors';

const filter = createFilterOptions();

function DeviceDialogContent(props) {
  const { device, setDevice, deviceBrands } = props;
  const [brand, setBrand] = useState(
    deviceBrands.find((b) => b.brand === device.brand) ?? null
  );
  const [type, setType] = useState(
    deviceBrands.find((t) => t.type === device.type) ?? null
  );

  const handleDeviceTypeChange = (_, newValue) => {
    if (typeof newValue === 'string') {
      setType({
        type: newValue,
      });
      setDevice({ ...device, type: newValue ?? null });
    } else if (newValue && newValue.inputValue) {
      setType({
        type: newValue.inputValue,
      });
      setDevice({ ...device, type: newValue.inputValue ?? null });
    } else {
      setType(newValue);
      setDevice({ ...device, type: newValue?.type ?? null });
    }
  };

  const handleDeviceBrandChange = (_, newValue) => {
    if (typeof newValue === 'string') {
      setBrand({
        brand: newValue,
      });
      setDevice({ ...device, brand: newValue ?? null });
    } else if (newValue && newValue.inputValue) {
      setBrand({
        brand: newValue.inputValue,
      });
      setDevice({ ...device, brand: newValue.inputValue ?? null });
    } else {
      setBrand(newValue);
      setDevice({ ...device, brand: newValue?.brand ?? null });
    }
  };

  const handleTextFieldChange =
    (name) =>
    ({ target: { value } }) => {
      setDevice({ ...device, [name]: value });
    };

  return (
    <DialogContent dividers>
      <Autocomplete
        size="small"
        fullWidth
        freeSolo
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        value={type}
        options={deviceBrands.filter(
          (device, index, self) =>
            self.findIndex((d) => d.type === device.type) === index
        )}
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
          <TextField {...params} label="Typ" margin="normal" />
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
        options={deviceBrands.filter(
          (device, index, self) =>
            self.findIndex((b) => b.brand === device.brand) === index
        )}
        getOptionLabel={(option) => {
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.brand;
          }
          return option.brand;
        }}
        getOptionSelected={(option, value) => option.brand === value.brand}
        onChange={handleDeviceBrandChange}
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
        renderInput={(params) => (
          <TextField {...params} label="Marka" margin="normal" />
        )}
      />
      <TextField
        fullWidth
        label="Model"
        type="text"
        value={device.model ?? ''}
        onChange={handleTextFieldChange('model')}
        style={{ marginTop: 16, marginBottom: 8 }}
        size="small"
      />
    </DialogContent>
  );
}

const mapStateToProps = (state, ownProps) => ({
  deviceBrands: selectDeviceBrandsState(state),
});

export default connect(mapStateToProps, null)(DeviceDialogContent);

DeviceDialogContent.propTypes = {
  device: PropTypes.object.isRequired,
  newDevice: PropTypes.bool,
  deviceBrands: PropTypes.array.isRequired,
};
