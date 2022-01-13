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
import { setAlert } from '../../../../../store/alerts/alerts.actions';
import { useTicketDialogStyles } from '../styles';
import DeviceDialogContent from './DeviceDialogContent';

const SelectedDeviceDialog = ({
  deviceData,
  closeDialog,
  updateDevice,
  deleteDevice,
  showAlert,
}) => {
  const [device, setDevice] = useState(deviceData);
  const classes = useTicketDialogStyles();

  const handleSave = (event) => {
    event.preventDefault();
    if (Object.values(device).some((e) => e === null || e === ''))
      showAlert('Dane urządzenia nie są w pełni uzupełnione.');
    else {
      if (JSON.stringify(deviceData) !== JSON.stringify(device)) {
        updateDevice(device);
      }
      closeDialog();
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    closeDialog();
    deleteDevice(device.idDevice);
  };

  return (
    <div>
      <Dialog
        maxWidth="sm"
        fullWidth
        open={Object.keys(deviceData).length > 0}
        onClose={closeDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Urządzenie {device.idDevice}
        </DialogTitle>
        <DeviceDialogContent device={device} setDevice={setDevice} />
        <DialogActions classes={{ root: classes.dialogActions }}>
          <Button onClick={handleDelete} color="primary">
            Usuń
          </Button>
          <div>
            <Button onClick={closeDialog} color="primary">
              Cofnij
            </Button>
            <Button onClick={handleSave} color="primary">
              Zapisz
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateDevice: (data) => dispatch(putDevice(data)),
  deleteDevice: (id) => dispatch(deleteDevice(id)),
  showAlert: (message) => dispatch(setAlert(message)),
});

export default connect(null, mapDispatchToProps)(SelectedDeviceDialog);

SelectedDeviceDialog.propTypes = {
  deviceData: PropTypes.object.isRequired,
  closeDialog: PropTypes.func.isRequired,
  updateDevice: PropTypes.func.isRequired,
  deleteDevice: PropTypes.func.isRequired,
};
