import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { unsetDeleteClientError } from '../../../store/data/clients/clients.actions';
import { selectDeleteError } from '../../../store/data/clients/clients.selectors';

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

function DeleteErrorSnackbar({ deleteError, closeDeleteError }) {
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  React.useEffect(() => {
    if (deleteError)
      setSnackPack((prev) => [
        ...prev,
        {
          message: 'Nie można usunąć klienta, który posiada zlecenia',
          key: new Date().getTime(),
        },
      ]);
    return () => (deleteError ? closeDeleteError() : null);
  }, [deleteError, closeDeleteError]);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
      closeDeleteError();
    }
  }, [snackPack, messageInfo, open, closeDeleteError]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    if (deleteError) closeDeleteError();
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
          <React.Fragment>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  deleteError: selectDeleteError(state),
});

const mapDispatchToProps = (dispatch) => ({
  closeDeleteError: () => dispatch(unsetDeleteClientError()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteErrorSnackbar);
