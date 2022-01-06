import React from 'react';
import { Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import { useCommonSettingsStatsStyles } from '../styles';
import PieChart from './PieChart';
import LineChart from './LineChart';

const Stats = () => {
  const classes = { ...useStyles(), ...useCommonSettingsStatsStyles() };

  return (
    <Grid className={classes.root}>
      <Paper className={classes.wrapper}>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <Typography component="h3" variant="h4" className={classes.heading}>
              Statystyki
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Paper className={classes.smallStat}>
              <Box className={classes.pieContainer}>
                <PieChart />
              </Box>
            </Paper>
          </Grid>
          <Grid item container xs={12} sm={5} spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.smallStat}>
                <Typography className={classes.number}>1240 zł</Typography>
                <Typography>Zysk w tym miesiącu</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.smallStat}>
                <Typography className={classes.number}>353</Typography>
                <Typography>Naprawionych urządzeń</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.bigStat}>
              <Box className={classes.lineContainer}>
                <LineChart />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Stats;
