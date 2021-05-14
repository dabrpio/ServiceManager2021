import { Container, Typography } from '@material-ui/core';
import { useStyles } from './styles';

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Typography>Home</Typography>
      </Container>
    </div>
  );
}

export default Home;
