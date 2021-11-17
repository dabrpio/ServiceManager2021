import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
    fontSize: '16px',
    fontWeight: 500,
    color: theme.palette.grey[900],
    width: '100%',
    padding: '1rem',
  },
  buttons: {
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    width: '100%',
    display: 'flex',
  },
  btn: {
    [theme.breakpoints.up('sm')]: {
      margin: '0 20px',
    },
    width: '120px',
    margin: '5px',
  },
  cost: {
    margin: 16,
  },
}));
