import { useParams } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';
import { useStyles } from './styles';

function Employee() {
  const classes = useStyles();
  const { employeeId } = useParams();

  return (
    <div className={classes.root}>
      <Container>
        <Typography component="h2">{employeeId}</Typography>
      </Container>
    </div>
  );
}

export default Employee;
