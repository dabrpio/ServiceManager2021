import React from 'react';
import withEnhancedTable from './Table/EnhancedTable';
import HomeTableRow from './Table/Rows/HomeTableRow';
import { connect } from 'react-redux';
import { selectDoneTicketsState } from '../../store/data/tickets/tickets.selectors';

const HomeTable = withEnhancedTable(HomeTableRow);

const headCells = [
  {
    id: 'rma',
    label: 'Rma',
  },
  {
    id: 'beginDate',
    label: 'Data',
    smUp: true,
  },
  {
    id: 'type',
    label: 'Rodzaj',
    smUp: true,
  },
  {
    id: 'brand',
    label: 'Marka',
  },
  {
    id: 'model',
    label: 'Model',
  },
  {
    id: 'information',
    label: 'Informacje',
    smUp: true,
  },
];

function Home({ tickets }) {
  return (
    <HomeTable
      headCells={headCells}
      data={tickets}
      heading={`W naprawie: ${tickets.length}`}
    />
  );
}

const mapStateToProps = (state, ownProps) => ({
  tickets: selectDoneTicketsState(state),
});

export default connect(mapStateToProps, null)(Home);
