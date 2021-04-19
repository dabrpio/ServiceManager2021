import { useParams } from 'react-router-dom';

function Ticket() {
  let { ticketId } = useParams();

  return (
    <div>
      <h3>{ticketId}</h3>
    </div>
  );
}

export default Ticket;
