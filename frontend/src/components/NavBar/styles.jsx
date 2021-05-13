import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 150,
      flexShrink: 0,
    },
    width: 180,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    [theme.breakpoints.up('sm')]: {
      backgroundColor: theme.palette.primary.main,
      width: 150,
    },
    backgroundColor: theme.palette.common.white,
    width: 180,
  },

  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));
