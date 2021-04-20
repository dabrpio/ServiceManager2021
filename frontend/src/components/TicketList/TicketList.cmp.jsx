import { Link, useRouteMatch } from 'react-router-dom';
import NavBar from '../NavBar';
import styles from './TicketList.module.scss';

function TicketList() {
  let { url } = useRouteMatch();

  return (
    <>
      <NavBar />
      <div className={styles.ticket_list}>
        <h2>Tickets</h2>
        <ul>
          <li>
            <Link to={`${url}/ticket-id1`}>Ticket 1</Link>
          </li>
          <li>
            <Link to={`${url}/ticket-id2`}>Ticket 2</Link>
          </li>
          <li>
            <Link to={`${url}/ticket-id3`}>Ticket 3</Link>
          </li>
          <li>
            <Link to={`${url}/new`}>new</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TicketList;
