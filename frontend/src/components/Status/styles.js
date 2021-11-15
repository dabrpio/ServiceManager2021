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
    fontSize: '12px',
    fontWeight: 500,
  },
  greyColor: {
    color: theme.palette.grey[600],
  },
  darkColor: {
    color: theme.palette.grey[900],
  },
  stepper: {
    marginTop: '16px',
  },
  buttons: {
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  btn: {
    [theme.breakpoints.up('sm')]: {
      margin: '0 20px',
    },

    margin: '6px',
  },
}));
