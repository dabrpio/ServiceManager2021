import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  password_change: {
    [theme.breakpoints.up('sm')]: {
      width: '400px',
    },
    padding: theme.spacing(3),
    width: '100%',
  },
  form_heading: {
    color: theme.palette.primary.main,
  },
}));
