import TicketTableRow from '../Table/Rows/TicketTableRow';
import withEnhancedTable from '../Table/EnhancedTable';

const TicketTable = withEnhancedTable(TicketTableRow);

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
    id: 'kosztNaprawy',
    label: 'Koszt',
    smUp: true,
  },
  {
    id: 'status',
    label: 'Status',
  },
];

export default function TicketList({ tickets }) {
  return (
    <TicketTable headCells={headCells} data={tickets} heading="Zlecenia" />
  );
}
