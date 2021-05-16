import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: '150px',
      marginTop: 0,
      height: '100vh',
    },
    marginTop: theme.mixins.toolbar.minHeight,
    padding: theme.spacing(3, 2),
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    display: 'flex',
    alignItems: 'flex-end',
  },
  table_wrapper: {
    height: '80vh',
    width: '100%',
  },
  tickets_wrapper: {
    height: '100%',
  },
  icon: {
    marginLeft: '10px',
  },
  heading: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.h4.fontSize,
    margin: theme.spacing(2),
  },
}));
