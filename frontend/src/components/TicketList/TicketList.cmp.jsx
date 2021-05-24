import { useEffect } from 'react';
import EnhancedTable from './Table/EnhancedTable';

export default function TicketList({ tickets }) {
  useEffect(() => {
    console.log(tickets);
  }, [tickets]);
  return <EnhancedTable tickets={tickets} />;
}
