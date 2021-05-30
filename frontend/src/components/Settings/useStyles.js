import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2),
      marginLeft: `calc(150px + ${theme.spacing(2)}px)`,
      marginTop: theme.spacing(2),
      height: `calc(100vh -  ${theme.spacing(4)}px)`,
      justifyContent: 'flex-start',
    },
    margin: theme.spacing(1),
    marginTop: `calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(
      1
    )}px)`,
    height: `calc(100vh - ${
      theme.mixins.toolbar.minHeight
    }px -  ${theme.spacing(2)}px)`,
    overflow: 'hidden',
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    [theme.breakpoints.up('sm')]: {
      height: `calc(100% - 116px)`,
    },
    height: `calc(100% - 108px)`,
    maxWidth: '400px',
  },
  form__heading: {
    color: theme.palette.primary.main,
  },
  heading: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    marginBottom: '26px',
  },
}));
