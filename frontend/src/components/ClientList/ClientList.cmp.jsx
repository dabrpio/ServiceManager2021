import ClientTableRow from '../Table/Clients/ClientTableRow';
import withEnhancedTable from '../Table/EnhancedTable';
import PropTypes from 'prop-types';

const ClientTable = withEnhancedTable(ClientTableRow);

const headCells = [
  {
    id: 'idKlienta',
    label: 'ID',
    smUp: true,
  },
  {
    id: 'imie',
    label: 'Imie',
  },
  {
    id: 'nazwisko',
    label: 'Nazwisko',
  },
  {
    id: 'nrTel',
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

export default ClientList;

ClientList.propTypes = {
  clients: PropTypes.array.isRequired,
};
