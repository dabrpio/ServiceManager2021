import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  deleteDevice,
  putDevice,
} from '../../../../../store/data/devices/devices.actions';
import { useTicketDialogStyles } from '../styles';
import DeviceDialogContent from './DeviceDialogContent';

const SelectedDeviceDialog = (props) => {
  const { deviceData, closeDialog, updateDevice, deleteDevice } = props;
  const [device, setDevice] = useState(deviceData);
  const classes = useTicketDialogStyles();

  const handleClose = () => {
    closeDialog();
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (Object.values(device).some((e) => e === null || e === '')) {
      console.log('Device data is not fully filled');
    } else {
      if (JSON.stringify(deviceData) !== JSON.stringify(device)) {
        updateDevice(device);
      }
      handleClose();
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    handleClose();
    deleteDevice(device.idDevice);
  };

  return (
    <div>
      <Dialog
        maxWidth="sm"
        fullWidth
        open={Object.keys(deviceData).length > 0}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Urządzenie {device.idDevice}
        </DialogTitle>
        <DeviceDialogContent device={device} setDevice={setDevice} />
        <DialogActions classes={{ root: classes.dialogActions }}>
          <div>
            <Button onClick={handleSave} color="primary">
              Zapisz
            </Button>
            <Button onClick={handleClose} color="primary">
              Cofnij
            </Button>
          </div>
          <Button onClick={handleDelete} color="primary">
            Usuń
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateDevice: (data) => dispatch(putDevice(data)),
  deleteDevice: (id) => dispatch(deleteDevice(id)),
});

export default connect(null, mapDispatchToProps)(SelectedDeviceDialog);

SelectedDeviceDialog.propTypes = {
  deviceData: PropTypes.object.isRequired,
  closeDialog: PropTypes.func.isRequired,
  updateDevice: PropTypes.func.isRequired,
  deleteDevice: PropTypes.func.isRequired,
};
