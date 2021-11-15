import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#fff',
  },
  wrapper: {
    [theme.breakpoints.up('sm')]: {
      padding: '40px 100px',
    },
    backgroundColor: '#fff',
    padding: '40px 17vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
  },
  loginForm: {
    maxWidth: '400px',
  },
  heading: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '38px',
      marginTop: '15vh',
    },
    textAlign: 'center',
    fontSize: '6.4vw',
    fontWeight: 500,
    marginTop: '7vh',
  },
  description: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
    },
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: 500,
    color: theme.palette.grey[600],
  },
  loginButton: {
    marginTop: '40px',
  },
}));
