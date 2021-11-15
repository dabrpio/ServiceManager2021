import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { selectClientsState } from '../../store/data/clients/clients.selectors';
import withEnhancedTable from './Table/EnhancedTable';
import ClientTableRow from './Table/Rows/ClientTableRow';

const ClientTable = withEnhancedTable(ClientTableRow);

const headCells = [
  {
    id: 'idClient',
    label: 'ID',
    smUp: true,
  },
  {
    id: 'name',
    label: 'Imie',
  },
  {
    id: 'surname',
    label: 'Nazwisko',
  },
  {
    id: 'phoneNumber',
    label: 'Nr telefonu',
  },
  {
    id: 'eMail',
    label: 'Email',
    smUp: true,
  },
];

function ClientList({ clients }) {
  return <ClientTable headCells={headCells} data={clients} heading="Klienci" />;
}

const mapStateToProps = (state, ownProps) => ({
  clients: selectClientsState(state),
});

export default connect(mapStateToProps, null)(ClientList);

ClientList.propTypes = {
  clients: PropTypes.array.isRequired,
};
