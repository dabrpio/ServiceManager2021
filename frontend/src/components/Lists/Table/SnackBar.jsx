import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { unsetDeleteClientError } from '../../../store/data/clients/clients.actions';
import { selectDeleteClientError } from '../../../store/data/clients/clients.selectors';
import { selectDeleteDeviceError } from '../../../store/data/devices/devices.selectors';
import { unsetDeleteDeviceError } from '../../../store/data/devices/devices.actions';

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

function DeleteErrorSnackbar({
  deleteClientError,
  closeDeleteClientError,
  deleteDeviceError,
  closeDeleteDeviceError,
}) {
  const [snackPack, setSnackPack] = useState([]);
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState(undefined);

  useEffect(() => {
    if (deleteClientError || deleteDeviceError)
      setSnackPack((prev) => [
        ...prev,
        {
          message: deleteClientError
            ? 'Nie można usunąć klienta, który posiada zlecenia'
            : 'Nie można usunąć urządzenia, które jest w zleceniu',
          key: new Date().getTime(),
        },
      ]);
    return () =>
      deleteClientError
        ? closeDeleteClientError()
        : deleteDeviceError
        ? closeDeleteDeviceError()
        : null;
  }, [
    deleteClientError,
    closeDeleteClientError,
    deleteDeviceError,
    closeDeleteDeviceError,
  ]);

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
      closeDeleteClientError();
    }
  }, [
    snackPack,
    messageInfo,
    open,
    closeDeleteClientError,
    closeDeleteDeviceError,
  ]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    if (deleteClientError) closeDeleteClientError();
    if (deleteDeviceError) closeDeleteDeviceError();
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const classes = useStyles();
  return (
    <div>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        onExited={handleExited}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <Fragment>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Fragment>
        }
      />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  deleteClientError: selectDeleteClientError(state),
  deleteDeviceError: selectDeleteDeviceError(state),
});

const mapDispatchToProps = (dispatch) => ({
  closeDeleteClientError: () => dispatch(unsetDeleteClientError()),
  closeDeleteDeviceError: () => dispatch(unsetDeleteDeviceError()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteErrorSnackbar);
