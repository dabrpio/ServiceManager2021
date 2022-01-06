import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  smallStat: {
    [theme.breakpoints.up('md')]: { padding: theme.spacing(3) },
    padding: theme.spacing(2),
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  bigStat: {
    [theme.breakpoints.up('md')]: { padding: theme.spacing(3) },
    padding: theme.spacing(2, 0),
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  number: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
    fontSize: '1.5rem',
    color: theme.palette.primary.main,
  },
  pieContainer: {
    [theme.breakpoints.up('sm')]: {
      height: '250px',
      width: '250px',
    },
    height: '200px',
    width: '200px',
    margin: 'auto',
  },
  lineContainer: {
    [theme.breakpoints.up('sm')]: {
      width: 'min(100%, 800px)',
    },
    width: '100%',
    margin: 'auto',
  },
}));
