import { lighten, makeStyles } from '@material-ui/core/styles';

export const useToolbarStyles = makeStyles((theme) => ({
  root: {
    padding: `0 ${theme.spacing(1)}px`,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

export const useTableStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2),
      marginLeft: `calc(150px + ${theme.spacing(2)}px)`,
      marginTop: theme.spacing(2),
      height: `calc(100vh -  ${theme.spacing(4)}px)`,
    },
    margin: theme.spacing(1),
    marginTop: `calc(${theme.mixins.toolbar.minHeight}px + ${theme.spacing(
      1
    )}px)`,
    height: `calc(100vh - ${
      theme.mixins.toolbar.minHeight
    }px -  ${theme.spacing(2)}px)`,
    overflow: 'hidden',
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: `calc(100% - 116px)`,
    },
    height: `calc(100% - 108px)`,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  hidden: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  th: {
    cursor: 'pointer',
  },
  td: {
    [theme.breakpoints.up('xs')]: {
      padding: '16px 0 16px 4px',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '16px 8px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '16px',
    },
    whiteSpace: 'nowrap',
  },
  tr: {
    cursor: 'pointer',
  },
  buildIcon: {
    color: theme.palette.grey[500],
  },
  checkIcon: {
    color: theme.palette.success.light,
  },
}));

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
