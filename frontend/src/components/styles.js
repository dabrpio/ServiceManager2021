import { makeStyles } from '@material-ui/core/styles';

export const useCommonSettingsStatsStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
      marginLeft: '150px',
      height: '100vh',
    },
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: `calc(${theme.mixins.toolbar.minHeight}px )`,
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    overflow: 'hidden',
  },
  wrapper: {
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
    },
    margin: theme.spacing(1.5),
    padding: theme.spacing(3),
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },
    marginBottom: theme.spacing(2),
    fontSize: '1.7rem',
  },
}));
