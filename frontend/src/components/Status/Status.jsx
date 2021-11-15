import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { Box, Button, Hidden } from '@material-ui/core';
import clsx from 'clsx';

function getSteps() {
  return [
    'Przyjęto do naprawy',
    'Oczekiwanie na akceptację kosztów',
    'W trakcie naprawy',
    'Gotowe do odbioru',
  ];
}

const Status = ({ data }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleAccept = () => {
    console.log('accept');
  };
  const handleReject = () => {
    console.log('reject');
  };

  useEffect(() => {
    switch (data.status) {
      case 'created':
        setActiveStep(0);
        break;
      case 'cost_approval':
        setActiveStep(1);
        break;
      case 'accepted':
        setActiveStep(2);
        break;
      case 'rejected':
        setActiveStep(3);
        break;
      default:
        setActiveStep(0);
    }
  }, [data.status]);

  console.log(data);

  return (
    <>
      <Typography component="h2" className={classes.heading}>
        Service Manager 2021
      </Typography>
      <Typography
        component="h4"
        className={clsx(classes.description, classes.greyColor)}
      >
        Status zlecenia numer: {data.rma}
      </Typography>
      <Typography
        component="h4"
        className={clsx(classes.description, classes.darkColor)}
      >
        {data.brand} {data.model}, {data.glitch}
        {data.repairCost && `, koszt: ${data.repairCost}zł`}
      </Typography>
      <Hidden xsDown>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          className={classes.stepper}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Hidden>
      <Hidden smUp>
        <Stepper
          style={{ width: '100%' }}
          orientation="vertical"
          activeStep={activeStep}
          className={classes.stepper}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Hidden>
      {activeStep === 1 && (
        <Box className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={handleAccept}
          >
            Akceptuję
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.btn}
            onClick={handleReject}
          >
            Rezygnuję
          </Button>
        </Box>
      )}
    </>
  );
};

export default Status;
