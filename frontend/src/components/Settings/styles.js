import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: '150px',
      marginTop: 0,
      height: '100vh',
      padding: theme.spacing(2, '7vw'),
    },
    marginTop: theme.mixins.toolbar.minHeight,
    padding: '20px 17vw',

    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    padding: 0,
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    maxWidth: '400px',
  },
  form: {
    backgroundColor: '#fff',
  },
  form__name: {},
  form__heading: {},
  heading: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    marginBottom: '30px',
    fontSize: '2.5rem',
    color: theme.palette.primary.main,
  },
}));
