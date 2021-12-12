import { makeStyles } from '@material-ui/core/styles';
import { Font } from '@react-pdf/renderer';
import fontRegular from '../../../../fonts/Roboto-Regular.ttf';
import fontBold from '../../../../fonts/Roboto-Bold.ttf';

Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: fontRegular,
    },
    {
      src: fontBold,
      fontWeight: 'bold',
    },
  ],
});

export const useToolbarStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

    padding: 0,
  },
  toolbar: {
    padding: `0 ${theme.spacing(3)}px 0 ${theme.spacing(1)}px`,
    width: '100%',
    height: '64px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: '1 1 100%',
  },
  appBar: {
    boxShadow: theme.shadows[1],
    // backgroundColor: '#eee',
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
  homeContainer: {
    [theme.breakpoints.up('sm')]: {
      height: `calc(100% - 164px)`,
    },
    height: `calc(100% - 156px)`,
  },
  table: {
    tableLayout: 'fixed',
    width: '100%',
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
    [theme.breakpoints.up('sm')]: {
      padding: '16px 8px',
    },
    padding: '12px 4px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  tr: {
    cursor: 'pointer',
    height: '58px',
  },
  icon: {
    color: theme.palette.grey[500],
    margin: 'auto',
    marginLeft: theme.spacing(1),
    fontSize: '20px',
  },
}));
