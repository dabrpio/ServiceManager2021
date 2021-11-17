import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import ErrorIcon from '@material-ui/icons/Error';
import React, { useEffect, useMemo } from 'react';
import { useStyles } from './styles';

const Status = ({ data }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const states = useMemo(
    () => ['created', 'cost_approval', 'accepted', 'rejected', 'done'],
    []
  );
  const steps = [
    'Przyjęto do naprawy',
    'Oczekiwanie na akceptację kosztów',
    'W trakcie naprawy',
    'Gotowe do odbioru',
  ];

  const handleAccept = () => {
    console.log('accept');
  };
  const handleReject = () => {
    console.log('reject');
  };

  useEffect(() => {
    switch (data.status) {
      case states[0]:
        setActiveStep(0);
        break;
      case states[1]:
        setActiveStep(1);
        break;
      case states[2]:
        setActiveStep(2);
        break;
      case states[3]:
      case states[4]:
        setActiveStep(3);
        break;
      default:
        setActiveStep(0);
    }
  }, [data.status, states]);

  return (
    <>
      <Typography component="h2" className={classes.heading}>
        Service Manager 2021
      </Typography>
      <Typography component="h4" className={classes.description}>
        {`Zlecenie nr 7 - ${data.brand} ${data.model}`}
      </Typography>
      <Hidden xsDown>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box className={classes.cost}>
          <Typography>{`Koszt: ${data.repairCost}zł`}</Typography>
        </Box>
        <Box className={classes.buttons}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.btn}
            onClick={handleReject}
          >
            Rezygnuję
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={handleAccept}
          >
            Akceptuję
          </Button>
        </Box>
      </Hidden>
      <Hidden smUp>
        <Stepper
          style={{ width: '100%' }}
          orientation="vertical"
          activeStep={activeStep}
        >
          {steps.map((label) => {
            if (data.status === states[1] && label === steps[1])
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <Typography
                      style={{ fontSize: '14px' }}
                    >{`Koszt: ${data.repairCost}`}</Typography>
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
                  </StepContent>
                </Step>
              );
            if (data.status === states[3] && label === steps[2])
              return (
                <Step key={label}>
                  <StepLabel icon={<ErrorIcon color="error" />}>
                    Anulowano naprawę
                  </StepLabel>
                </Step>
              );
            else
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
          })}
        </Stepper>
      </Hidden>
    </>
  );
};

export default Status;
