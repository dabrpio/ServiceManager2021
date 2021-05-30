import { makeStyles } from '@material-ui/core';

export const useDialogStyles = makeStyles((theme) => ({
  contentWrapper: {
    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'auto',
      columnGap: '5%',
    },
  },
  costs: {
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'auto',
      columnGap: '5%',
    },
  },
  dialogTitle: {
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  dialogLeft: {},
  dialogRight: {
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
    },
    marginTop: theme.spacing(3),
  },
  heading: {
    color: theme.palette.primary.main,
  },
  switchLabel: {
    marginRight: '-11px',
    flexDirection: 'row-reverse',
  },
  dialogActions: {
    justifyContent: 'space-between',
  },
}));
