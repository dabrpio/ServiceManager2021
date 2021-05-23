import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: '150px',
      marginTop: 0,
      minHeight: '100vh',
      padding: theme.spacing(2, '7vw'),
    },
    marginTop: theme.mixins.toolbar.minHeight,
    padding: '20px 17vw',
    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    padding: 0,
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  form: {
    [theme.breakpoints.up('md')]: {
      gridTemplateAreas: `
        "info client"
        "buttons buttons"
        `,
      gridTemplateColumns: '1fr 1fr',
      maxWidth: '100%',
    },
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateAreas: `
      'info'
      'client'
      'buttons'`,
    justifyContent: 'center',
    columnGap: '5vw',
    maxWidth: '400px',
  },
  form__info: {
    gridArea: 'info',
  },
  form__client: {
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
    },
    marginTop: '20px',
    gridArea: 'client',
  },

  heading: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    marginBottom: '30px',
    fontSize: '2.5rem',
    color: theme.palette.primary.main,
  },
  button_section: {
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '30% 30% 30%',
      gridTemplateRows: 'auto',
      justifyContent: 'space-between',
      margin: '40px auto',
    },
    gridArea: 'buttons',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto',
    // width: '70%',
    width: '100%',
    margin: '20px auto',
  },
}));
