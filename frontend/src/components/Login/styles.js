import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#fff',
  },
  loginWrapper: {
    [theme.breakpoints.up('sm')]: {
      padding: '40px 100px',
    },
    backgroundColor: '#fff',
    padding: '40px 17vw',
    justifySelf: 'center',
    alignSelf: 'center',
    height: '100vh',
  },
  loginForm: {
    maxWidth: '400px',
  },
  heading: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '38px',
    },
    textAlign: 'center',
    fontSize: '6.5vw',
    fontWeight: 500,
    marginTop: '20vh',
  },
  loginButton: {
    marginTop: '40px',
  },
}));
