import React from 'react';
import { Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import { useCommonSettingsStatsStyles } from '../styles';
import PieChart from './PieChart';
import LineChart from './LineChart';
import { selectStatsState } from '../../store/data/stats/stats.selectors';
import { connect } from 'react-redux';

const Stats = ({ statsData }) => {
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
                <PieChart data={statsData.topBrands} />
              </Box>
            </Paper>
          </Grid>
          <Grid item container xs={12} sm={5} spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.smallStat}>
                <Typography
                  className={classes.number}
                >{`${statsData.profit[0].value.toFixed(2)} zł`}</Typography>
                <Typography>Zysk w tym miesiącu</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.smallStat}>
                <Typography
                  className={classes.number}
                >{`${statsData.count[0].value}`}</Typography>
                <Typography>Naprawionych urządzeń w tym miesiącu</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.bigStat}>
              <Box className={classes.lineContainer}>
                <LineChart
                  data={statsData.profit}
                  label="Przychody roczne"
                  title="Przychody"
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.bigStat}>
              <Box className={classes.lineContainer}>
                <LineChart
                  data={statsData.count}
                  label="Ilość zleceń"
                  title="Ilość zleceń"
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

const mapStateToProps = (state, ownProps) => ({
  statsData: selectStatsState(state),
});

export default connect(mapStateToProps, null)(Stats);
