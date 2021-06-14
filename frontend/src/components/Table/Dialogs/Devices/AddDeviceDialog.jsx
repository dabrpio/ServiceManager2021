import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postDevice } from '../../../../store/data/devices/devices.actions';
import DeviceDialogContent from './DeviceDialogContent';

const initialDevice = {
  type: null,
  brand: null,
  model: null,
};

const AddDeviceDialog = ({ addDevice }) => {
  const [device, setDevice] = useState(initialDevice);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setDevice(initialDevice);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (Object.values(device).some((e) => e === null || `${e}`.trim() === '')) {
      console.log('device data is not fully filled');
    } else {
      addDevice(device);
      handleClose();
    }
  };

  return (
    <div>
      <Tooltip title="Nowe urządzenie">
        <IconButton aria-label="add" onClick={() => setOpen(true)}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        maxWidth="sm"
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Nowe urządzenie</DialogTitle>
        <DeviceDialogContent
          device={device}
          setDevice={setDevice}
          newDevice={true}
        />
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
  addDevice: (data) => dispatch(postDevice(data)),
});

export default connect(null, mapDispatchToProps)(AddDeviceDialog);

AddDeviceDialog.propTypes = {
  addDevice: PropTypes.func.isRequired,
};
