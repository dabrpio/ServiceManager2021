import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
