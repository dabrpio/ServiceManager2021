import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import { useCommonSettingsStatsStyles } from '../styles';

const Stats = () => {
  const classes = { ...useStyles(), ...useCommonSettingsStatsStyles() };

  return (
    <Grid className={classes.root}>
      <Paper className={classes.wrapper}>
        <Typography component="h3" variant="h4" className={classes.heading}>
          Statystyki
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Stats;
