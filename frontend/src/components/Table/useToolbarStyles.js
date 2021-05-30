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
