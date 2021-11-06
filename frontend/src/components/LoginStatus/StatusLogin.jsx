import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from './styles';

function Status() {
  const classes = useStyles();
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    rma: '',
    phoneNumber: '',
  });
  const [loginErrors] = useState({
    rmaError: '',
    phoneNumberError: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(credentials);
    history.push(`/status/${credentials.rma}`);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.loginWrapper} maxWidth="sm">
        <form onSubmit={handleSubmit} className={classes.loginForm}>
          <Typography component="h2" className={classes.heading}>
            Service Manager 2021
          </Typography>
          <Typography component="h4" className={classes.description}>
            Sprawdź status swojego zlecenia.
          </Typography>
          <TextField
            error={loginErrors.rmaError.length > 0}
            fullWidth
            label="RMA"
            type="text"
            value={credentials.rma}
            helperText={loginErrors.rmaError}
            onChange={(event) =>
              setCredentials({ ...credentials, rma: event.target.value })
            }
            size="small"
            margin="normal"
          />
          <TextField
            error={loginErrors.phoneNumberError.length > 0}
            fullWidth
            label="Nr telefonu"
            type="text"
            value={credentials.phoneNumber}
            helperText={loginErrors.phoneNumberError}
            onChange={(event) =>
              setCredentials({
                ...credentials,
                phoneNumber: event.target.value,
              })
            }
            size="small"
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            onClick={() => history.push(`/status/${credentials.rma}`)}
            style={{ marginTop: 26 }}
          >
            Dalej
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Status;
