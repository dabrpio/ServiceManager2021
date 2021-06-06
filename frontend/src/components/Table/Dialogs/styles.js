import { makeStyles } from '@material-ui/core/styles';

export const useTicketDialogStyles = makeStyles((theme) => ({
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  titleActions: {
    display: 'flex',
    flexDirection: 'row',
  },
  formControlLabel: {
    flexDirection: 'row-reverse',
    width: '170px',
  },
  switchLabel: {
    ...theme.typography.button,
    color: theme.palette.primary.main,
    padding: '6px 8px ',
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
  dialogActions: {
    justifyContent: 'space-between',
    padding: '16px',
  },
}));
