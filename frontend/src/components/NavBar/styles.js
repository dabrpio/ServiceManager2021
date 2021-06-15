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

  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  listItem: {
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
      height: '6vh',
      maxHeight: '120px',
      color: '#fff',
      justifyContent: 'center',
      width: '100%',
    },
  },
  icon: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '90%',
      width: '90%',
      height: '90%',
    },
  },
  text: {
    [theme.breakpoints.up('sm')]: {
      '& .MuiTypography-body1': {
        fontSize: 'max(2vh, 12px)',
        color: '#ffffff',
      },
    },
    [theme.breakpoints.up('lg')]: {
      '& .MuiTypography-body1': {
        fontSize: `0.875rem`,
      },
    },
  },

  listItemWrapper: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
}));
