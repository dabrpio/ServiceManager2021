import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { selectTicketsState } from '../../store/data/tickets/tickets.selectors';
import withEnhancedTable from './Table/EnhancedTable';
import TicketTableRow from './Table/Rows/TicketTableRow';

const TicketTable = withEnhancedTable(TicketTableRow);

const headCells = [
  {
    id: 'rma',
    label: 'Rma',
  },
  {
    id: 'issueDate',
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
    id: 'repairCost',
    label: 'Koszt',
    smUp: true,
  },
  {
    id: 'status',
    label: 'Status',
  },
];

function TicketList({ tickets }) {
  return (
    <TicketTable headCells={headCells} data={tickets} heading="Zlecenia" />
  );
}

const mapStateToProps = (state, ownProps) => ({
  tickets: selectTicketsState(state),
});

export default connect(mapStateToProps, null)(TicketList);

TicketList.propTypes = {
  tickets: PropTypes.array.isRequired,
};
