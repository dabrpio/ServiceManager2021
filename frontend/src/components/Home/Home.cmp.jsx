import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import HomeTableRow from '../Table/Rows/HomeTableRow';
import withEnhancedTable from '../Table/EnhancedTable';

const HomeTable = withEnhancedTable(HomeTableRow);

const headCells = [
  {
    id: 'rma',
    label: 'Rma',
  },
  {
    id: 'dataPrzyjecia',
    label: 'Data',
    smUp: true,
  },
  {
    id: 'rodzaj',
    label: 'Rodzaj',
    smUp: true,
  },
  {
    id: 'marka',
    label: 'Marka',
  },
  {
    id: 'model',
    label: 'Model',
  },
  {
    id: 'informacje',
    label: 'Informacje',
    smUp: true,
  },
];

function Home({ tickets }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <Typography>Jan Kowalski, Admin</Typography>
      </div>

      <HomeTable
        headCells={headCells}
        data={tickets}
        heading={`W naprawie: ${tickets.length}`}
        homeTable={true}
      />
    </div>
  );
}

export default Home;
