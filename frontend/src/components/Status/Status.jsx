import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import React from 'react';
import { useStyles } from './styles';
import { useParams } from 'react-router-dom';

function getSteps() {
  return [
    'Przyjęto do naprawy',
    'Oczekiwanie na akceptację kosztów',
    'W trakcie naprawy',
    'Gotowe do odbioru',
  ];
}

const Status = () => {
  const { rma } = useParams();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  return (
    <div className={classes.root}>
      <Container className={classes.loginWrapper} maxWidth="md">
        <Typography component="h2" className={classes.heading}>
          Service Manager 2021
        </Typography>
        <Typography component="h4" className={classes.description}>
          Status zlecenia: {rma}
        </Typography>
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
      </Container>
    </div>
  );
};

export default Status;
