import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: '150px',
      marginTop: 0,
    },
    marginTop: theme.mixins.toolbar.minHeight,
    padding: theme.spacing(3, 2),
  },
}));
