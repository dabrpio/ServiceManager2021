import { makeStyles } from '@material-ui/core/styles';
import { Font } from '@react-pdf/renderer';
import fontRegular from '../fonts/Roboto-Regular.ttf';
import fontBold from '../fonts/Roboto-Bold.ttf';

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

export const useCommonSettingsStatsStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
      marginLeft: '150px',
      minHeight: '100vh',
    },
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: `calc(${theme.mixins.toolbar.minHeight}px )`,
    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
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
    marginBottom: theme.spacing(2),
    fontSize: '1.7rem',
  },
}));
