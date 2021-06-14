import { Typography } from '@material-ui/core';
import React from 'react';
import withEnhancedTable from '../Table/EnhancedTable';
import HomeTableRow from '../Table/Rows/HomeTableRow';
import { useStyles } from './styles';

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
        <Typography component="h4" classes={{ root: classes.name }}>
          Jan Kowalski, Admin
        </Typography>
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
