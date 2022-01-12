import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { selectAlertsState } from '../store/alerts/alerts.selectors';
import { unsetAlert } from '../store/alerts/alerts.actions';

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

function Alert({ alertState, closeAlert }) {
  const [snackPack, setSnackPack] = useState([]);
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState(undefined);

  useEffect(() => {
    if (alertState)
      setSnackPack((prev) => [
        ...prev,
        {
          message: alertState,
          key: new Date().getTime(),
        },
      ]);
    return () => closeAlert();
  }, [alertState, closeAlert]);

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
      closeAlert();
    }
  }, [snackPack, messageInfo, open, closeAlert]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    closeAlert();
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
  alertState: selectAlertsState(state),
});

const mapDispatchToProps = (dispatch) => ({
  closeAlert: () => dispatch(unsetAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
